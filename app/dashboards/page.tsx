import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Sample Business Dashboards | Gemini Lane",
  description:
    "Explore sample workflow, client, project, and operations dashboards for small to mid-sized businesses.",
};

const dashboards = [
  {
    title: "Client Project Dashboard",
    screenshot: "/dashboards/client-project-dashboard.png",
    bestFor: "Construction, home services, agencies, consultants",
    description:
      "A centralized client view that keeps project details, deadlines, budget notes, contracts, risks, and communication in one place.",
    features: [
      "Client contact details",
      "Project status and timeline",
      "Open tasks and owners",
      "Budget and contract notes",
      "Risk and issue tracking",
    ],
    outcome:
      "Helps business owners reduce missed updates, improve communication, and keep projects moving without digging through emails.",
  },
  {
    title: "Lead Follow-Up Dashboard",
    screenshot: "/dashboards/lead-followup-dashboard.png",
    bestFor: "Service businesses, local contractors, consultants, sales teams",
    description:
      "A simple sales pipeline that tracks new leads, follow-up dates, lead source, estimated value, and next action.",
    features: [
      "New lead capture",
      "Follow-up reminders",
      "Lead source tracking",
      "Deal stage visibility",
      "Missed opportunity alerts",
    ],
    outcome:
      "Helps you respond faster, stop losing leads, and create a consistent follow-up process.",
  },
  {
    title: "Operations Workflow Dashboard",
    screenshot: "/dashboards/operations-workflow-dashboard.png",
    bestFor: "Growing businesses with repeatable weekly work",
    description:
      "A backend operating system for recurring tasks, team responsibilities, SOPs, and workflow bottlenecks.",
    features: [
      "Recurring task tracker",
      "Workflow status board",
      "Team responsibility map",
      "SOP/documentation hub",
      "Automation opportunities list",
    ],
    outcome:
      "Helps reduce duplicated work, clarify ownership, and make the business less dependent on memory.",
  },
  {
    title: "AI Automation Opportunity Dashboard",
    screenshot: "/dashboards/ai-automation-dashboard.png",
    bestFor: "Businesses ready to use AI but unsure where to start",
    description:
      "A practical dashboard for identifying which manual tasks can be automated, delegated, simplified, or supported with AI.",
    features: [
      "Manual task inventory",
      "AI opportunity score",
      "Time-savings estimate",
      "Tool recommendation notes",
      "Implementation priority list",
    ],
    outcome:
      "Helps you avoid random AI tools and focus only on automation that can actually save time.",
  },
  {
    title: "Owner Command Center",
    screenshot: "/dashboards/owner-command-center.png",
    bestFor: "Owners managing too many moving pieces",
    description:
      "A high-level dashboard that gives the owner visibility into priorities, projects, leads, team tasks, and operational issues.",
    features: [
      "Weekly priority view",
      "Active project snapshot",
      "Lead and revenue pipeline",
      "Team task summary",
      "Decisions needed section",
    ],
    outcome:
      "Helps you see what matters most each week without jumping between multiple systems.",
  },
  {
    title: "Client Onboarding Dashboard",
    screenshot: "/dashboards/sop-client-onboarding-dashboard.png",
    bestFor: "Consultants, agencies, professional services, service providers",
    description:
      "A repeatable onboarding system that guides every new client through the same organized process from signed agreement to kickoff.",
    features: [
      "New client checklist",
      "Required documents",
      "Kickoff tasks",
      "Internal handoff notes",
      "Client communication tracker",
    ],
    outcome:
      "Creates a smoother client experience and reduces the chance of missed setup steps.",
  },
];

const workflowExamples = [
  {
    step: "01",
    title: "Lead Comes In",
    text: "The lead is captured from your website, form, referral, or phone inquiry.",
  },
  {
    step: "02",
    title: "Follow-Up Is Triggered",
    text: "The system reminds you or automatically sends the first response.",
  },
  {
    step: "03",
    title: "Work Is Organized",
    text: "Tasks, owners, due dates, and client details move into one dashboard.",
  },
  {
    step: "04",
    title: "Owner Gets Visibility",
    text: "You can see what is active, what is stuck, and what needs your decision.",
  },
];

