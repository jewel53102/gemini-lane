import Link from "next/link";

const problems = [
  "You are still manually following up with leads.",
  "Your admin work takes over your week.",
  "Your team does not have clear repeatable workflows.",
  "Important tasks are buried in email, texts, or spreadsheets.",
  "You know AI could help, but you do not know where to start.",
];

const deliverables = [
  "Workflow audit",
  "AI automation opportunity map",
  "Lead follow-up system recommendations",
  "Project/task dashboard recommendations",
  "Clear 2–4 week action plan",
];

export const metadata = {
  title: "AI Automation & Workflow Consulting in Frederick, MD | Gemini Lane",
  description:
    "Helping Frederick, MD businesses reduce manual work, improve workflows, and implement AI systems to save time and grow.",
};

export default function FrederickAILandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-hero">
        <div className="landing-hero-content">
          <p className="eyebrow">For Frederick, MD Business Owners</p>

          <h1>
            Reclaim 10–30 hours per week with better workflows, AI tools, and
            backend systems.
          </h1>

          <p>
            Gemini Lane helps small to medium-sized businesses reduce repetitive
            work, automate follow-up, organize operations, and create systems
            that make the business easier to run.
          </p>

          <div className="hero-actions">
            <Link href="/free-business-analysis" className="primary-button">
              Get My Free Business Analysis
            </Link>

            <Link href="/contact" className="secondary-button">
              Book a 15-Minute Strategy Call
            </Link>
          </div>
        </div>

        <div className="landing-offer-card">
          <p className="card-label">Free Analysis Includes</p>

          <ul>
            <li>Efficiency score</li>
            <li>Top workflow bottlenecks</li>
            <li>AI automation opportunities</li>
            <li>Recommended next steps</li>
          </ul>
        </div>
      </section>

      <section className="landing-section landing-white">
        <div className="section-heading">
          <p className="eyebrow">Does this sound familiar?</p>
          <h2>Your business is growing, but your systems are not keeping up.</h2>
        </div>

        <div className="landing-problem-grid">
          {problems.map((problem) => (
            <div key={problem}>{problem}</div>
          ))}
        </div>
      </section>

      <section className="landing-section landing-dark">
        <div className="landing-split">
          <div>
            <p className="eyebrow">The Gemini Lane Method</p>
            <h2>We find the repeated work, then build systems to reduce it.</h2>
          </div>

          <p>
            Most businesses do not need more software. They need a clearer way
            to use the tools they already have, plus smart automation where it
            creates real time savings. We help you identify what to fix first so
            you are not wasting money on random tools or complicated systems.
          </p>
        </div>
      </section>

      <section className="landing-section landing-light">
        <div className="section-heading">
          <p className="eyebrow">What you get</p>
          <h2>Your free analysis gives you a practical starting point.</h2>
        </div>

        <div className="landing-deliverables">
          {deliverables.map((item) => (
            <div key={item}>
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section landing-white">
        <div className="landing-split">
          <div>
            <p className="eyebrow">Who this is for</p>
            <h2>Built for service-based businesses in Frederick and nearby counties.</h2>
          </div>

          <div className="landing-copy">
            <p>
              This is ideal for owners who are still involved in too many daily
              tasks, know their team needs better systems, or want to use AI but
              need a practical plan before investing in tools.
            </p>

            <p>
              Gemini Lane serves businesses in Frederick, Montgomery, Howard,
              and Carroll counties.
            </p>
          </div>
        </div>
      </section>

      <section className="landing-cta">
        <p className="eyebrow">Limited implementation availability</p>

        <h2>Want one of the next 10 implementation spots?</h2>

        <p>
          Start with the free business analysis. If there is a strong fit, we’ll
          map the fastest path to reduce manual work and improve your operations
          over the next 2–4 weeks.
        </p>

        <div className="hero-actions center">
          <Link href="/free-business-analysis" className="primary-button">
            Start the Free Analysis
          </Link>

          <Link href="/contact" className="secondary-button">
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}