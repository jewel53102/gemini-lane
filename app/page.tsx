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
    text: "Turn repetitive work into automated systems that run in the background, so you can focus on growth instead of busywork.",
  },
  {
    title: "Workflow Optimization",
    text: "Free up 10–30 hours per week by eliminating bottlenecks and streamlining how your business runs.",
  },
  {
    title: "Project Dashboards",
    text: "See exactly what is happening in your business at a glance without digging through spreadsheets or scattered tools.",
  },
  {
    title: "Operations Consulting",
    text: "Replace chaos with simple systems that help your business grow without relying on you for every detail.",
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
        <div className="section-heading">
  <p className="eyebrow">Proof it works</p>
  <h2>Small operational fixes can create big time savings.</h2>
  <p>
    See how clearer workflows, better dashboards, and practical automation help
    business owners reduce busywork and regain control.
  </p>
</div>
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

        <div className="hero-actions center">
          <Link href="/case-studies" className="secondary-button dark">
            View Client Reviews
          </Link>

          <Link href="/dashboards" className="secondary-button dark">
            View Sample Dashboards
          </Link>
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
      </section>

      <section id="who-this-is-for" className="gl-section gl-dark">
        <div className="gl-split">
          <div>
            <p className="eyebrow">The outcome</p>
            <h2>Your business should not fall apart when you step away.</h2>
            <p className="section-subtle">
              Best suited for business owners who are growing, managing multiple
              workflows, and ready to invest in better systems.
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
              We review your current workflows, tools, tasks, and bottlenecks so
              we can identify where time, money, and follow-up are slipping
              through the cracks.
            </p>
          </div>

          <div>
            <span>02</span>
            <p className="process-timeframe">Week 1–3</p>
            <h3>Build</h3>
            <p>
              We create better processes, dashboards, automations, and operating
              systems that make your day-to-day work easier to manage.
            </p>
          </div>

          <div>
            <span>03</span>
            <p className="process-timeframe">Week 3–4</p>
            <h3>Optimize</h3>
            <p>
              We refine the system, test what is working, and make adjustments so
              your business runs with more consistency.
            </p>
          </div>
        </div>
      </section>

      <section id="before-after" className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">The transformation</p>
          <h2>Before Gemini Lane vs. After Gemini Lane</h2>
          <p>
            We help you move from scattered, manual operations to simple systems
            that save time and make growth easier to manage.
          </p>
        </div>

        <div className="before-after-grid">
          <div className="before-card">
            <p className="card-label">Before Gemini Lane</p>
            <ul>
              <li>Tasks are scattered across emails, texts, and spreadsheets.</li>
              <li>You are answering the same questions repeatedly.</li>
              <li>Follow-up depends on memory instead of a system.</li>
              <li>You spend too much time managing day-to-day details.</li>
            </ul>
          </div>

          <div className="after-card">
            <p className="card-label">After Gemini Lane</p>
            <ul>
              <li>Your workflows are organized and easier to manage.</li>
              <li>Your team handles routine questions without you.</li>
              <li>Leads, projects, and follow-ups have a clear process.</li>
              <li>You get more time back to focus on growth and strategy.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="free-analysis" className="gl-cta-band">
        <div className="cta-content">
          <p className="eyebrow">Free Business Analysis</p>

          <h2>Find out where your business is losing time.</h2>

          <p>
            Answer 5 quick questions and get an instant efficiency score, your
            biggest problem areas, and clear next steps to improve your workflows.
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

      <section id="faq" className="gl-section gl-light">
  <div className="section-heading">
    <p className="eyebrow">Common questions</p>
    <h2>Before you book a call, here’s what most business owners ask.</h2>
    <p>
      If you know your systems need help but you’re not sure what that means yet,
      this will help you understand how Gemini Lane works.
    </p>
  </div>

  <div className="faq-grid">
    <article className="faq-card">
      <h3>Do I need to already be using specific tools?</h3>
      <p>
        No. We can work with what you already have, whether that is spreadsheets,
        email, a CRM, project management software, or a mix of disconnected tools.
        If a new tool makes sense, we will recommend it based on your actual needs.
      </p>
    </article>

    <article className="faq-card">
      <h3>What if I’m not technical?</h3>
      <p>
        You do not need to be technical. The goal is to make your business easier
        to run, not more complicated. We explain recommendations clearly and build
        systems that are practical for you and your team to use.
      </p>
    </article>

    <article className="faq-card">
      <h3>How is this different from hiring a VA or ops manager?</h3>
      <p>
        A VA or ops manager usually helps execute tasks. Gemini Lane helps fix the
        workflow behind those tasks. We identify what is broken, simplify the
        process, and create systems that make execution easier for anyone involved.
      </p>
    </article>

    <article className="faq-card">
      <h3>What happens after the engagement ends?</h3>
      <p>
        You leave with clearer workflows, documented systems, and practical tools
        you can continue using. The goal is not to make you dependent on us — it is
        to give your business a stronger operating foundation.
      </p>
    </article>
  </div>
</section>

      <section className="final-cta">
        <p className="eyebrow">Ready to work smarter?</p>

        <h2>Let’s build the systems your business needs to grow.</h2>

        <p>
          In 15 minutes, we'll pinpoint your biggest bottleneck and tell you exactly what to fix first — no obligation."
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

      <section className="local-seo-footer">
        <p className="eyebrow">Frederick, MD Business Support</p>

        <h2>Workflow and AI automation consulting for Frederick-area businesses.</h2>

        <p>
          Gemini Lane helps small and growing businesses in Frederick, Maryland
          and surrounding areas simplify operations, reduce repetitive work, and
          implement practical AI systems that save time.
        </p>

        <div className="hero-actions center">
          <Link href="/frederick-md-ai-automation" className="secondary-button dark">
            View Frederick AI Services
          </Link>

          <Link href="/blog" className="secondary-button dark">
            Read Business Efficiency Tips
          </Link>
        </div>
      </section>
    </main>
  );
}