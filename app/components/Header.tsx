import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <Link href="/" className="site-logo">
          <span className="logo-mark">GL</span>

          <div>
            <strong>Gemini Lane</strong>
            <small>AI Automation & Workflow Systems</small>
          </div>
        </Link>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
  <Link href="/services">Services</Link>
<Link href="/dashboards">Dashboards</Link>
<Link href="/blog">Resources</Link>
<Link href="/about">About</Link>
</nav>

      <div className="header-right">
        <Link href="/free-business-analysis" className="header-cta">
          Get My Free Analysis
        </Link>
      </div>
    </header>
  );
}