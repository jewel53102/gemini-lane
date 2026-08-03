"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Result = {
  score: number;
  level: string;
  timeLoss: string;
  problemAreas: string[];
  quickWins: string[];
  recommendation: string;
};

export default function ResultsPage() {
  const [result, setResult] = useState<Result | null>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("geminiLaneAnalysisResult");
    if (stored) {
      localStorage.removeItem("geminiLaneAnalysisResult");
      setResult(JSON.parse(stored));
    } else {
      router.replace("/free-business-analysis");
    }
  }, [router]);

  if (!result) {
    return (
      <main className="results-page">
        <p>Loading your results...</p>
      </main>
    );
  }

  return (
    <main className="results-page">
      <section className="results-hero">
        <p className="eyebrow">Your Business Analysis</p>

        <h1>Your efficiency score: {result.score}/100</h1>

        <p className="results-summary">
          Based on your answers, your business is currently experiencing{" "}
          <strong>{result.level}</strong> and may be losing{" "}
          <strong>{result.timeLoss}</strong> every week due to workflow gaps,
          manual work, or lack of systems.
        </p>
      </section>

      {/* 🔥 Urgency block */}
      <section className="results-warning">
        <h2>This is what that actually means</h2>

        <p>
          That time loss compounds every week. What feels like small inefficiencies
          usually turns into:
        </p>

        <ul>
          <li>Missed follow-ups and lost opportunities</li>
          <li>Constant context switching and mental overload</li>
          <li>More work falling back on you instead of your systems</li>
        </ul>
      </section>

      {/* 🔥 Problems */}
      <section className="results-section">
        <h2>Your biggest problem areas</h2>

        <ul>
          {result.problemAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* 🔥 Quick wins */}
      <section className="results-section">
        <h2>What you can improve quickly</h2>

        <ul>
          {result.quickWins.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* 🔥 Recommendation */}
      <section className="results-section">
        <h2>Recommended next step</h2>

        <p>{result.recommendation}</p>
      </section>

      {/* 🔥 Conversion block */}
      <section className="results-cta">
        <h2>Want help fixing this?</h2>

        <p>
          We can use a short 15-minute call to identify exactly what to fix first,
          what can be automated, and what system would make the biggest impact
          on your business.
        </p>

        <div className="hero-actions center">
          <Link href="/book-call" className="primary-button">
            Book Your Free 15-Minute Call
          </Link>

          <Link href="/dashboards" className="secondary-button">
            View Sample Dashboards
          </Link>
        </div>

        <p className="cta-micro">
          No pressure • No long sales call • Just clarity on what to fix
        </p>

        <p className="cta-micro">
          Want the full picture instead of a quick call?{" "}
          <Link href="/full-business-audit">
            See the Full Business Audit
          </Link>{" "}
          — a written report across ten areas of your business.
        </p>
      </section>

      {/* 🔥 Secondary trust section */}
      <section className="results-trust">
        <h3>What happens on the call?</h3>

        <ul>
          <li>We identify your biggest bottleneck</li>
          <li>We map what’s causing the inefficiency</li>
          <li>We outline a simple, realistic fix</li>
        </ul>
      </section>
    </main>
  );
}