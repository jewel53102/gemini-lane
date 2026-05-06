import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { rateLimit } from "@/app/lib/rateLimit";
import { z } from "zod";

const emailSchema = z.string().email();

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

    const { success } = await rateLimit.limit(`contact:${ip}`);

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    if (!data.name || !emailSchema.safeParse(data.email).success) {
      return NextResponse.json(
        { error: "A valid name and email are required." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Missing Supabase environment variables." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("contact_leads").insert({
      name: data.name,
      email: data.email,
      business_name: data.businessName || null,
      phone: data.phone || null,
      interest: data.interest || null,
      message: data.message || null,
    });

    if (error) {
      console.error("Contact lead insert error:", error);

      return NextResponse.json(
        { error: "Unable to save contact lead." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}