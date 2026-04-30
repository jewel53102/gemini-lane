import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { rateLimit } from "@/app/lib/rateLimit";

type AnalysisResult = {
  score: number;
  level: string;
  timeLoss: string;
  problemAreas: string[];
  quickWins: string[];
  recommendation: string;
};

function calculateAnalysis(data: Record<string, string>): AnalysisResult {
  let score = 100;
  const problemAreas: string[] = [];
  const quickWins: string[] = [];

  if (data.taskTracking === "Mostly in my head") {
    score -= 25;
    problemAreas.push("Tasks and projects are not centralized");
    quickWins.push("Create a simple project and task dashboard");
  }

  if (data.taskTracking === "Notes or notebooks") {
    score -= 18;
    problemAreas.push("Workflows may be difficult to repeat or delegate");
    quickWins.push("Move recurring tasks into a shared operating system");
  }

  if (data.leadFollowUp === "Manually") {
    score -= 22;
    problemAreas.push("Lead follow-up depends too heavily on manual effort");
    quickWins.push("Automate first-response and follow-up reminders");
  }

  if (data.adminHours === "10–20") {
    score -= 18;
    problemAreas.push("Admin work is taking too much of your week");
    quickWins.push("Identify your top 3 repeated admin tasks");
  }

  if (data.adminHours === "20+") {
    score -= 28;
    problemAreas.push("Manual admin work is likely limiting growth");
    quickWins.push("Build automation for repetitive backend tasks");
  }

  if (data.aiUsage === "No") {
    score -= 15;
    problemAreas.push("AI tools are not yet supporting your operations");
    quickWins.push("Start with AI-assisted email, SOP, and follow-up workflows");
  }

  if (data.aiUsage === "A little") {
    score -= 10;
    problemAreas.push("AI is being used, but not as a real business system");
    quickWins.push("Create clear use cases for AI inside daily workflows");
  }

  if (data.biggestBottleneck) {
    problemAreas.push(`${data.biggestBottleneck} is your biggest current bottleneck`);
  }

  score = Math.max(25, Math.min(score, 100));

  const level =
    score < 50
      ? "high inefficiency"
      : score < 75
        ? "moderate inefficiency"
        : "strong foundation with improvement opportunities";

  const timeLoss =
    score < 50
      ? "15–30+ hours per week"
      : score < 75
        ? "8–15 hours per week"
        : "3–8 hours per week";

  const recommendation =
    score < 50
      ? "Your business likely needs workflow cleanup, automation, and a central operating system."
      : score < 75
        ? "Your business has workable systems, but several areas could be streamlined quickly."
        : "Your business has a good base, and targeted automation could help you scale more smoothly.";

  return {
    score,
    level,
    timeLoss,
    problemAreas: [...new Set(problemAreas)].slice(0, 4),
    quickWins: [...new Set(quickWins)].slice(0, 4),
    recommendation,
  };
}

async function addLeadToMailchimp(data: Record<string, string>, analysis: AnalysisResult) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !serverPrefix || !audienceId || !data.email) {
    console.error("Missing Mailchimp env vars", {
      hasApiKey: Boolean(apiKey),
      hasServerPrefix: Boolean(serverPrefix),
      hasAudienceId: Boolean(audienceId),
      hasEmail: Boolean(data.email),
    });

    return {
      success: false,
      error: "Missing Mailchimp configuration.",
    };
  }

  const emailHash = createHash("md5").update(data.email.toLowerCase()).digest("hex");

  const baseUrl = `https://${serverPrefix}.api.mailchimp.com/3.0`;
  const authHeader = `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
    "base64"
  )}`;

  const memberResponse = await fetch(
    `${baseUrl}/lists/${audienceId}/members/${emailHash}`,
    {
      method: "PUT",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: data.email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: data.name || "",
          COMPANY: data.businessName || "",
        },
      }),
    }
  );

  if (!memberResponse.ok) {
    const errorText = await memberResponse.text();
    console.error("Mailchimp member error:", errorText);

    return {
      success: false,
      error: errorText,
    };
  }

  const priorityTag =
    analysis.score < 50
      ? "High Priority Lead"
      : analysis.score < 75
        ? "Workflow Optimization Lead"
        : "AI Optimization Lead";

  const tagResponse = await fetch(
    `${baseUrl}/lists/${audienceId}/members/${emailHash}/tags`,
    {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tags: [
          { name: "Free Business Analysis", status: "active" },
          { name: priorityTag, status: "active" },
        ],
      }),
    }
  );

  if (!tagResponse.ok) {
    const errorText = await tagResponse.text();
    console.error("Mailchimp tag error:", errorText);

    return {
      success: false,
      error: errorText,
    };
  }

  return {
    success: true,
  };
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (data.website) {
      return NextResponse.json({ success: true });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    const { success } = await rateLimit.limit(`analysis:${ip}`);

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    if (!data.name || !data.email || !data.email.includes("@")) {
      return NextResponse.json(
        { error: "A valid name and email are required." },
        { status: 400 }
      );
    }

    const analysis = calculateAnalysis(data);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase env vars", {
        hasUrl: Boolean(supabaseUrl),
        hasServiceKey: Boolean(supabaseKey),
      });

      return NextResponse.json(
        {
          ...analysis,
          databaseSaved: false,
          mailchimpSaved: false,
          databaseError: "Missing Supabase environment variables.",
        },
        { status: 200 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: existingSubmission, error: lookupError } = await supabase
  .from("business_analysis_submissions")
  .select("id")
  .eq("email", data.email.toLowerCase())
  .maybeSingle();

if (lookupError) {
  console.error("Email lookup error:", lookupError);

  return NextResponse.json(
    { error: "Unable to check existing submission." },
    { status: 500 }
  );
}

if (existingSubmission) {
  return NextResponse.json(
    {
      error:
        "This email has already been used for a business analysis. Please book a call if you would like to discuss your results.",
    },
    { status: 409 }
  );
}

    const { error } = await supabase.from("business_analysis_submissions").insert({
      name: data.name,
      email: data.email.toLowerCase(),
      business_name: data.businessName,
      answers: data,
      score: analysis.score,
      level: analysis.level,
      problem_areas: analysis.problemAreas,
      quick_wins: analysis.quickWins,
      recommendation: analysis.recommendation,
    });

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        {
          ...analysis,
          databaseSaved: false,
          mailchimpSaved: false,
          databaseError: error.message,
        },
        { status: 200 }
      );
    }

    const mailchimpResult = await addLeadToMailchimp(data, analysis);

    return NextResponse.json({
      ...analysis,
      databaseSaved: true,
      mailchimpSaved: mailchimpResult.success,
      mailchimpError: mailchimpResult.success ? null : mailchimpResult.error,
    });
  } catch (error) {
    console.error("API route error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong creating your analysis.",
      },
      { status: 500 }
    );
  }
}