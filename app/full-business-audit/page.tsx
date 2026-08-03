import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Full Business Audit | Gemini Lane | Frederick, MD",
  description:
    "A complete diagnostic of your operations, systems, marketing, finances, and team — scored across ten areas and delivered as a written report within five business days. $2,000, due upfront.",
};

const STRIPE_LINK = "https://buy.stripe.com/8x2bJ14TD7du8hW47L83C01";

const painPoints = [
  "You're doing work that shouldn't need you at all.",
  "The same information gets typed into four different places.",
  "Leads come in and follow-up depends on someone remembering.",
  "You're paying for software nobody opens.",
  "Nothing is written down, so nothing can be handed off.",
  "If you took two weeks off, things would quietly fall apart.",
];

const areas = [
  {
    n: "01",
    title: "Operations & Process",
    text: "How work actually moves through your business, who owns each step, and where it stalls.",
  },
  {
    n: "02",
    title: "Technology & Tools",
    text: "Every subscription you pay for, what connects to what, and what you're paying for twice.",
  },
  {
    n: "03",
    title: "Marketing & Advertising",
    text: "Where customers really come from, what you're spending, and whether you can tell the difference.",
  },
  {
    n: "04",
    title: "Customer Relationships",
    text: "Response times, onboarding, follow-up, retention, and the revenue quietly leaking out of each.",
  },
  {
    n: "05",
    title: "Employee Management",
    text: "Roles, onboarding, communication, workload, and where knowledge is trapped in one person's head.",
  },
  {
    n: "06",
    title: "AI & Automation Readiness",
    text: "What can realistically be automated in your business, at what cost, and who would own it.",
  },
  {
    n: "07",
    title: "Financial Management",
    text: "Cash flow, margins, invoicing, collections, and the numbers you should be watching but aren't.",
  },
  {
    n: "08",
    title: "Risk & Compliance",
    text: "Insurance, licensing, contracts, data handling — the cheap problems that get expensive.",
  },
  {
    n: "09",
    title: "Business Goals",
    text: "Where you actually want this to go, so the recommendations point at your goals and not generic best practice.",
  },
  {
    n: "10",
    title: "Owner Dependency",
    text: "What breaks when you step away, and what it would take for the business to run without you.",
  },
];

const steps = [
  {
    n: "01",
    title: "Pay and sign",
    text: "Pay the $2,000 and sign the service agreement. Takes about five minutes and reserves your place in the schedule.",
  },
  {
    n: "02",
    title: "Answer the questionnaires",
    text: "Two questionnaires arrive by email. They open in your browser, save as you type, and take about two hours total. No deadline — do them at your own pace.",
  },
  {
    n: "03",
    title: "I dig in",
    text: "I review everything, score your business across all ten areas, and build the report. If something needs clarifying, I'll email you.",
  },
  {
    n: "04",
    title: "Get your report",
    text: "Within five business days of receiving your information.",
  },
  {
    n: "05",
    title: "Free wrap-up call",
    text: "Once you've had a chance to read it, we get on a short call so I can walk you through the findings and answer questions in person — included, no charge, no pitch.",
  },
];

const deliverables = [
  {
    title: "Where your time is going",
    text: "The specific tasks eating your week, with rough hours attached.",
  },
  {
    title: "What's costing you money",
    text: "Duplicate subscriptions, manual rework, leads going cold, uncollected invoices.",
  },
  {
    title: "A prioritized fix list",
    text: "Ranked by impact against effort, so you know what to do first and what can wait.",
  },
  {
    title: "Automation opportunities",
    text: "What can realistically be automated in your business, with rough costs — and what shouldn't be.",
  },
  {
    title: "What's working",
    text: "The things to protect while you change everything else. These get missed more often than you'd think.",
  },
  {
    title: "Risks worth knowing about",
    text: "Single points of failure, gaps in coverage, knowledge trapped in one person's head.",
  },
];

const goodFit = [
  "You're doing $100K–$5M a year with a small team.",
  "You're still close enough to the work to answer questions about it.",
  "You want to know what's actually wrong before spending money fixing it.",
  "You'd rather hear the truth than be sold to.",
];

const notFit = [
  "You're pre-revenue or just getting started — take the free analysis instead.",
  "You want someone to build something specific you've already scoped.",
  "You don't have two hours to answer questions properly.",
  "You're looking for validation rather than findings.",
];

const proofStats = [
  { stat: "18 hrs", label: "average weekly time savings identified for clients" },
  { stat: "2–4 wks", label: "typical timeline to see workflow improvements" },
  { stat: "3–5", label: "core systems usually cleaned up first" },
];

