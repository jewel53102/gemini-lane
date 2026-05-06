import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Gemini Lane | Ruby Groves",
  description:
    "Meet Ruby Groves, founder of Gemini Lane. A decade of technical project management experience turned into practical AI automation and operations consulting for small businesses in Frederick, MD.",
};

const credentials = [
  {
    stat: "~30%",
    label: "Reduction in turnaround time through automation and process optimization",
  },
  {
    stat: "~$150K/mo",
    label: "Revenue impact supported through smarter systems and testing",
  },
  {
    stat: "10+ years",
    label: "Leading large-scale digital initiatives, migrations, and operational improvements",
  },
  {
    stat: "Enterprise-scale",
    label: "System migrations and workflow improvements across high-traffic platforms at SiriusXM",
  },
];

const whatIDo = [
  "Identify where time, money, and energy are being wasted",
  "Redesign workflows to be faster, cleaner, and scalable",
  "Implement automation — AI, integrations, and systems — that actually stick",
  "Simplify operations so your business can run without constant oversight",
];

const whoThisIsFor = [
  "Doing $500K–$5M+ in revenue",
  "Feel stuck in daily operations",
  "Know their systems are inefficient — even if they can't fully articulate how",
  "Want to scale without hiring a full operations team",
];

const methodology = [
  {
    step: "01",
    title: "Clarity",
    description:
      "Understand exactly where time and money are being lost before touching anything. No guessing, no generic advice.",
  },
  {
    step: "02",
    title: "Efficiency",
    description:
      "Redesign the workflows that are slowing you down. Clean, repeatable, and built around how your business actually runs.",
  },
  {
    step: "03",
    title: "Automation",
    description:
      "Layer in AI and integrations where they make a real difference — not because they're trendy, but because they free up your time.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "With the right systems in place, growth stops depending on you doing more and starts depending on your business running better.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div>
          <p className="eyebrow">About Gemini Lane</p>
          <h1>The systems expert behind smarter, more scalable businesses</h1>

          <p>
            I’m Ruby Groves, founder of Gemini Lane. I work with growing businesses 
            to streamline operations, eliminate inefficiencies, and implement AI-driven 
            workflows that save time and unlock growth.
          </p>

          <p>
            This didn’t start as a consulting business. It started with a desire to help 
            businesses run more efficiently and free owners from the day-to-day chaos.
          </p>

          <div className="hero-actions">
            <Link href="/free-business-analysis" className="primary-button">
              Get Your Free Analysis
            </Link>
            <Link href="/book-call" className="secondary-button">
              Book a Call
            </Link>
          </div>
        </div>

        <Image
          src="/ruby-gemini-lane.jpeg"
          alt="Ruby Groves, founder of Gemini Lane"
          width={480}
          height={600}
          className="about-photo"
          priority
        />
      </section>

      {/* BACKGROUND */}
      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">Where this comes from</p>
          <h2>Over a decade of making complex systems work.</h2>
          <p>
            Before Gemini Lane, I spent more than ten years as a Technical
            Project Manager, leading large-scale
            digital initiatives, system migrations, and process improvements
            across high-traffic platforms. Across all of it, one thing kept
            showing up: most problems weren't technical. They were operational.
          </p>
        </div>

        <div className="about-credentials">
          {credentials.map((item) => (
            <div className="about-credential" key={item.stat}>
              <strong style={{ display: "block", fontSize: "1.6rem", fontFamily: "var(--font-heading)", color: "var(--teal)", marginBottom: "8px", letterSpacing: "-0.03em" }}>
                {item.stat}
              </strong>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE DISCOVERY */}
      <section className="gl-section gl-dark">
        <div className="gl-split">
          <div>
            <p className="eyebrow">The pattern</p>
            <h2>Most problems weren't technical — they were operational.</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginTop: "20px" }}>
              Across every project, every team, and every platform — the root
              cause was almost never the technology. It was broken workflows,
              manual processes, disconnected tools, and too much reliance on
              people instead of systems. I kept fixing the same things at
              enterprise scale. Then I started seeing the same problems in small
              businesses — with no team to fix them.
            </p>
          </div>

          <div>
            <p className="eyebrow" style={{ color: "var(--teal-soft)" }}>What kept showing up</p>
            <div className="gl-check-list" style={{ marginTop: "16px" }}>
              <span>Broken workflows slowing everything down</span>
              <span>Manual processes eating 10–20+ hours a week</span>
              <span>Disconnected tools creating duplicate work</span>
              <span>Too much reliance on people instead of systems</span>
              <span>Owners constantly busy but not actually scaling</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY I STARTED */}
      <section className="gl-section gl-light">
        <div className="gl-split">
          <div>
            <p className="eyebrow">Why I started Gemini Lane</p>
            <h2>Small businesses had the same problems — without a team to fix them.</h2>
          </div>

          <div>
            <p>
              I saw the same operational issues I'd spent years solving at
              enterprise companies — but small business owners were facing them
              alone. No dedicated ops team. No project managers. No one to step
              back and look at how the whole thing was running.
            </p>

            <p>
              They were duct-taping tools together, relying on memory and
              spreadsheets, spending their best hours on tasks that should have
              been automated years ago. And unlike large companies, they couldn't
              just hire a department to fix it.
            </p>

            <p style={{ fontWeight: 700, color: "var(--ink)" }}>
              That's where Gemini Lane comes in.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">What I actually do</p>
          <h2>I don't just consult. I step in and build.</h2>
          <p>
            Every engagement is about doing the actual work — not handing you a
            slide deck with recommendations. Here is what that looks like in
            practice.
          </p>
        </div>

        <div className="gl-check-list check-grid" style={{ maxWidth: "860px", margin: "0 auto" }}>
          {whatIDo.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="gl-section gl-dark">
        <div className="gl-split">
          <div>
            <p className="eyebrow">Who this is for</p>
            <h2>If this sounds like you, you're exactly who I work with.</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginTop: "20px" }}>
              Gemini Lane is built for business owners who have outgrown their
              current systems but haven't had the time — or the right help — to
              fix them.
            </p>
            <div className="hero-actions" style={{ marginTop: "32px" }}>
              <Link href="/book-call" className="primary-button">
                Let's Talk
              </Link>
            </div>
          </div>

          <div>
            <ul className="local-list light">
              {whoThisIsFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="gl-section gl-light">
        <div className="section-heading">
          <p className="eyebrow">How I work</p>
          <h2>Clarity. Efficiency. Automation. Scale.</h2>
          <p>
            No fluff, no overcomplicated tech, no "just use this tool" advice.
            Everything is built around your business, your workflows, and your
            goals.
          </p>
        </div>

        <div className="about-method-grid">
          {methodology.map((item) => (
            <div className="about-method-step" key={item.step}>
              <span className="step-label">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <p className="eyebrow">Let's start here</p>
        <h2>Not sure where your biggest inefficiencies are?</h2>
        <p>
          Start with the free business analysis. You'll get an instant
          efficiency score and a clear picture of what to fix first — no
          commitment required.
        </p>
        <div className="hero-actions center">
          <Link href="/free-business-analysis" className="primary-button">
            Get Your Free Business Analysis
          </Link>
          <Link href="/book-call" className="secondary-button">
            Book a 15-Minute Call
          </Link>
        </div>
      </section>

    </main>
  );
}
