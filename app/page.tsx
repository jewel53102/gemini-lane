import Link from "next/link";

const painPoints = [
  "You are answering the same questions over and over.",
  "Leads are coming in, but follow-up is inconsistent.",
  "Your team relies on memory instead of repeatable systems.",
  "Tasks live across texts, emails, spreadsheets, and notebooks.",
];

const outcomes = [
  "Reduce repetitive admin work",
  "Automate lead follow-up",
  "Organize projects and workflows",
  "Build systems your team can actually use",
];

const services = [
  {
    title: "AI Automation",
    text: "Turn repetitive work into automated systems that run in the background—so you can focus on growth instead of busywork.",
  },
  {
    title: "Workflow Optimization",
    text: "We redesign your workflows so your day-to-day operations feel clear, structured, and easy to manage.",
  },
  {
    title: "Project Dashboards",
    text: "See exactly what’s happening in your business at a glance—without digging through spreadsheets or scattered tools.",
  },
  {
    title: "Operations Consulting",
    text: "Replace chaos with a system that actually supports growth—so your business can scale without relying on you for everything.",
  },
];

const proofStats = [
  { stat: "18 hrs", label: "avg. weekly time savings identified" },
  { stat: "2–4 wks", label: "typical workflow improvement timeline" },
  { stat: "3–5", label: "core systems usually cleaned up first" },
];

