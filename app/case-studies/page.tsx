import Link from "next/link";

export const metadata = {
  title: "Business Results & Case Studies | Gemini Lane",
  description:
    "See how Gemini Lane has helped small businesses in Frederick, MD reduce manual work, automate follow-up, and build systems that run consistently.",
};

const caseStudies = [
  {
    industry: "Home Services",
    location: "Frederick, MD",
    label: "Project Tracking & Operations",
    headline: "From 40 spreadsheet tabs to a real operating system",
    situation:
      "A residential contractor in Frederick was managing 40+ active projects across a shared Google Sheet, group texts, and handwritten notes. Estimators, crew leads, and the owner were all working from different versions of the same information. Jobs were getting missed, follow-ups were inconsistent, and the owner was spending Sunday evenings just trying to figure out where everything stood.",
    solution:
      "Built a centralized project dashboard in Notion with status views organized by phase — estimate, active, punch list, complete. Each project card holds contact info, scope notes, files, and assigned crew. A weekly digest view shows every active job and what needs the owner's attention, without requiring a single check-in call.",
    results: [
      "18 hours per week recovered from status check-ins and admin",
      "Project delays caught 2–3 days earlier on average",
      "Owner stopped working Sunday evenings within the first month",
      "New crew members onboarded to the system in under a day",
    ],
    timeframe: "Live in 3 weeks",
    ctaLine:
      "If your projects live in a spreadsheet that only you fully understand, this is one of the most common starting points we see.",
  },
  {
    industry: "Professional Services",
    location: "Frederick County",
    label: "Lead Follow-Up & Pipeline",
    headline: "Stopped losing qualified leads to slow response",
    situation:
      "A Frederick-area consultant was getting steady referral and inbound leads, but follow-up was inconsistent. New inquiries would sit in an email inbox for hours — sometimes days. Some leads got multiple follow-ups; others fell through entirely. There was no system, just intention. The owner estimated they were losing 2–3 qualified opportunities every month simply by being too slow or forgetting to follow up.",
    solution:
      "Built an automated lead capture and follow-up pipeline in Airtable connected to the existing contact form. New leads trigger an immediate acknowledgment email and create a follow-up task with a 24-hour deadline. Deal stages are tracked from first contact through close, and a Monday morning digest surfaces anything that needs attention before the week starts.",
    results: [
      "Response time to new leads dropped from 4 hours to under 15 minutes",
      "No missed leads in the 60 days following launch",
      "Lead-to-call conversion rate improved within the first 30 days",
      "Owner stopped manually managing follow-up reminders entirely",
    ],
    timeframe: "Live in 2 weeks",
    ctaLine:
      "If leads are coming in but follow-up depends on memory or good timing, the fix is simpler than most people expect.",
  },
  {
    industry: "Creative Agency",
    location: "Serving Frederick & surrounding counties",
    label: "Workflow Systems & SOPs",
    headline: "Got the business out of people's heads and into a system",
    situation:
      "A small agency was growing but everything important — client onboarding steps, content approval flows, billing reminders, recurring deliverables — lived in the owner's head or in a disorganized Slack history. Adding a new team member meant weeks of shadowing. Mistakes happened not because of incompetence but because there was no written playbook. The owner recognized the problem but never had time to fix it.",
    solution:
      "Mapped every recurring workflow in the business across two working sessions, then built a central operations hub in Notion with SOPs for each process, a client onboarding checklist, and a recurring tasks tracker. Automated weekly reminders for high-priority items so nothing requires the owner to remember it.",
    results: [
      "New team member onboarded in 3 days instead of 3 weeks",
      "Recurring deliverables missed dropped to zero",
      "Owner removed as the single point of knowledge for day-to-day operations",
      "Client onboarding time cut in half with a repeatable checklist",
    ],
    timeframe: "Full system live in 4 weeks",
    ctaLine:
      "If the business slows down or makes mistakes when you are not directly involved, a documented operating system is usually the missing piece.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="local-hero">
        <p className="eyebrow">Results</p>
        <h1>What improving systems actually looks like.</h1>
        <p>
          These are anonymized examples from real engagements with small
          businesses in and around Frederick, MD. Industries, team sizes, and
          starting points vary — the pattern is usually the same: manual work,
          scattered information, and growth limited by the absence of a system.
        </p>
      </section>

      <section className="gl-section gl-light">
        <div className="case-study-grid">
          {caseStudies.map((cs) => (
            <article className="case-study-card" key={cs.headline}>
              <div className="case-study-header">
                <p className="eyebrow">{cs.industry} &middot; {cs.location}</p>
                <span className="case-study-timeframe">{cs.timeframe}</span>
              </div>

              <h2>{cs.headline}</h2>

              <p className="case-study-situation">{cs.situation}</p>

              <div className="case-study-body">
                <div>
                  <h4 className="case-study-label">What was built</h4>
                  <p>{cs.solution}</p>
                </div>

                <div>
                  <h4 className="case-study-label">Results</h4>
                  <ul className="case-study-results">
                    {cs.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="case-study-footer">
                <p>
                  {cs.ctaLine}{" "}
                  <Link href="/free-business-analysis">
                    Get your free business analysis &rarr;
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Build the system behind the business</p>
        <h2>Let's create results like this for your business.</h2>
        <p>
          Start with the free business analysis. You'll get an efficiency score
          and a clear picture of where your biggest opportunities are — before
          committing to anything.
        </p>
        <div className="hero-actions center">
          <Link href="/free-business-analysis" className="primary-button">
            Get Your Free Business Analysis
          </Link>
          <Link href="/book-call" className="secondary-button">
            Book a 15-Minute Call
          </Link>
        </div>
      </section>
    </main>
  );
}
