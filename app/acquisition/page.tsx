import Link from "next/link";

export const metadata = {
  title: "Business Acquisition Support | Gemini Lane",
  description:
    "Gemini Lane helps small business owners prepare to sell for maximum value, and helps buyers assess and improve operations after acquisition. Serving Frederick, MD and surrounding areas.",
};

const sellerValueDrivers = [
  {
    title: "Eliminate owner dependency",
    description:
      "Buyers discount heavily when the business can't run without you. Documented workflows, delegated responsibilities, and repeatable systems remove that risk — and that discount.",
  },
  {
    title: "Improve margins through automation",
    description:
      "Automating manual admin work reduces labor overhead and increases net margins. Better margins mean a higher EBITDA — and a higher EBITDA means a larger sale price at any given multiple.",
  },
  {
    title: "Make due diligence easy",
    description:
      "Buyers pay more for businesses that are easy to evaluate. Clean dashboards, organized data, and documented processes signal a well-run operation — and reduce the back-and-forth that kills deals.",
  },
  {
    title: "Show consistent, repeatable results",
    description:
      "Buyers want to see that results aren't accidental. Systems that produce consistent outcomes — consistent lead follow-up, consistent client delivery, consistent operations — are far more valuable than chaos that happened to work.",
  },
];

const buyerServices = [
  {
    title: "Pre-acquisition operational audit",
    description:
      "Before you close, understand what you're actually buying. We assess how the business runs, identify owner dependencies, document manual processes, and surface operational risks that don't show up on a balance sheet.",
  },
  {
    title: "Automation opportunity mapping",
    description:
      "Every acquisition comes with inefficiencies. We map the highest-impact automation opportunities so you know exactly where to invest in the first 90 days to improve margins and reduce overhead.",
  },
  {
    title: "Post-acquisition systems build",
    description:
      "Once you close, the real work starts. We build the workflows, dashboards, and automations that stabilize operations, onboard your team, and position the business for growth under new ownership.",
  },
  {
    title: "Transition and integration design",
    description:
      "Ownership transitions create operational risk. We design handoff workflows, document institutional knowledge, and build the systems that prevent things from falling through the cracks during the change.",
  },
];

const exitTimeline = [
  {
    phase: "12–18 months out",
    title: "Assess and plan",
    description:
      "Start with a full operational audit. Identify owner dependencies, manual bottlenecks, and the highest-value improvements. Set a baseline so progress is measurable before you go to market.",
  },
  {
    phase: "6–12 months out",
    title: "Build the systems",
    description:
      "Implement workflow improvements, automation, and dashboards. Document every repeatable process. Shift owner time out of day-to-day operations and into oversight. Start improving margins.",
  },
  {
    phase: "3–6 months out",
    title: "Demonstrate and document",
    description:
      "Let the systems run long enough to show consistent results. Prepare clean operational documentation for due diligence. A buyer should be able to understand your business in days, not weeks.",
  },
];

