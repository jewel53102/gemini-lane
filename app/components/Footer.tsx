import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-logo">
            Gemini Lane
          </Link>

          <p>
            AI automation, workflow optimization, custom dashboards, and
            operations consulting for small to mid-sized businesses in Frederick,
            MD and surrounding areas.
          </p>
        </div>

        <div>
          <h3>Services</h3>
          <Link href="/services">Services</Link>
          <Link href="/frederick-md-ai-automation">Frederick AI Automation</Link>
          <Link href="/dashboards">Sample Dashboards</Link>
          <Link href="/free-business-analysis">Free Business Analysis</Link>
        </div>

        <div>
          <h3>Company</h3>
          <Link href="/about">About</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Resources</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
  <h3>Prefer to reach out directly?</h3>

  <p>
    Have a question before taking the analysis? Contact Gemini Lane directly and
    we’ll point you toward the right next step.
  </p>

  <p>
    <strong>Email:</strong>{" "}
    <a href="mailto:info@gemini-lane.com">info@gemini-lane.com</a>
  </p>

  <Link href="/contact" className="footer-button">
    Contact Gemini Lane
  </Link>
</div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gemini Lane. All rights reserved.</p> 
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <p>Serving Frederick, Montgomery, Howard, and Carroll counties.</p>
      </div>
    </footer>
  );
}