const faqs = [
  {
    q: "Do I have to hire you afterwards?",
    a: "No, and there's no pitch at the end. The audit is a standalone product. The report is yours to act on however you like — do it yourself, hand it to your team, or take it to another firm entirely. If you do want help implementing, that's a separate conversation and a separate agreement, and it's entirely your call.",
  },
  {
    q: "Is this actually done by a person, or is it AI-generated?",
    a: "By a person — me. I read every answer you write, score your business myself, and write the report myself. AI automation is something I help other businesses build, but it's not how your audit gets made. Once your report is ready, we get on a free call so you're talking to the person who actually wrote it, not a bot.",
  },
  {
    q: "How is this different from the free analysis?",
    a: "The free analysis is five questions and gives you a rough efficiency score in about a minute. It's a useful signal. The full audit is close to 200 questions across ten areas, plus a written report tailored to your business. One tells you roughly where to look; the other tells you what's actually there and what to do about it.",
  },
  {
    q: "What do I actually receive?",
    a: "A written report covering what I found, where your time and money are going, and a prioritized list of what to fix — ordered by impact against effort, so you know what to do first. The structure is tailored to what the audit turns up, because a fill-in-the-blank template wouldn't tell you anything you don't already know.",
  },
  {
    q: "How much work is this on my end?",
    a: "About two hours of answering questions, split across as many sittings as you like. Supporting materials like subscription lists or ad reports are optional and sharpen the report, but nothing is required to get started.",
  },
  {
    q: "What size business is this for?",
    a: "It works best for businesses doing roughly $100K to $5M a year with a small team, where the owner is still close to the day-to-day. If you're much smaller than that, the free analysis is probably the better starting point.",
  },
  {
    q: "Is my information safe?",
    a: "Yes. Everything you share is confidential under the confidentiality clause in the service agreement. It's used only to produce your audit, is never sold or shared, and you won't be named in any case study without your written permission.",
  },
  {
    q: "What if the audit doesn't find anything?",
    a: "In ten years of doing this work I've never seen a business with nothing to fix. But if the audit genuinely turns up nothing actionable, I'll tell you that plainly rather than padding the report — and that's worth knowing too.",
  },
];

const auditSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business Audit and Operations Diagnostic",
  name: "Full Business Audit",
  provider: {
    "@type": "LocalBusiness",
    name: "Gemini Lane",
    email: "ruby.groves@gemini-lane.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Frederick",
      addressRegion: "MD",
      addressCountry: "US",
    },
    url: "https://www.gemini-lane.com",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Frederick County, Maryland" },
    { "@type": "AdministrativeArea", name: "Montgomery County, Maryland" },
    { "@type": "AdministrativeArea", name: "Howard County, Maryland" },
    { "@type": "AdministrativeArea", name: "Carroll County, Maryland" },
  ],
  offers: {
    "@type": "Offer",
    price: "2000",
    priceCurrency: "USD",
    description: "Comprehensive business audit across ten areas, delivered as a written report within five business days.",
  },
};

