import Link from "next/link";

export const metadata = {
  title: "Your Audit Materials | Gemini Lane",
  description: "Everything you need to complete your Full Business Audit questionnaires.",
  robots: { index: false, follow: false },
};

const stats = [
  { stat: "2", label: "questionnaires to complete" },
  { stat: "~2 hrs", label: "total time, at your own pace" },
  { stat: "5 days", label: "business days until your report" },
];

const questionnaires = [
  {
    title: "Business Analyzer",
    text: "Scores your business across ten areas so I can see exactly where the weak points are. Almost all multiple choice — click an option and move on.",
    length: "Up to 140 questions (some skip automatically based on your answers)",
    format: "Almost all multiple choice",
    time: "45–60 minutes",
    covers: "General, Business Goals, Marketing & Advertising, Operations, Employees, Technology, AI & Automation Readiness, Customer Relationships, Financial Management, Risk & Compliance",
    href: "/audit-materials/Business-Analyzer-Questionnaire.html",
    action: "Open Questionnaire",
  },
  {
    title: "Audit Intake Questionnaire",
    text: "Asks you to describe how your business actually works, in your own words. A few boxes have space for a lot of detail.",
    length: "52 questions",
    format: "Written answers",
    time: "45–75 minutes",
    covers: "Business Snapshot, Operations, Technology, Customer Journey, Marketing, Financial Health, Team & Capacity, AI & Automation, Final Context",
    href: "/audit-materials/Business-Audit-Intake-Questionnaire.html",
    action: "Open Questionnaire",
  },
];

const gettingThemOpen = [
  "Save the files to your computer first. Download them rather than opening them from inside your email preview — previews are read-only and won't save your progress.",
  "Double-click the saved file. It opens in your normal web browser — Chrome, Safari, Edge, Firefox, any of them.",
  "There's nothing to install, no account to create, and no login. The file works with your internet switched off. Nothing you type leaves your computer until you decide to send it.",
];

const whileYouWork = [
  "Your answers save as you go. The bar across the top shows your progress and flashes \"Saved\" as you type. Close the file whenever you like and reopen it later — your answers will be waiting.",
  "You don't have to go in order. The row of section links near the top jumps you anywhere, and each one shows how many questions in that section you've done.",
  "Some questions disappear. Skipped questions based on earlier answers are not counted against you.",
  "\"Unsure\" and \"I don't track this\" are real answers. Please use them — a confident guess is worse than an honest blank.",
];

const answerButtons = [
  {
    title: "Download My Answers",
    text: "Saves a plain text file of everything you entered. The one I recommend — download it, then attach it to an email to me.",
  },
  {
    title: "Email My Answers",
    text: "Downloads that same file and opens a new email addressed to me. You'll still need to attach the downloaded file — email programs won't let a web page attach it for you.",
  },
  {
    title: "Copy to Clipboard",
    text: "Copies all your answers as text, ready to paste straight into the body of an email if attachments are awkward.",
  },
  {
    title: "Save as PDF / Print",
    text: "Opens your printer dialog, formatted cleanly for paper. Choose \"Save as PDF\" as the destination to keep a tidy copy for your own records.",
  },
  {
    title: "Clear Form",
    text: "Erases every answer permanently. Only use this if you want to start completely over — it asks you to confirm, and it can't be undone.",
  },
];

const howToAnswerWell = [
  {
    lead: "Describe what actually happens, not what is supposed to happen.",
    text: "If the official process is a checklist but the real process is a text message to your brother-in-law, tell me about the text message. That's where the findings are.",
  },
  {
    lead: "Be specific with numbers, even rough ones.",
    text: "\"About 20 minutes a day\" is enormously more useful than \"a while.\" Estimates are fine — just label them as estimates and move on.",
  },
  {
    lead: "Don't tidy it up for me.",
    text: "I'm not here to judge how organized your business is — I'm here to find what's costing you time and money. A messy, honest answer is worth ten polished ones.",
  },
  {
    lead: "Say when you don't know.",
    text: "Every \"unsure\" you give me is a finding in itself, and it stops me recommending something built on a wrong assumption.",
  },
];

const nextSteps = [
  "Complete both questionnaires at your own pace — about two hours total, no deadline.",
  "Send your answers back to ruby.groves@gemini-lane.com using the buttons at the bottom of each questionnaire.",
  "Receive your written report within five business days of everything reaching me.",
  "Get on a free call with me so I can walk you through the findings in person.",
];

