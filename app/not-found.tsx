import Link from "next/link";

const destinations = [
  {
    label: "Services",
    href: "/services",
    description: "See what Gemini Lane builds",
  },
  {
    label: "Free Business Analysis",
    href: "/free-business-analysis",
    description: "Get your efficiency score",
  },
  {
    label: "Sample Dashboards",
    href: "/dashboards",
    description: "See what better systems look like",
  },
  {
    label: "Book a Call",
    href: "/book-call",
    description: "Talk through your situation directly",
  },
];

export default function NotFound() {
  return (
    <main className="not-found-page">

      <section className="not-found-hero">
        <span className="not-found-code">404</span>

        <p className="eyebrow">Page not found</p>

        <h1>This page got lost in the workflow.</h1>

        <p>
          We help businesses eliminate missing steps and broken processes —
          apparently this one slipped through. Let's get you somewhere useful.
        </p>

        <div className="hero-actions center">
          <Link href="/" className="primary-button">
            Back to Home
          </Link>
          <Link href="/contact" className="secondary-button">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">You might be looking for</p>
          <h2>Common destinations</h2>
        </div>

        <div className="not-found-links">
          {destinations.map((dest) => (
            <Link key={dest.href} href={dest.href} className="not-found-link-card">
              <strong>{dest.label}</strong>
              <span>{dest.description}</span>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
