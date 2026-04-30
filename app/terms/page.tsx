export const metadata = {
  title: "Terms of Service | Gemini Lane",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <h1>Terms of Service</h1>

      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Use of This Website</h2>
      <p>
        By using this website, you agree to use it for lawful purposes only and
        not to misuse or attempt to disrupt its functionality.
      </p>

      <h2>Business Analysis Disclaimer</h2>
      <p>
        The free business analysis provided by Gemini Lane is for informational
        purposes only. It is based on the information you provide and does not
        guarantee specific results or outcomes.
      </p>

      <h2>No Professional Guarantee</h2>
      <p>
        While we aim to provide accurate and useful recommendations, Gemini Lane
        makes no guarantees regarding business performance, revenue growth, or
        operational outcomes.
      </p>

      <h2>Services</h2>
      <p>
        Any paid services offered by Gemini Lane will be subject to separate
        agreements outlining scope, deliverables, and terms.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Gemini Lane shall not be liable for any direct, indirect, or incidental
        damages resulting from the use of this website or reliance on any
        information provided.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this site, including text, design, and materials, is the
        property of Gemini Lane and may not be reused without permission.
      </p>

      <h2>Changes</h2>
      <p>
        These terms may be updated at any time. Continued use of the site
        constitutes acceptance of any changes.
      </p>

      <h2>Contact</h2>
      <p>
        For questions regarding these terms, contact:
        <br />
        <strong>info@gemini-lane.com</strong>
      </p>
    </main>
  );
}