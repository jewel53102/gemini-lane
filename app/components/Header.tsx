import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo image-logo">
        <Image
          src="/Gemini-Lane-Logo.png"
          alt="Gemini Lane Consulting & Acquisitions"
          width={240}
          height={70}
          priority
        />
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-dropdown">
          <Link href="/services">Services</Link>
          <div className="nav-dropdown-menu">
            <Link href="/free-business-analysis">Free Business Analysis</Link>
            <Link href="/new-website">New Website Build</Link>
            <Link href="/full-business-audit">Full Website Audit</Link>
          </div>
        </div>
        <Link href="/dashboards">Business Dashboards</Link>
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