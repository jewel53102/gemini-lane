import Link from "next/link";

export const metadata = {
  title: "AI Automation & Workflow Consulting in Frederick, MD | Gemini Lane",
  description:
    "Helping Frederick, MD businesses reduce manual work, improve workflows, and implement AI systems to save time and grow.",
};

export default function FrederickAIAutomationPage() {
  return (
    <main className="local-page">

      {/* HERO */}
      <section className="local-hero">
        <p className="eyebrow">Frederick, Maryland</p>

        <h1>
          AI Automation & Workflow Systems for Small Businesses in Frederick, MD
        </h1>

        <p>
          Gemini Lane helps local businesses reduce repetitive work, organize
          operations, and implement practical AI systems that save time and
          improve consistency.
        </p>

        <div className="hero-actions">
          <Link href="/free-business-analysis" className="primary-button">
            Get Your Free Business Analysis
          </Link>

          <Link href="/book-call" className="secondary-button">
            Book a 15-Minute Call
          </Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="gl-section gl-light">
        <h2>
          Most Frederick business owners are losing 10–20 hours per week to
          inefficient workflows.
        </h2>

        <p>
          As your business grows, the way you manage tasks, follow up with leads,
          and organize projects becomes more complex. Without clear systems in
          place, work becomes repetitive, inconsistent, and harder to manage.
        </p>

        <ul className="local-list">
          <li>Manual follow-up with leads and clients</li>
          <li>Tasks tracked across multiple tools or not at all</li>
          <li>Too much time spent on admin work</li>
          <li>No clear workflows for recurring processes</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section className="gl-section">
        <h2>
          We help Frederick, MD businesses build systems that make work easier.
        </h2>

        <p>
          Gemini Lane focuses on improving how your business operates behind the
          scenes. Instead of adding more tools, we help you simplify workflows,
          reduce manual work, and implement automation where it actually saves
          time.
        </p>

        <div className="gl-card-grid">
          <div className="gl-card">
            <h3>AI Automation</h3>
            <p>
              Automate repetitive tasks, follow-ups, and internal processes so
              your team can focus on higher-value work.
            </p>
          </div>

          <div className="gl-card">
            <h3>Workflow Optimization</h3>
            <p>
              Clean up inefficient processes and create clear, repeatable
              systems for how work gets done.
            </p>
          </div>

          <div className="gl-card">
            <h3>Project Dashboards</h3>
            <p>
              Track tasks, clients, and projects in one place instead of across
              disconnected tools.
            </p>
          </div>

          <div className="gl-card">
            <h3>Operations Consulting</h3>
            <p>
              Build a stronger operational foundation so your business can grow
              without relying on constant manual oversight.
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL TRUST */}
      <section className="gl-section gl-dark">
        <h2>Serving businesses across Frederick and surrounding counties</h2>

        <p>
          Gemini Lane works with small to mid-sized businesses in Frederick,
          Montgomery, Howard, and Carroll counties. We focus on service-based
          businesses that want to improve efficiency, reduce workload, and build
          better systems for growth.
        </p>

        <div className="gl-check-list">
          <span>Frederick, MD</span>
          <span>Montgomery County</span>
          <span>Howard County</span>
          <span>Carroll County</span>
        </div>
      </section>

      {/* PROCESS */}
      <section className="gl-section">
        <h2>A simple approach to improving your business operations</h2>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Analyze</h3>
            <p>
              Identify where your time is being lost and where workflows are
              breaking down.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Build</h3>
            <p>
              Create systems, dashboards, and automation tailored to your
              business.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Optimize</h3>
            <p>
              Refine your workflows so they remain efficient as your business
              grows.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gl-cta-band">
        <div>
          <h2>Find out where your business is losing time.</h2>

          <p>
            Take the free business analysis and get an instant efficiency score,
            along with recommendations for what to improve first.
          </p>

          <ul className="local-list light">
            <li>Takes less than 5 minutes</li>
            <li>Instant results</li>
            <li>No login required</li>
          </ul>
        </div>

        <Link href="/free-business-analysis" className="primary-button light">
          Start the Free Analysis
        </Link>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>
          If your business feels harder to run than it should be, it’s time to
          fix the systems behind it.
        </h2>

        <p>
          Book a free 15-minute strategy call and we’ll walk through where your
          workflows can be simplified and what changes would make the biggest
          impact.
        </p>

        <div className="hero-actions center">
          <Link href="/book-call" className="primary-button">
            Book a Free Strategy Call
          </Link>

          <Link href="/free-business-analysis" className="secondary-button">
            Take the Free Analysis
          </Link>
        </div>
      </section>
    </main>
  );
}