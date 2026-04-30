import Link from "next/link";

export const metadata = {
  title: "Business Automation & Workflow Services | Gemini Lane",
  description:
    "Improve workflows, reduce manual work, and implement AI systems for your business.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="local-hero">
        <p className="eyebrow">Services</p>
        <h1>Systems that make your business easier to run.</h1>

        <p>
          Gemini Lane helps small to mid-sized businesses reduce manual work,
          improve workflows, and implement practical automation systems.
        </p>

        <div className="hero-actions center">
          <Link href="/free-business-analysis" className="primary-button">
            Get Free Analysis
          </Link>
          <Link href="/book-call" className="secondary-button">
            Book a Call
          </Link>
        </div>
      </section>

      <section className="gl-section">
        <div className="gl-card-grid">
          <div className="gl-card">
            <h3>Workflow Optimization</h3>
            <p>Organize your operations into clear, repeatable systems.</p>
          </div>

          <div className="gl-card">
            <h3>AI Automation</h3>
            <p>Automate repetitive tasks and improve response time.</p>
          </div>

          <div className="gl-card">
            <h3>Custom Dashboards</h3>
            <p>Track clients, projects, and tasks in one place.</p>
          </div>

          <div className="gl-card">
            <h3>Operations Consulting</h3>
            <p>Build a stronger foundation for growth and efficiency.</p>
          </div>
        </div>
      </section>

      <section className="gl-section gl-light">
        <h2>What you can expect</h2>

        <ul className="local-list">
          <li>Clear workflows and systems</li>
          <li>Reduced manual admin work</li>
          <li>Faster follow-up and response times</li>
          <li>Better visibility into your business</li>
        </ul>
      </section>

      <section className="gl-cta-band">
        <div>
          <h2>Find out what your business actually needs.</h2>
          <p>Start with the free analysis to identify your biggest inefficiencies.</p>
        </div>

        <Link href="/free-business-analysis" className="primary-button light">
          Start Free Analysis
        </Link>
      </section>
    </main>
  );
}