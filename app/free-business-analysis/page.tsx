"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    key: "taskTracking",
    label: "How do you currently track tasks and projects?",
    options: [
      "Mostly in my head",
      "Notes or notebooks",
      "Spreadsheets",
      "Project management software",
    ],
  },
  {
    key: "leadFollowUp",
    label: "How do you follow up with leads?",
    options: ["Manually", "Sometimes automated", "Mostly automated", "Fully automated"],
  },
  {
    key: "adminHours",
    label: "How many hours per week do you spend on admin or repetitive tasks?",
    options: ["0–5", "5–10", "10–20", "20+"],
  },
  {
    key: "aiUsage",
    label: "Are you currently using AI tools in your business?",
    options: ["No", "A little", "Yes, but not strategically", "Yes, regularly"],
  },
  {
    key: "biggestBottleneck",
    label: "What is your biggest bottleneck right now?",
    options: [
      "Time",
      "Organization",
      "Lead management",
      "Team coordination",
      "Too much manual work",
    ],
  },
  {
    key: "revenueRange",
    label: "What is your approximate annual revenue?",
    options: ["Under $100K", "$100K–$500K", "$500K–$1M", "$1M–$5M", "$5M+"],
  },
];

export default function FreeBusinessAnalysisPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    email: "",
    businessName: "",
    website: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(key: string, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/free-business-analysis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      localStorage.setItem("geminiLaneAnalysisResult", JSON.stringify(result));
      router.push("/free-business-analysis/results");
    } catch (error) {
      console.error("Survey submit error:", error);
      setErrorMessage("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <main className="analysis-page">
      <section className="analysis-hero">
        <p className="eyebrow">Free Business Analysis</p>
        <h1>Find out where your business is losing time.</h1>
        <p>
          Answer a few quick questions and get an instant efficiency score,
          workflow diagnosis, and recommended next steps.
        </p>
      </section>

      <section className="analysis-form-section">
        <form className="analysis-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={(e) => updateField("website", e.target.value)}
            className="honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="form-grid">
            <label>
              Your Name
              <input
                required
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Jane Smith"
              />
            </label>

            <label>
              Email
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="jane@business.com"
              />
            </label>

            <label>
              Business Name
              <input
                required
                value={formData.businessName}
                onChange={(e) => updateField("businessName", e.target.value)}
                placeholder="Your Business Name"
              />
            </label>
          </div>

          {questions.map((question) => (
            <fieldset key={question.key} className="question-card">
              <legend>{question.label}</legend>

              <div className="option-grid">
                {question.options.map((option) => (
                  <label key={option} className="radio-option">
                    <input
                      required
                      type="radio"
                      name={question.key}
                      value={option}
                      checked={formData[question.key] === option}
                      onChange={(e) => updateField(question.key, e.target.value)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}

          {errorMessage && <p className="form-error">{errorMessage}</p>}

          <button className="primary-button analysis-submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating Your Results..." : "Get My Instant Results"}
          </button>
        </form>
      </section>
    </main>
  );
}