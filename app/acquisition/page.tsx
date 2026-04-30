import Link from "next/link";

export default function AcquisitionPage() {
  return (
    <main className="gl-section">
      <p className="eyebrow">Business Acquisition Support</p>

      <h1>Business buying and selling support for small business owners.</h1>

      <p>
        Gemini Lane helps business owners prepare for transition, improve
        operations, and connect with the right opportunities when buying or
        selling a business.
      </p>

      <div className="hero-actions">
        <Link href="/free-business-analysis" className="primary-button">
          Get Your Free Business Analysis
        </Link>

        <Link href="/book-call" className="secondary-button dark">
          Book a 15-Minute Call
        </Link>
      </div>
    </main>
  );
}