export const metadata = {
  title: "Privacy Policy | Gemini Lane",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <h1>Privacy Policy</h1>

      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Information We Collect</h2>
      <p>
        Gemini Lane collects information you voluntarily provide through forms,
        including your name, email address, business name, and responses to our
        business analysis survey.
      </p>

      <p>
  This site uses cookies to improve your experience. 
</p>

      <h2>How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide your business analysis results</li>
        <li>Respond to inquiries and requests</li>
        <li>Send follow-up emails related to your submission</li>
        <li>Improve our services and offerings</li>
      </ul>

      <h2>Email Communications</h2>
      <p>
        By submitting your information, you may receive emails related to your
        analysis, workflow optimization tips, and service offerings. You may
        unsubscribe at any time.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not sell your personal information. Your data may be processed
        through third-party services used to operate this website, including:
      </p>
      <ul>
        <li>Supabase (data storage)</li>
        <li>Mailchimp (email communication)</li>
        <li>Upstash (rate limiting and security)</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your information, but no system is
        completely secure. By using this website, you acknowledge this risk.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request to access, update, or delete your personal information by
        contacting us directly.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about this policy, contact:
        <br />
        <strong>info@gemini-lane.com</strong>
      </p>
    </main>
  );
}