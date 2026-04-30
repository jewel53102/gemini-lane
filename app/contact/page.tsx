"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    phone: "",
    interest: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  function updateField(
    key: keyof typeof formData,
    value: string
  ) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
      interest: "",
      message: "",
      website: "",
    });
  }

  return (
    <main className="contact-page">
      <section className="local-hero">
        <p className="eyebrow">Contact Gemini Lane</p>

        <h1>Tell us where your business feels messy, manual, or harder than it should be.</h1>

        <p>
          Share a few details and Gemini Lane will help point you toward the
          right next step — workflow cleanup, automation, dashboards, or a
          strategy call.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Start here</p>
            <h2>Not ready to book yet? Send a quick message.</h2>

            <p>
              This form is best if you want to ask a question, describe what is
              happening in your business, or see whether Gemini Lane is the right
              fit before scheduling a call.
            </p>

            <div className="contact-side-card">
              <h3>Want the fastest path?</h3>
              <p>
                Take the free analysis first and get an instant efficiency score
                with recommendations.
              </p>

              <Link href="/free-business-analysis" className="primary-button">
                Get My Free Analysis
              </Link>
            </div>

            <div className="contact-side-card">
              <h3>Already know you want to talk?</h3>
              <p>
                Book a focused 15-minute strategy call to identify what to fix
                first.
              </p>

              <Link href="/book-call" className="secondary-button dark">
                Book a 15-Minute Call
              </Link>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
  type="text"
  name="website"
  value={formData.website || ""}
  onChange={(e) => updateField("website" as any, e.target.value)}
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
                placeholder="you@business.com"
              />
            </label>

            <label>
              Business Name
              <input
                value={formData.businessName}
                onChange={(e) => updateField("businessName", e.target.value)}
                placeholder="Your business name"
              />
            </label>

            <label>
              Phone
              <input
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="Optional"
              />
            </label>

            <label>
              What do you need help with?
              <select
                value={formData.interest}
                onChange={(e) => updateField("interest", e.target.value)}
              >
                <option value="">Select one</option>
                <option value="Workflow Optimization">Workflow Optimization</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Project or Client Dashboard">
                  Project or Client Dashboard
                </option>
                <option value="Lead Follow-Up System">Lead Follow-Up System</option>
                <option value="Operations Consulting">Operations Consulting</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            </label>

            <label className="full">
              What is going on in your business?
              <textarea
                rows={6}
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Tell me what feels inefficient, manual, scattered, or hard to manage."
              />
            </label>

            <button
              type="submit"
              className="primary-button contact-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="form-success">
                Your message was sent. Thank you — I’ll review it and follow up.
              </p>
            )}

            {status === "error" && (
              <p className="form-error">
                Something went wrong. Please try again or book a call directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}