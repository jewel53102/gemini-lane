import Link from "next/link";

export const metadata = {
  title: "Book a Strategy Call | Gemini Lane",
  description:
    "Book a 15-minute strategy call to identify workflow, automation, and operations improvements for your business.",
};

export default function BookCallPage() {
  return (
    <main className="booking-page">
      <section className="booking-hero">
        <p className="eyebrow">Free 15-Minute Strategy Call</p>

        <h1>Let’s see if better systems could save your business time.</h1>

        <p>
          This call is for business owners who are ready to improve workflows,
          reduce repetitive work, and explore practical automation or dashboard
          solutions.
        </p>

        <p className="hero-positioning">
          Best fit for service-based businesses doing $100K–$5M/year • Typical
          engagements range from $1,500–$5,000
        </p>
      </section>

      <section className="booking-section">
        <div className="booking-grid">
          <div className="booking-card">
            <h2>This call is a good fit if you...</h2>

            <ul>
              <li>Are losing time to repetitive admin work</li>
              <li>Need better workflows or project visibility</li>
              <li>Want to automate follow-up or backend tasks</li>
              <li>Are ready to invest in better systems</li>
            </ul>
          </div>

          <div className="booking-card">
            <h2>This may not be the right fit if you...</h2>

            <ul>
              <li>Only need general business advice</li>
              <li>Are looking for a free full consulting session</li>
              <li>Are not ready to make operational changes</li>
              <li>Need emergency same-day technical support</li>
            </ul>
          </div>
        </div>

        <div className="booking-card booking-expectations">
          <h2>What we’ll cover in 15 minutes</h2>

          <div className="booking-steps">
            <div>
              <span>01</span>
              <h3>Your bottleneck</h3>
              <p>Where work feels manual, scattered, or harder than it should be.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Your best first fix</h3>
              <p>What workflow, dashboard, or automation would create the fastest improvement.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Your next step</h3>
              <p>Whether a Quick Fix, Core Systems Build, or Full Optimization makes sense.</p>
            </div>
          </div>
        </div>

        <div className="booking-cta">
          <p className="eyebrow">Book your call</p>

          <h2>Choose a time below.</h2>

          <p className="booking-subtext">
            You’ll leave with a clear recommendation, even if we decide it is
            not the right time to work together.
          </p>

          <div className="calendly-wrapper">
            <iframe
              src="https://calendly.com/groves-ruby/geminilanebizanalysis"
              width="100%"
              height="700"
              frameBorder="0"
              loading="lazy"
              title="Book a 15-minute strategy call with Gemini Lane"
            />
            <p className="calendly-fallback">
              If the calendar isn't loading,{" "}
              <a href="mailto:info@gemini-lane.com">email info@gemini-lane.com</a>{" "}
              or{" "}
              <Link href="/contact">use the contact form</Link>{" "}
              to request a time.
            </p>
          </div>

          <p className="cta-micro">
            Prefer to start with the assessment?{" "}
            <Link href="/free-business-analysis">Take the free analysis first.</Link>
          </p>
        </div>
      </section>
    </main>
  );
}