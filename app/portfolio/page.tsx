import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruby Groves — Portfolio",
  description:
    "Ruby Groves — Senior Technical Program Manager / AI Program Manager. Enterprise program delivery, AI workflow implementation, and cross-functional leadership.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "profile",
    title: "Ruby Groves — Portfolio",
    description:
      "Senior Technical Program Manager / AI Program Manager. Enterprise program delivery, AI workflow implementation, and cross-functional leadership.",
    images: [
      {
        url: "https://www.gemini-lane.com/ruby-gemini-lane.jpeg",
        width: 480,
        height: 600,
        alt: "Ruby Groves",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ruby Groves — Portfolio",
    description:
      "Senior Technical Program Manager / AI Program Manager. Enterprise program delivery, AI workflow implementation, and cross-functional leadership.",
    images: ["https://www.gemini-lane.com/ruby-gemini-lane.jpeg"],
  },
};

const credentials = [
  { stat: "10+ years", label: "Leading large-scale digital initiatives, migrations, and operational programs" },
  { stat: "Enterprise-scale", label: "System migrations and workflow improvements across high-traffic platforms at SiriusXM" },
  { stat: "~30%", label: "Reduction in turnaround time delivered through process redesign and automation" },
  { stat: "~$150K/mo", label: "Revenue impact supported through smarter systems, testing, and process design" },
];

const competencies = [
  "Program framework design — building the system, not just operating it",
  "AI workflow implementation and adoption",
  "Executive stakeholder leadership and communication",
  "Cross-functional program execution",
  "Governance, roadmap ownership, and Agile delivery",
  "Business process optimization at scale",
  "Operational scalability",
  "Measurable business outcomes",
];

const selectedWork = [
  {
    label: "Project Operations System",
    headline: "Replaced 40+ spreadsheet tabs with a single operating system",
    body:
      "A multi-site operation was running active projects across a shared spreadsheet, group texts, and handwritten notes — with no single source of truth for estimators, crew leads, or leadership. I designed and built a centralized project-tracking system with status-based views, standardized project records, and a weekly digest so leadership always had visibility without chasing updates.",
    results: [
      "18 hours per week recovered from status check-ins and admin work",
      "Project delays caught 2–3 days earlier on average",
      "New team members onboarded to the system in under a day",
    ],
  },
  {
    label: "AI-Driven Lead & Pipeline Automation",
    headline: "Cut response time from 4 hours to under 15 minutes",
    body:
      "Inbound leads were sitting unacknowledged for hours or days, with no consistent follow-up process — costing an estimated 2–3 qualified opportunities every month. I built an automated capture-and-follow-up pipeline with instant acknowledgment, deadline-driven task creation, and full pipeline visibility from first contact through close.",
    results: [
      "Response time to new leads dropped from 4 hours to under 15 minutes",
      "Zero missed leads in the 60 days following launch",
      "Lead-to-call conversion improved within the first 30 days",
    ],
  },
  {
    label: "Operational Documentation & Onboarding",
    headline: "Took the business out of one person's head and into a system",
    body:
      "Critical operating knowledge — onboarding steps, approval flows, recurring deliverables — existed only in one leader's head and a disorganized chat history. I mapped every recurring workflow, built a documented SOP library and onboarding checklist, and layered in automated reminders so nothing depended on memory.",
    results: [
      "New team member onboarding time cut from 3 weeks to 3 days",
      "Missed recurring deliverables dropped to zero",
      "Removed a single point of failure from day-to-day operations",
    ],
  },
];

const SKILL_ACCENTS = [
  "var(--teal)",
  "var(--teal-dark)",
  "var(--ink)",
];