export default function DashboardsPage() {
  return (
    <main className="dashboards-page">
      <section className="local-hero">
        <p className="eyebrow">Sample Business Dashboards</p>

        <h1>See what better business systems could look like.</h1>

        <p>
          These sample dashboards show how Gemini Lane helps small to mid-sized
          businesses organize workflows, reduce manual work, track clients, and
          create more efficient operations.
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

      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">Why dashboards help</p>
          <h2>Your business should not live in scattered notes, inboxes, and spreadsheets.</h2>

          <p>
            A good dashboard gives you one place to see what matters: clients,
            tasks, deadlines, projects, leads, team responsibilities, and next
            steps. The goal is not more software. The goal is less confusion.
          </p>
        </div>

        <div className="process-grid">
          {workflowExamples.map((item) => (
            <div key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">Dashboard examples</p>
          <h2>Sample systems Gemini Lane can build or customize for your business.</h2>

          <p>
            These examples can be built in tools like Notion, Airtable, Monday,
            ClickUp, Google Workspace, or a custom system depending on your
            needs, team, and workflow.
          </p>
        </div>

        <div className="dashboard-showcase-grid">
          {dashboards.map((dashboard) => (
            <article className="dashboard-example-card" key={dashboard.title}>
              <div className="dashboard-card-header">
                <p className="eyebrow">Example Dashboard</p>
                <h3>{dashboard.title}</h3>
                <p className="dashboard-best-for">
                  <strong>Best for:</strong> {dashboard.bestFor}
                </p>
              </div>

              <p>{dashboard.description}</p>

              <div className="dashboard-preview">
                <Image
                  src={dashboard.screenshot}
                  alt={`${dashboard.title} screenshot`}
                  width={1200}
                  height={750}
                  className="dashboard-screenshot"
                />
              </div>

              <div className="dashboard-feature-list">
                <h4>What it can include:</h4>
                <ul>
                  {dashboard.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="dashboard-outcome">
                <h4>Business outcome:</h4>
                <p>{dashboard.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gl-section gl-dark">
        <div className="gl-split">
          <div>
            <p className="eyebrow">Custom build options</p>
            <h2>These dashboards are examples. Yours should match how your business actually runs.</h2>
          </div>

          <div className="gl-check-list">
            <span>Workflow mapping before building</span>
            <span>Custom fields based on your business</span>
            <span>Team training and handoff</span>
            <span>Automation recommendations included</span>
          </div>
        </div>
      </section>

      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">Common dashboard builds</p>
          <h2>What business owners usually need first.</h2>
        </div>

        <div className="dashboard-mini-grid">
          <div>
            <h3>For lead management</h3>
            <p>
              Track inquiries, follow-ups, lead source, proposal status, and
              next action so opportunities do not fall through the cracks.
            </p>
          </div>

          <div>
            <h3>For client work</h3>
            <p>
              Organize client information, project timelines, deliverables,
              files, approvals, and communication in one place.
            </p>
          </div>

          <div>
            <h3>For team operations</h3>
            <p>
              Clarify who owns what, what is due this week, what is blocked, and
              which tasks repeat every month.
            </p>
          </div>
        </div>
      </section>

      <section className="gl-cta-band">
        <div>
          <p className="eyebrow">Free Business Analysis</p>
          <h2>Not sure which dashboard your business actually needs?</h2>

          <p>
            Start with the free business analysis. You’ll get an instant
            efficiency score and a clearer idea of what workflow, automation, or
            dashboard would make the biggest impact.
          </p>
        </div>

        <Link href="/free-business-analysis" className="primary-button light">
          Start the Free Analysis
        </Link>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Build the system behind the business</p>

        <h2>Let’s turn your scattered workflows into a dashboard your business can actually use.</h2>

        <p>
          Book a short strategy call and we’ll talk through what is currently
          messy, manual, or difficult to track.
        </p>

        <div className="hero-actions center">
          <Link href="/book-call" className="primary-button">
            Book a 15-Minute Call
          </Link>

          <Link href="/frederick-md-ai-automation" className="secondary-button">
            View Frederick AI Services
          </Link>
        </div>
      </section>
    </main>
  );
}