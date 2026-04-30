import Link from "next/link";

export const metadata = {
  title: "About Gemini Lane",
  description:
    "Learn how Gemini Lane helps businesses improve workflows and efficiency.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="local-hero">
        <p className="eyebrow">About</p>
        <h1>Built around making businesses easier to run.</h1>

        <p>
          Gemini Lane was created to help business owners move away from chaos
          and toward structured, efficient systems.
        </p>
      </section>

      <section className="gl-section">
        <div className="gl-split">
          <div>
            <h2>Why this exists</h2>
            <p>
              Many business owners are stuck doing everything manually. Systems
              are scattered, workflows are unclear, and growth becomes harder.
            </p>
          </div>

          <div>
            <h2>Our approach</h2>
            <p>
              We focus on simplifying operations, building clear workflows, and
              implementing automation where it actually makes a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="gl-section gl-light">
        <h2>Who this is for</h2>

        <ul className="local-list">
          <li>Service-based businesses</li>
          <li>$100K–$5M revenue</li>
          <li>Owners managing daily operations</li>
        </ul>
      </section>

      <section className="final-cta">
        <h2>Let’s simplify your business.</h2>

        <div className="hero-actions center">
          <Link href="/book-call" className="primary-button">
            Book a Call
          </Link>
        </div>
      </section>
    </main>
  );
}