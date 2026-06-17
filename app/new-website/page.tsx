"use client";

import Link from "next/link";
import { useState } from "react";

const PACKAGE_ITEMS = [
  "Custom Domain Name",
  "Custom Email Address & Set-up",
  "Personalized Website Build & Publish",
  "3 Rounds of Website Edits",
  "Contact Form Set-up",
  "FB and Instagram Set-up",
];

const FOR_WHO = [
  {
    num: "01",
    title: "You're starting fresh",
    body: "No website yet, or you have something outdated that doesn't reflect your business. You need a clean, professional presence — fast.",
  },
  {
    num: "02",
    title: "You want it handled",
    body: "You don't want to figure out hosting, domains, email, or builders on your own. You want to hand it off and get back to running your business.",
  },
  {
    num: "03",
    title: "You need the full setup",
    body: "Not just a page — a real foundation. Domain, email, website, and social all connected and ready to go from day one.",
  },
];

export default function NewWebsitePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    phone: "",
    interest: "New Website — Starter Package",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function updateField(key: keyof typeof formData, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      businessName: "",
      phone: "",
      interest: "New Website — Starter Package",
      message: "",
      website: "",
    });
  }

  return (
    <main className="contact-page">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="local-hero">
        <p className="eyebrow">Starter Package</p>
        <h1>Get your business online — the right way, the first time.</h1>
        <p>
          A complete digital foundation for small businesses. Domain, email,
          website, and social — all built and set up for you. No tech headaches,
          no guessing, no piecing it together alone.
        </p>
        <div className="hero-actions center" style={{ marginTop: "36px" }}>
          <a href="#get-started" className="primary-button">See What's Included</a>
          <a href="#inquiry-form" className="secondary-button">Get in Touch</a>
        </div>
      </section>

      {/* ── Package Details ───────────────────────────────────────── */}
      <section className="gl-section" id="get-started" style={{ background: "var(--white)" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div className="gl-split">

            <div>
              <p className="eyebrow">What's Included</p>
              <h2>Everything in one package.</h2>
              <p style={{ marginTop: "20px", color: "var(--text-muted)", fontSize: "1.06rem", lineHeight: "1.8" }}>
                The Starter Package covers every piece of your online presence
                from the ground up. You get a custom domain in your business
                name, a professional email address that matches it, and a
                personalized website built and published for you — plus three
                rounds of edits so it's exactly right.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "1.06rem", lineHeight: "1.8" }}>
                We also set up your contact form so leads can reach you directly
                from your site, and get your Facebook and Instagram pages
                configured and connected — so you're ready to be found
                everywhere your customers are looking.
              </p>
              <a href="#inquiry-form" className="primary-button" style={{ display: "inline-flex", marginTop: "8px" }}>
                Start Your Inquiry
              </a>
            </div>

            <div className="landing-offer-card">
              <p className="card-label">Starter Package — All Included</p>
              <ul>
                {PACKAGE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────────────────────────── */}
      <section className="gl-section" style={{ background: "var(--gray)" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div className="section-heading">
            <p className="eyebrow">Is This Right for You?</p>
            <h2>Built for businesses ready to launch.</h2>
          </div>
          <div className="process-grid">
            {FOR_WHO.map(({ num, title, body }) => (
              <div key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inquiry Form ──────────────────────────────────────────── */}
      <section className="contact-section" id="inquiry-form">
        <div className="contact-grid">

          <div className="contact-copy">
            <p className="eyebrow">Get Started</p>
            <h2>Tell us about your business.</h2>
            <p>
              Fill out the form and we'll follow up to talk through your
              business, what you need, and what the process looks like. No
              commitment required.
            </p>

            <div className="contact-side-card">
              <h3>What happens next?</h3>
              <p>
                After you submit, we'll review your message and reach out within
                one business day to schedule a short call — usually 15–20
                minutes — to talk through the details and get things moving.
              </p>
            </div>

            <div className="contact-side-card">
              <h3>Already have a website?</h3>
              <p>
                The Starter Package is for new builds. If you need help with an
                existing site or want something more custom, reach out through
                the main contact page.
              </p>
              <Link href="/contact" className="secondary-button dark" style={{ display: "inline-flex", marginTop: "14px" }}>
                Go to Contact Page
              </Link>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => updateField("website", e.target.value)}
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
            />

            <label>
              Name *
              <input
                required
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Your name"
              />
            </label>

            <label>
              Email *
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@yourbusiness.com"
              />
            </label>

            <label>
              Business Name *
              <input
                required
                value={formData.businessName}
                onChange={(e) => updateField("businessName", e.target.value)}
                placeholder="Your business name"
              />
            </label>

            <label>
              Phone
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="Optional"
              />
            </label>

            <label className="full">
              Tell us about your business
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="What do you do, who do you serve, and what are you hoping your website will do for you?"
              />
            </label>

            <button
              type="submit"
              className="primary-button contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send My Inquiry"}
            </button>

            {status === "success" && (
              <p className="form-success">
                Got it — we'll be in touch within one business day.
              </p>
            )}

            {status === "error" && (
              <p className="form-error">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>

        </div>
      </section>

    </main>
  );
}
