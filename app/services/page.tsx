import Link from "next/link";

export const metadata = {
  title: "Services | Gemini Lane",
  description:
    "AI automation, workflow optimization, custom dashboards, and operations consulting for Frederick-area businesses — engagements from $1,500–$5,000.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="local-hero">
        <p className="eyebrow">Services</p>

        <h1>Fix how your business runs — without adding more work.</h1>

        <p>
          Gemini Lane helps small to mid-sized businesses clean up workflows,
          reduce manual tasks, implement automation, and build systems that
          support growth.
        </p>

        <p className="hero-positioning">
          Built for service-based businesses doing $100K–$5M/year • Engagements
          typically range from $1,500–$5,000
        </p>

        <div className="hero-actions center">
          <Link href="/free-business-analysis" className="primary-button">
            Start Free Analysis
          </Link>

          <Link href="/book-call" className="secondary-button">
            Book a Call
          </Link>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">What we actually do</p>
          <h2>Practical systems, not theory.</h2>
        </div>

        <div className="gl-card-grid">
          <div className="gl-card">
            <h3>Workflow Optimization</h3>
            <p>
              Clean up messy processes, remove duplicate work, and create
              repeatable systems your business can rely on.
            </p>
          </div>

          <div className="gl-card">
            <h3>AI & Automation</h3>
            <p>
              Identify where automation actually saves time and implement it in
              a way that fits your current operations.
            </p>
          </div>

          <div className="gl-card">
            <h3>Custom Dashboards</h3>
            <p>
              Build simple dashboards to track clients, projects, tasks, and
              priorities in one place.
            </p>
          </div>

          <div className="gl-card">
            <h3>Operations Consulting</h3>
            <p>
              Structure your business so it runs smoother without everything
              depending on you.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES (SOFT PRICING) */}
      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">How engagements are structured</p>
          <h2>Simple, focused improvements — not long-term contracts.</h2>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Quick Fix</h3>
            <p className="price">$1,500–$2,500</p>

            <ul>
              <li>1–2 key workflow improvements</li>
              <li>Quick automation opportunities</li>
              <li>Simple dashboard setup</li>
            </ul>

            <p className="pricing-note">
              Best for businesses that need fast clarity and immediate wins.
            </p>
          </div>

          <div className="pricing-card featured">
            <h3>Core Systems Build</h3>
            <p className="price">$2,500–$4,000</p>

            <ul>
              <li>Full workflow cleanup</li>
              <li>Lead or operations system</li>
              <li>Custom dashboard build</li>
            </ul>

            <p className="pricing-note">
              Most common — ideal for businesses ready to streamline operations.
            </p>
          </div>

          <div className="pricing-card">
            <h3>Full Optimization</h3>
            <p className="price">$4,000–$5,000+</p>

            <ul>
              <li>End-to-end system design</li>
              <li>Automation + AI integration</li>
              <li>Multiple workflows optimized</li>
            </ul>

            <p className="pricing-note">
              Best for businesses scaling quickly or managing complex operations.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THIS LOOKS LIKE */}
      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">What changes after this</p>
          <h2>Your business becomes easier to manage.</h2>
        </div>

        <ul className="local-list">
          <li>Less time spent on repetitive admin work</li>
          <li>Faster response times to leads and clients</li>
          <li>Clear workflows instead of guessing what to do next</li>
          <li>One place to track projects, tasks, and priorities</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="gl-cta-band">
        <div>
          <p className="eyebrow">Start here</p>
          <h2>Not sure what you need yet?</h2>

          <p>
            Take the free analysis first. It will show you where your business is
            losing time and what to fix first.
          </p>
        </div>

        <Link href="/free-business-analysis" className="primary-button light">
          Start Free Analysis
        </Link>
      </section>

      <section className="final-cta">
        <h2>Or skip ahead and talk it through.</h2>

        <p>
          We can use a short call to identify your biggest bottleneck and what
          would actually improve your business.
        </p>

        <div className="hero-actions center">
          <Link href="/book-call" className="primary-button">
            Book a 15-Minute Call
          </Link>
        </div>
      </section>
    </main>
  );
}