const skillGroups = [
  {
    title: "AI",
    summary:
      "I design, build, and scale AI-driven products and workflows — from architecting autonomous agents to leading responsible AI adoption across teams.",
    items:
      "AI Product Strategy & Development, AI Agent Design (Claude API, OpenAI API, Anthropic API), AI-Assisted Software Development (Claude Code, GitHub Copilot Workspace, Next.js), AI Workflow Automation & Adoption (ChatGPT, Claude, Gemini, Copilot, Perplexity, Notion AI), AI Program Management & Governance, AI Risk & Compliance Frameworks, Responsible AI Adoption, Change Management for AI Rollouts",
  },
  {
    title: "Project Management & Delivery",
    summary:
      "Certified in Agile and Scrum, I run full project and program lifecycles from planning through delivery — with the frameworks and governance to manage risk, change, and stakeholders along the way.",
    items:
      "Scrum Certified, Agile Project Management, SDLC, Kanban, Lean, Six Sigma, Waterfall, Hybrid Agile, Risk & Dependency Management, Change Management, Stakeholder & Executive Reporting, Vendor Management, Program Governance, Roadmapping, OKRs, Release Management, RAID Logs, Retrospectives & Post-Mortems",
  },
  {
    title: "Systems, Automation & Tools",
    summary:
      "I build and maintain the operational backbone teams run on daily, connecting tools into repeatable workflows.",
    items:
      "Jira, Confluence, Monday.com, Notion, Trello, Power Automate, Zapier, Asana, ClickUp, Airtable, Slack, Microsoft Teams, SharePoint, Google Workspace, GitHub, Power BI",
  },
  {
    title: "Data & Analytics",
    summary:
      "I turn performance data into decisions, using analytics and SEO platforms to track outcomes and guide strategy.",
    items:
      "Google Analytics, Adobe Analytics, SEMrush, Ahrefs, Moz, Tableau, data analysis, reporting, and performance insights",
  },
  {
    title: "Web & Technical Foundations",
    summary:
      "Hands-on technical fluency lets me build alongside engineering teams, not just manage around them.",
    items:
      "HTML, CSS, JavaScript, TypeScript, PHP, SQL, React, Next.js, WordPress, Shopify, API Integrations, Vercel, Supabase",
  },
  {
    title: "CRM & Growth Systems",
    summary:
      "I run the CRM and lifecycle marketing systems that connect customer data to growth execution.",
    items: "Salesforce, ACT!, HubSpot, Mailchimp, Constant Contact, Email Marketing",
  },
  {
    title: "Advertising & Marketing Platforms",
    summary:
      "I plan, launch, and optimize paid campaigns across search and social — from ad creative through conversion tracking and attribution.",
    items:
      "Google Ads, Meta Ads (Facebook/Instagram), TikTok Ads, Google Tag Manager, Meta Pixel, Conversion Tracking & Attribution",
  },
];

const independentPrograms = [
  {
    name: "Gemini Lane",
    role: "Founder",
    description:
      "AI automation and operations consulting practice — built from the ground up, including the brand, website, and service delivery model. Every client engagement is scoped, designed, and delivered personally, end-to-end.",
    url: "https://www.gemini-lane.com",
  },
  {
    name: "Vaulterly",
    role: "Solo Founder & Builder",
    description:
      "An AI-native research organizer for students, writers, and researchers. Users save sources into organized vaults, then pull the full context into any AI tool (ChatGPT, Claude, Gemini) to write grounded work instead of hallucinated citations. Designed, built, and launched independently — product, tech stack, and go-to-market strategy.",
    url: "https://myvaulterly.com",
  },
  {
    name: "Cromwell & Associates CPAs",
    role: "Operations & Systems Consultant",
    description:
      "Designed and implemented a new operations and workflow system for a CPA firm following an acquisition — centralizing client tracking, task management, and deadlines, plus staff training. Also built and launched a time-sensitive paid ad campaign (Google + Meta) with a custom landing page for a federal tax-relief opportunity.",
    url: "https://cromwellcpa.com",
  },
  {
    name: "DMV Tax Resolution",
    role: "Website Builder",
    description:
      "Ground-up rebuild of a tax resolution firm's marketing site, geo-targeted for the Maryland/DC/Virginia market — 10 individual service pages, a live blog, and a lead-capture flow, replacing an outdated existing site.",
    url: "https://www.dmvtaxresolution.com",
  },
];