const faqs = [
  {
    q: "I closed the file. Did I lose my answers?",
    a: "No. Everything saves automatically as you type. Reopen the same file on the same computer, in the same browser, and your answers will be exactly where you left them.",
  },
  {
    q: "Can I do this on my phone or tablet?",
    a: "Yes, the files work on a phone. But start and finish on the same device — answers don't travel between devices. Given the length, a laptop or desktop is a great deal more comfortable.",
  },
  {
    q: "Do I have to answer every single question?",
    a: "No. Answer what you can. Skipping a question tells me something too. That said, the more you fill in, the more specific and useful your report will be.",
  },
  {
    q: "Can I get someone on my team to fill in part of it?",
    a: "Absolutely, and I'd encourage it. Whoever handles your books will answer the financial section better than you will. Just have them work on the same computer, or have them send you their answers to enter.",
  },
  {
    q: "The file won't open, or it opens as code.",
    a: "Save the attachment to your computer first, then right-click it, choose \"Open with,\" and pick your web browser. If it still misbehaves, email me and I'll send it another way.",
  },
  {
    q: "How long do I have?",
    a: "There's no deadline. Your audit is scheduled once your information arrives. If life gets in the way, take the time you need — just let me know roughly when to expect it so I can plan around it.",
  },
  {
    q: "What if I remember something important after I've sent everything?",
    a: "Send it to me. As long as I'm still working on your report, more context is always welcome.",
  },
  {
    q: "What exactly will I get at the end?",
    a: "A written report tailored to your business: what I found, where your time and money are leaking, and a prioritized list of what to do about it. The shape of it depends on what the audit turns up, because a generic template wouldn't tell you anything you didn't already know.",
  },
];

export default function AuditMaterialsPage() {
  return (
    <main className="results-page">
      <section className="results-hero">
        <p className="eyebrow">You&apos;re All Set</p>

        <h1>Welcome to your Full Business Audit.</h1>

        <p className="results-summary">
          Thanks for your payment. Everything you need to get started is on
          this page — bookmark it or save it now in case you need to come
          back to it. The whole process takes about two hours of your time,
          spread across as many sittings as you like.
        </p>

        <div className="proof-stats">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.stat}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="results-section">
        <h2>Your questionnaires</h2>
        <p>
          They&apos;re deliberately different. One measures, the other
          explains. Together they give me both a score and a story, which is
          what makes the report specific to you rather than generic advice
          you could have found online.
        </p>

        <div className="audit-two-col">
          {questionnaires.map((item) => (
            <article className="gl-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <dl className="audit-meta-list">
                <div>
                  <dt>Length</dt>
                  <dd>{item.length}</dd>
                </div>
                <div>
                  <dt>Format</dt>
                  <dd>{item.format}</dd>
                </div>
                <div>
                  <dt>Roughly</dt>
                  <dd>{item.time}</dd>
                </div>
                <div>
                  <dt>Covers</dt>
                  <dd>{item.covers}</dd>
                </div>
              </dl>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                {item.action}
              </a>
            </article>
          ))}
        </div>

        <p className="cta-micro">
          Some ground will feel familiar between the two — that&apos;s
          intentional. The Analyzer asks whether you have a process; the
          Intake asks what that process actually looks like on a Tuesday.
          Supporting materials like subscription lists or ad reports are
          optional and sharpen the audit, but nothing is required to start.
        </p>
      </section>

      <section className="results-section">
        <h2>Opening and filling in the files</h2>

        <div className="audit-columns">
          <div>
            <h3>Getting them open</h3>
            <ul>
              {gettingThemOpen.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>While you work</h3>
            <ul>
              {whileYouWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dashboard-outcome audit-timeline-note">
          <p>
            <strong>Finish on the device you start on.</strong> Your progress
            is saved inside one browser on one computer. If you begin on your
            laptop and later open the file on your phone, you&apos;ll see an
            empty form — your laptop answers are safe, just not visible
            there. If you need to switch devices partway through, press{" "}
            <strong>Download My Answers</strong> first so you have a copy of
            everything.
          </p>
        </div>
      </section>

      <section className="results-section">
        <h2>Sending your answers back</h2>
        <p>
          At the bottom of each questionnaire is a fixed bar of buttons.
          Here&apos;s what each one does — send both files&apos; answers to{" "}
          <a href="mailto:ruby.groves@gemini-lane.com">ruby.groves@gemini-lane.com</a>,
          together or one at a time, whichever suits you.
        </p>

        <div className="gl-card-grid">
          {answerButtons.map((item) => (
            <article className="gl-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="results-section">
        <h2>How to answer well</h2>
        <p>This is the part that decides whether your report is worth what you paid for it.</p>

        <ul className="audit-tips">
          {howToAnswerWell.map((item) => (
            <li key={item.lead}>
              <strong>{item.lead}</strong> {item.text}
            </li>
          ))}
        </ul>

        <div className="dashboard-outcome">
          <p>
            <strong>Your answers stay between us.</strong> Everything you
            share is confidential under the confidentiality clause of your
            service agreement. It&apos;s used only to produce your audit,
            it&apos;s never sold or shared, and you won&apos;t be named in
            any case study or marketing material without your written
            permission.
          </p>
        </div>
      </section>

      <section className="results-section">
        <h2>What happens next</h2>

        <ul>
          {nextSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="results-section">
        <h2>Common questions</h2>

        <div className="audit-faq-list">
          {faqs.map((faq) => (
            <details className="audit-faq-item" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="results-cta">
        <h2>Still stuck? Just ask.</h2>

        <p>
          If anything here is unclear, or a file is not behaving, email me at{" "}
          <a href="mailto:ruby.groves@gemini-lane.com">ruby.groves@gemini-lane.com</a>{" "}
          rather than guessing or giving up. A two-minute question saves an
          hour of frustration.
        </p>

        <div className="hero-actions center">
          <Link href="/" className="primary-button light">
            Back to Gemini Lane
          </Link>
        </div>
      </section>
    </main>
  );
}
