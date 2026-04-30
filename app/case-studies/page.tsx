import Link from "next/link";

export const metadata = {
  title: "Business Results & Case Studies | Gemini Lane",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="local-hero">
        <p className="eyebrow">Results</p>
        <h1>What improving systems actually looks like.</h1>
      </section>

      <section className="gl-section">
        <div className="gl-card-grid">
          <div className="gl-card">
            <h3>Reduced admin work</h3>
            <p>Saved 15–20 hours per week by automating follow-up and tasks.</p>
          </div>

          <div className="gl-card">
            <h3>Improved lead response</h3>
            <p>Reduced response time from hours to minutes.</p>
          </div>

          <div className="gl-card">
            <h3>Centralized operations</h3>
            <p>Moved all workflows into one dashboard.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <h2>Let’s create results like this for your business.</h2>

        <div className="hero-actions center">
          <Link href="/book-call" className="primary-button">
            Book a Call
          </Link>
        </div>
      </section>
    </main>
  );
}