const featuredDashboards = [
  {
    title: "Client Project Dashboard",
    screenshot: "/dashboards/client-project-dashboard.png",
    bestFor: "Multi-project delivery, cross-functional teams",
    description:
      "A centralized project view — status, timeline, budget notes, contracts, risks, and communication in one place, so nothing depends on memory or scattered email threads.",
    features: [
      "Project status and timeline",
      "Open tasks and owners",
      "Budget and contract notes",
      "Risk and issue tracking",
    ],
  },
  {
    title: "AI Automation Opportunity Dashboard",
    screenshot: "/dashboards/ai-automation-dashboard.png",
    bestFor: "AI adoption and program prioritization",
    description:
      "A structured system for identifying which manual tasks can be automated, delegated, or supported with AI — scored by opportunity and time savings, turning \"we should use AI somewhere\" into a prioritized roadmap.",
    features: [
      "Manual task inventory",
      "AI opportunity score",
      "Time-savings estimate",
      "Implementation priority list",
    ],
  },
  {
    title: "Owner Command Center",
    screenshot: "/dashboards/owner-command-center.png",
    bestFor: "Executive visibility and stakeholder reporting",
    description:
      "A single high-level view into priorities, active projects, pipeline, team tasks, and decisions needed — built for leaders who otherwise have to jump between five different systems to know what matters this week.",
    features: [
      "Weekly priority view",
      "Active project snapshot",
      "Team task summary",
      "Decisions needed section",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-hero">
        <Image
          src="/ruby-gemini-lane.jpeg"
          alt="Ruby Groves"
          width={200}
          height={250}
          className="portfolio-photo"
          priority
        />
        <div>
          <p className="eyebrow">Portfolio</p>
          <h1>Ruby Groves</h1>
          <p className="portfolio-role-line">
            Senior Technical Program Manager &middot; AI Program Manager &middot;
            Enterprise AI Delivery Leader
          </p>
          <p className="portfolio-summary">
            I lead enterprise-scale technical programs and AI-driven operational
            transformation — building the frameworks, governance, and workflow
            systems that turn strategy into measurable outcomes, not just
            managing what already exists.
          </p>
        </div>
      </section>

      <section className="gl-section">
        <div className="about-credentials">
          {credentials.map((item) => (
            <div className="about-credential" key={item.stat}>
              <strong
                style={{
                  display: "block",
                  fontSize: "1.6rem",
                  fontFamily: "var(--font-heading)",
                  color: "var(--teal)",
                  marginBottom: "8px",
                  letterSpacing: "-0.03em",
                }}
              >
                {item.stat}
              </strong>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">Background</p>
          <h2>Over a decade making complex systems work.</h2>
          <p>
            I spent more than ten years as a Technical Program Manager, leading
            large-scale digital initiatives, system migrations, and process
            improvements across high-traffic enterprise platforms, including
            SiriusXM. Across every program, the pattern was consistent: the
            hardest problems were rarely technical — they were operational,
            organizational, and governance gaps.
          </p>
          <p>
            I now run Gemini Lane, where I personally scope, design, and deliver
            AI-driven workflow and automation systems end-to-end for clients —
            translating that same enterprise program discipline into AI
            adoption, measurable efficiency gains, and operational scale.
          </p>
        </div>
      </section>

      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">Core competencies</p>
          <h2>What I bring to a program.</h2>
        </div>
        <div className="gl-check-list check-grid" style={{ maxWidth: "860px", margin: "0 auto" }}>
          {competencies.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Tools and technical skills.</h2>
        </div>
        <div className="about-method-grid portfolio-skills-grid">
          {skillGroups.map((group, index) => {
            const accent = SKILL_ACCENTS[index % SKILL_ACCENTS.length];
            return (
              <div
                className="about-method-step skill-card"
                key={group.title}
                style={{ borderLeft: `4px solid ${accent}` }}
              >
                <h3 style={{ color: accent }}>{group.title}</h3>
                <p style={{ fontWeight: 600, color: "var(--ink)", marginBottom: "10px" }}>
                  {group.summary}
                </p>
                <p>{group.items}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Operational systems I've personally built and delivered.</h2>
        </div>
        <div className="case-study-grid">
          {selectedWork.map((item) => (
            <article className="case-study-card" key={item.headline}>
              <p className="eyebrow">{item.label}</p>
              <h2>{item.headline}</h2>
              <p className="case-study-situation">{item.body}</p>
              <div className="case-study-body">
                <div>
                  <h4 className="case-study-label">Results</h4>
                  <ul className="case-study-results">
                    {item.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">Independent programs</p>
          <h2>Products and sites I've built end-to-end.</h2>
        </div>
        <div className="about-method-grid">
          {independentPrograms.map((program) => (
            <div className="about-method-step" key={program.name}>
              <span className="step-label">{program.role}</span>
              <h3>{program.name}</h3>
              <p>{program.description}</p>
              <a
                className="text-link"
                href={program.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">Dashboards &amp; reporting systems</p>
          <h2>Systems I've designed to give leaders visibility.</h2>
        </div>
        <div className="dashboard-showcase-grid">
          {featuredDashboards.map((dashboard) => (
            <article className="dashboard-example-card" key={dashboard.title}>
              <div className="dashboard-card-header">
                <p className="eyebrow">Dashboard</p>
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
                <h4>What it includes:</h4>
                <ul>
                  {dashboard.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="gl-section"
        style={{
          textAlign: "center",
          background: "var(--teal-soft)",
          borderTop: "1px solid var(--gray-border)",
          borderBottom: "1px solid var(--gray-border)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
            color: "var(--teal-dark)",
            maxWidth: "760px",
            margin: "0 auto",
            lineHeight: 1.5,
          }}
        >
          &ldquo;By day: wrangling enterprise chaos into working systems.
          <br />
          By night: shipping my own AI products just to see what
          happens.&rdquo;
        </p>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Let's connect</p>
        <h2>Ruby Groves</h2>
        <p>
          <a href="mailto:groves.ruby@gmail.com">groves.ruby@gmail.com</a>
          {" "}&middot;{" "}
          <a
            href="https://www.linkedin.com/in/ruby-groves-76692214/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </main>
  );
}