const testimonials = [
  {
    quote:
      "Gemini Lane helped us see exactly where our process was breaking down and gave us a clear plan to simplify the work.",
    name: "Operations Client",
    type: "Local service business",
  },
  {
    quote:
      "The dashboard examples made it much easier to understand how our projects and follow-ups could finally live in one place.",
    name: "Project Dashboard Client",
    type: "Professional services",
  },
  {
    quote:
      "Ruby made automation feel practical, not overwhelming. We walked away knowing what to fix first.",
    name: "Workflow Strategy Client",
    type: "Small business owner",
  },
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="gl-hero">
        <div className="gl-hero-content">
          <p className="eyebrow">Frederick, MD AI & Operations Consulting</p>

          <h1>Get 10–30 hours back every week by fixing how your business runs.</h1>

          <p className="hero-text">
            Gemini Lane helps small to medium-sized businesses simplify workflows,
            reduce repetitive tasks, implement AI tools, and build systems that
            make growth easier to manage.
          </p>

          <p className="hero-positioning">
  Built for service-based businesses doing $100K–$5M/year •
  Engagements typically range from $1,500–$5,000
</p>

          <div className="hero-actions">
  <Link href="/free-business-analysis" className="primary-button">
    Get Your Free Business Analysis
  </Link>

  <p className="cta-micro">
    Takes 1 minute • No signup required • Instant results
  </p>
</div>

          <div className="gl-proof-strip">
            <span>AI Automation</span>
            <span>Workflow Systems</span>
            <span>Project Dashboards</span>
          </div>
        </div>

        <div className="gl-hero-panel qualified-callout">
  <p className="card-label">This is for you if...</p>

  <h2>You’re doing too much manually.</h2>

  <ul className="qualified-checklist">
    {painPoints.map((point) => (
      <li key={point}>
        <span aria-hidden="true">✓</span>
        {point}
      </li>
    ))}
  </ul>

  <Link href="/free-business-analysis" className="primary-button callout-button">
    See Where You’re Losing Time
  </Link>
</div>
      </section>

      <section className="social-proof-section">
        <div className="proof-stats">
          {proofStats.map((item) => (
            <div key={item.label}>
              <strong>{item.stat}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="testimonial-strip">
          {testimonials.map((testimonial) => (
            <article key={testimonial.quote}>
              <p>“{testimonial.quote}”</p>
              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.type}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gl-section gl-intro">
        <p className="eyebrow">The real problem</p>

        <h2>Most business owners do not need more hours. They need better systems.</h2>

        <p>
          When your business grows, the old way of managing everything through
          memory, inboxes, spreadsheets, and last-minute follow-ups starts to
          break. Gemini Lane helps you clean up the backend of your business so
          work gets done with less friction and fewer missed opportunities.
        </p>

      </section>

      <section id="what-we-improve" className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">What we improve</p>
          <h2>Cleaner workflows. Less redundancy. Smarter operations.</h2>
        </div>

        <div className="gl-card-grid">
          {services.map((service) => (
            <article className="gl-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className="hero-actions center">
  <Link href="/case-studies" className="primary-button">
    View Client Reviews
  </Link>

  <Link href="/dashboards" className="primary-button">
    View Sample Dashboards
  </Link>
</div>
      </section>

      <section id="who-this-is-for" className="gl-section gl-dark">
        <div className="gl-split">
          <div>
            <p className="eyebrow">The outcome</p>
            <h2>Your business should not fall apart when you step away.</h2>
            <p className="section-subtle">
  Best suited for business owners who are growing, managing multiple workflows,
  and ready to invest in better systems.
</p>
          </div>

          <div className="gl-check-list">
            {outcomes.map((outcome) => (
              <span key={outcome}>{outcome}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>A simple path from chaos to clarity.</h2>
        </div>

        <div className="process-grid">
  <div>
    <span>01</span>
    <p className="process-timeframe">Day 1–3</p>
    <h3>Analyze</h3>
    <p>
      We review your current workflows, tools, tasks, and bottlenecks so we can
      identify where time, money, and follow-up are slipping through the cracks.
    </p>
  </div>

  <div>
    <span>02</span>
    <p className="process-timeframe">Week 1–3</p>
    <h3>Build</h3>
    <p>
      We create better processes, dashboards, automations, and operating systems
      that make your day-to-day work easier to manage.
    </p>
  </div>

  <div>
    <span>03</span>
    <p className="process-timeframe">Week 3–4</p>
    <h3>Optimize</h3>
    <p>
      We refine the system, test what is working, and make adjustments so your
      business runs with more consistency.
    </p>
  </div>
</div>
      </section>

      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">Frederick, MD Business Support</p>
          <h2>Local workflow and AI automation consulting for growing businesses.</h2>
          <p>
            Gemini Lane helps Frederick-area businesses reduce repetitive tasks,
            simplify operations, and implement practical AI systems that save
            time.
          </p>
        </div>

        <div className="hero-actions">
          <Link href="/frederick-md-ai-automation" className="primary-button">
            View Frederick AI Services
          </Link>

          <Link href="/blog" className="secondary-button dark">
            Read Business Efficiency Tips
          </Link>
        </div>
      </section>

      <section id="free-analysis" className="gl-cta-band">
  <div className="cta-content">
    <p className="eyebrow">Free Business Analysis</p>

    <h2>Find out where your business is losing time.</h2>

    <p>
      Answer 5 quick questions and get an instant efficiency score, your biggest
      problem areas, and clear next steps to improve your workflows.
    </p>

    <Link href="/free-business-analysis" className="primary-button light">
      Start the Free Analysis
    </Link>
  </div>

  <div className="analysis-explainer">
    <div>
      <strong>What you’ll get:</strong>
      <ul>
        <li>Efficiency score for your business</li>
        <li>Top 2–3 workflow problems</li>
        <li>Quick wins you can implement immediately</li>
      </ul>
    </div>

    <div>
      <strong>How it works:</strong>
      <ul>
        <li>5 simple questions</li>
        <li>Takes about 1 minute</li>
        <li>Instant results — no waiting</li>
      </ul>
    </div>
  </div>
</section>

      <section className="final-cta">
        <p className="eyebrow">Ready to work smarter?</p>

        <h2>Let’s build the systems your business needs to grow.</h2>

        <p>
          In 15 minutes, we'll pinpoint your biggest bottleneck and tell you exactly what to fix first.
        </p>

        <p id="cta-positioning">
  *Most clients invest between $1,500–$5,000 to clean up workflows,
  implement automation, and build better systems.
</p>

        <div className="hero-actions center">
          <Link href="/book-call" className="primary-button">
            Book a Free Consult
          </Link>

          <Link href="/free-business-analysis" className="secondary-button">
            Take the Free Analysis
          </Link>
        </div>
      </section>
    </main>
  );
}