export default function AcquisitionPage() {
  return (
    <main className="acquisition-page">

      {/* HERO */}
      <section className="local-hero">
        <p className="eyebrow">Business Acquisitions</p>

        <h1>Sell for more. Buy with confidence.</h1>

        <p>
          The difference between a good exit and a great one isn't revenue —
          it's systems. Gemini Lane helps business owners build the operational
          foundation that increases valuation before a sale, and helps buyers
          stabilize and grow what they acquire.
        </p>

        <div className="hero-actions center">
          <Link href="/book-call" className="primary-button">
            Book an Acquisition Consultation
          </Link>
          <Link href="/contact" className="secondary-button">
            Send a Message
          </Link>
        </div>
      </section>

      {/* THE VALUATION GAP */}
      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">The valuation gap</p>
          <h2>Most small businesses sell for far less than they're worth.</h2>
          <p>
            The gap between a 2× and a 5× exit is rarely about revenue. Buyers
            pay for predictability, reduced risk, and systems that don't depend
            on the owner. Most small businesses haven't built those things — and
            they pay for it at the closing table.
          </p>
        </div>

        <div className="acq-stat-grid">
          <div className="acq-stat">
            <span className="acq-stat-number">2–3×</span>
            <strong>Owner-dependent businesses</strong>
            <p>
              Manual workflows, no documentation, and operations that stop
              working when the owner steps away.
            </p>
          </div>

          <div className="acq-stat acq-stat-featured">
            <span className="acq-stat-number">4–6×</span>
            <strong>Systems-driven businesses</strong>
            <p>
              Documented processes, automated workflows, consistent margins, and
              operations that run without the owner in every decision.
            </p>
          </div>

          <div className="acq-stat">
            <span className="acq-stat-number">12–18 mo</span>
            <strong>Ideal preparation window</strong>
            <p>
              The time needed to implement, demonstrate, and document operational
              improvements before going to market.
            </p>
          </div>
        </div>
      </section>

      {/* FOR SELLERS */}
      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">For business sellers</p>
          <h2>What buyers actually pay more for.</h2>
          <p>
            Buyers aren't just acquiring revenue — they're acquiring risk. The
            lower your operational risk, the higher the multiple. These are the
            four things that move the needle most.
          </p>
        </div>

        <div className="gl-card-grid">
          {sellerValueDrivers.map((item) => (
            <div className="gl-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT GEMINI LANE BUILDS */}
      <section className="gl-section gl-dark">
        <div className="gl-split">
          <div>
            <p className="eyebrow">What Gemini Lane builds</p>
            <h2>The specific improvements that change your multiple.</h2>
            <p>
              Most exit prep advice is vague. We do the actual work — building
              the workflows, automations, and documentation that demonstrate
              operational maturity to buyers. Every improvement is designed to
              reduce perceived risk and increase what someone will pay for your
              business.
            </p>
            <div className="hero-actions" style={{ marginTop: "36px" }}>
              <Link href="/book-call" className="primary-button">
                Start the Conversation
              </Link>
            </div>
          </div>

          <div className="gl-check-list">
            <span>Documented SOPs and workflow maps</span>
            <span>Automated lead follow-up and client onboarding</span>
            <span>Project and operations dashboards</span>
            <span>Reduced admin hours and overhead costs</span>
            <span>Owner-independent task and team management</span>
            <span>Clean reporting and data for due diligence</span>
            <span>AI tools integrated into daily operations</span>
            <span>Repeatable processes that produce consistent results</span>
          </div>
        </div>
      </section>

      {/* EXIT TIMELINE */}
      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">The exit preparation timeline</p>
          <h2>The best time to start was two years ago. The second best time is now.</h2>
          <p>
            Operational improvements need time to demonstrate results.
            Buyers want to see consistent performance — not a business that
            cleaned itself up the month before listing. Here is how the
            preparation window typically works.
          </p>
        </div>

        <div className="process-grid">
          {exitTimeline.map((phase) => (
            <div key={phase.phase}>
              <span>{phase.phase}</span>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOR BUYERS */}
      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">For business buyers</p>
          <h2>Know what you're buying before you close.</h2>
          <p>
            Most acquisition risk is operational, not financial. Bad workflows,
            undocumented processes, and owner dependency don't show up on a P&amp;L
            — but they show up in the first 90 days of ownership. Gemini Lane
            helps buyers understand and fix what they're acquiring.
          </p>
        </div>

        <div className="gl-card-grid">
          {buyerServices.map((item) => (
            <div className="gl-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY OPERATIONS MATTER MORE THAN MOST BUYERS REALIZE */}
      <section className="gl-section gl-dark">
        <div className="section-heading">
          <p className="eyebrow">The operational blind spot</p>
          <h2>Most buyers focus on the numbers. The risk is in the processes.</h2>
          <p>
            A business showing $500K in annual profit can have wildly different
            post-acquisition experiences depending on how it operates. If revenue
            depends on the seller's relationships, if key processes live only in
            someone's head, or if the team has no documented workflows — none of
            that appears on a financial statement. Buyers who skip operational
            due diligence often spend the first year rebuilding systems they
            didn't know were missing.
          </p>
        </div>

        <div className="acq-risk-grid">
          <div className="acq-risk-card">
            <h3>Owner dependency</h3>
            <p>
              If the seller is the primary relationship with every major client,
              the vendor, and the team — revenue walks out the door at closing.
            </p>
          </div>

          <div className="acq-risk-card">
            <h3>Undocumented processes</h3>
            <p>
              When critical workflows exist only in people's heads, transitions
              break them. Expect 3–6 months of operational disruption without
              prior documentation.
            </p>
          </div>

          <div className="acq-risk-card">
            <h3>Manual overhead</h3>
            <p>
              Businesses running on manual admin, spreadsheets, and reactive
              follow-up have hidden labor costs and fragile margins that compress
              quickly under new management.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="gl-cta-band">
        <div>
          <p className="eyebrow">Ready to talk through your situation?</p>
          <h2>Whether you're buying, selling, or planning ahead — let's talk.</h2>
          <p>
            A 15-minute call is enough to understand where you are, what the
            opportunity looks like, and what the right next step is.
          </p>
        </div>

        <Link href="/book-call" className="primary-button light">
          Book an Acquisition Consultation
        </Link>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <p className="eyebrow">Build the system behind the business</p>
        <h2>The businesses that sell for the most aren't lucky — they're prepared.</h2>
        <p>
          Start with a free business analysis. You'll get an efficiency score
          and a clear picture of the operational gaps that most affect your
          valuation.
        </p>
        <div className="hero-actions center">
          <Link href="/free-business-analysis" className="primary-button">
            Get Your Free Business Analysis
          </Link>
          <Link href="/contact" className="secondary-button">
            Send a Message
          </Link>
        </div>
      </section>

    </main>
  );
}