export default function FullBusinessAuditPage() {
  return (
    <main className="audit-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(auditSchema) }}
      />

      <section className="gl-hero">
        <div className="gl-hero-content">
          <p className="eyebrow">Full Business Audit</p>

          <h1>Find out exactly where your business is losing time and money.</h1>

          <p className="hero-text">
            A complete diagnostic of your operations, systems, marketing, finances,
            and team — scored across ten areas and written up as a prioritized list
            of what to fix first. No guesswork, no generic advice, no obligation to
            hire anyone afterwards.
          </p>

          <div className="hero-actions">
            <a href={STRIPE_LINK} className="primary-button">
              Start My Audit — $2,000 Today
            </a>

            <Link href="/book-call" className="secondary-button">
              Questions First? Book a Call
            </Link>
          </div>

          <p className="cta-micro">
            $2,000, due upfront · Delivered in 5 business days
          </p>
        </div>

        <div className="gl-hero-panel">
          <p className="card-label">What it costs</p>
          <p className="acq-stat-number">$2,000</p>
          <p className="pricing-note">Paid upfront, in full</p>

          <ul className="qualified-checklist audit-checklist">
            <li>
              <span aria-hidden="true">✓</span>
              <div>
                <strong>$2,000 today</strong> — Reserves your place and starts
                the process
              </div>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <div>
                <strong>5 business days</strong> — From the moment I have your
                information
              </div>
            </li>
            <li>
              <span aria-hidden="true">✓</span>
              <div>
                <strong>~2 hours of your time</strong> — Two questionnaires, done
                at your own pace
              </div>
            </li>
          </ul>

          <a href={STRIPE_LINK} className="primary-button callout-button">
            Start My Audit — $2,000 Today
          </a>
          <p className="pricing-note audit-secure-note">
            Secure checkout · Agreement sent immediately after
          </p>
        </div>
      </section>

      <section className="gl-section">
        <div className="audit-split">
          <div>
            <p className="eyebrow">Why this exists</p>
            <h2>You already know something is wrong. You just can&apos;t point at it.</h2>
            <p>
              Most business owners can feel the drag — the week disappears, the
              same problems keep resurfacing, the team asks the same questions —
              but they can&apos;t say precisely where the hours are going or which
              fix would matter most.
            </p>
            <p>
              Guessing is expensive. You end up buying software you don&apos;t
              need, automating the wrong thing, or hiring for a problem that was
              really a process problem.
            </p>
          </div>

          <ul className="local-list">
            {painPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gl-section gl-light">
        <div className="gl-split">
          <Image
            src="/ruby-gemini-lane.jpeg"
            alt="Ruby Groves, founder of Gemini Lane"
            width={480}
            height={600}
            className="audit-auditor-photo"
          />

          <div className="audit-auditor-copy">
            <p className="eyebrow">Who does the work</p>
            <h2>A real person reads every answer and writes every finding.</h2>
            <p>
              I&apos;m Ruby Groves, founder of Gemini Lane. Every audit — the
              scoring, the analysis, the report — is done by me personally.
              Not outsourced, not templated, and not generated by AI, even
              though AI automation is part of what I help other businesses
              build.
            </p>
            <p>
              You&apos;ll work directly with me from your first questionnaire
              through the final report, and once it&apos;s delivered we get
              on a free call so I can walk you through it in person.
            </p>
            <Link href="/about" className="text-link">
              More about my background
            </Link>
          </div>
        </div>
      </section>

      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">What gets examined</p>
          <h2>Ten areas. Nothing skipped because it&apos;s awkward.</h2>
          <p>
            Most consultants look at the thing they happen to sell. This looks at
            the whole business, which is the only way to tell whether your
            marketing problem is actually an operations problem wearing a
            disguise.
          </p>
        </div>

        <div className="gl-card-grid">
          {areas.map((area) => (
            <article className="gl-card" key={area.title}>
              <p className="card-label">{area.n}</p>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gl-section gl-dark">
        <div className="audit-no-strings">
          <p className="eyebrow">No strings</p>
          <h2>This is a diagnosis, not a sales call in disguise.</h2>
          <p>
            The audit is a standalone product and the report is yours. Fix things
            yourself, hand it to your team, or take it to a different firm
            entirely — the recommendations are written to be actionable by
            anyone, not just by me.
          </p>
          <p>
            If you decide you want help implementing afterwards, that&apos;s a
            separate conversation you can start whenever you like. There&apos;s no
            pitch at the end of the report and no follow-up sequence waiting for
            you.
          </p>
        </div>
      </section>

      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Five steps, and a real conversation at the end.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.title}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className="dashboard-outcome audit-timeline-note">
          <p>
            <strong>You control the timeline.</strong> The five-day clock starts
            when your information reaches me, not when you pay. There&apos;s no
            deadline on the questionnaires and no penalty for taking your time.
          </p>
        </div>
      </section>

      <section className="gl-section gl-light">
        <div className="audit-split">
          <div>
            <p className="eyebrow">What you get</p>
            <h2>A report you can act on Monday morning.</h2>
            <p>
              Not a slide deck of observations you already agreed with. A written
              document that names the problem, quantifies what it&apos;s costing
              you where that&apos;s possible, and tells you what to do about it in
              the order worth doing it.
            </p>
            <div className="hero-actions">
              <a href={STRIPE_LINK} className="primary-button">
                Start My Audit — $2,000 Today
              </a>
            </div>
          </div>

          <div className="audit-deliverables">
            {deliverables.map((item) => (
              <article className="gl-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">Fit</p>
          <h2>Honestly, it isn&apos;t for everyone.</h2>
        </div>

        <div className="booking-grid">
          <div className="booking-card">
            <h2>This is for you if</h2>

            <ul>
              {goodFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="booking-card">
            <h2>This isn&apos;t for you if</h2>

            <ul>
              {notFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="pricing-note audit-fit-note">
              Not sure which side you&apos;re on?{" "}
              <Link href="/free-business-analysis">
                Start with the free analysis
              </Link>{" "}
              — it takes a minute and costs nothing.
            </p>
          </div>
        </div>
      </section>

      <section className="gl-section gl-light">
        <div className="proof-stats">
          {proofStats.map((item) => (
            <div key={item.label}>
              <strong>{item.stat}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <blockquote className="audit-testimonial">
          <p>
            &ldquo;Gemini Lane helped us see exactly where our process was
            breaking down and gave us a clear plan to simplify the work.&rdquo;
          </p>
          <footer>
            <strong>Operations Client</strong> · Local service business
          </footer>
        </blockquote>
      </section>

      <section className="gl-section">
        <div className="section-heading">
          <p className="eyebrow">Common questions</p>
          <h2>Before you spend $2,000.</h2>
        </div>

        <div className="audit-faq-list">
          {faqs.map((faq) => (
            <details className="audit-faq-item" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Stop guessing which problem to solve first.</h2>

        <p>
          Two hours of your time and $2,000 today gets you a complete picture
          of your business and a clear list of what to fix.
        </p>

        <div className="hero-actions center">
          <a href={STRIPE_LINK} className="primary-button">
            Start My Audit — $2,000 Today
          </a>

          <Link href="/book-call" className="secondary-button">
            Talk to Me First
          </Link>
        </div>

        <p className="cta-micro">
          Questions? Email{" "}
          <a href="mailto:ruby.groves@gemini-lane.com">ruby.groves@gemini-lane.com</a> ·
          Serving Frederick, Montgomery, Howard, and Carroll counties, plus
          remote clients U.S.-wide.
        </p>
      </section>
    </main>
  );
}
