export default function BookCallPage() {
  return (
    <main className="booking-page">
      {/* HERO */}
      <section className="booking-hero">
        <p className="eyebrow">Free Strategy Call</p>

        <h1>Let’s identify exactly where your business is losing time.</h1>

        <p>
          This is a focused 15-minute call where we’ll look at your workflows,
          identify bottlenecks, and map out what to fix first.
        </p>
      </section>

      {/* CONTENT */}
      <section className="booking-section">
        <div className="booking-grid">
          <div className="booking-card">
            <h2>What we’ll cover</h2>

            <ul>
              <li>Where your time is being lost</li>
              <li>What tasks can be automated</li>
              <li>How your workflows can be simplified</li>
              <li>What system would make the biggest impact</li>
            </ul>
          </div>

          <div className="booking-card">
            <h2>Who this is for</h2>

            <ul>
              <li>Business owners doing $100K–$5M</li>
              <li>Managing too many day-to-day tasks</li>
              <li>Looking to improve efficiency and systems</li>
              <li>Open to automation and AI tools</li>
            </ul>
          </div>
        </div>

        {/* CTA + CALENDAR */}
        <div className="booking-cta">
          <h2>Choose a time below</h2>

          <p className="booking-subtext">
            This is not a sales call. You’ll leave with clear next steps whether
            we work together or not.
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://calendly.com/groves-ruby/geminilanebizanalysis" width="100%" height="700" frameBorder="0"></iframe>`,
            }}
          />
        </div>
      </section>
    </main>
  );
}