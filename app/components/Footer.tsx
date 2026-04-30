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
          <h3>Ready to simplify your business?</h3>

          <p>
            Start with a free analysis to see where your business may be losing
            time through manual work, unclear workflows, or disconnected systems.
          </p>

          <Link href="/free-business-analysis" className="footer-button">
            Get My Free Analysis
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