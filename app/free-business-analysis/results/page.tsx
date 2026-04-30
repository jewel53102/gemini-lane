"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type AnalysisResult = {
  score: number;
  level: string;
  timeLoss: string;
  problemAreas: string[];
  quickWins: string[];
  recommendation: string;
};

export default function ResultsPage() {
  const [result, setResult] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("geminiLaneAnalysisResult");

    if (saved) {
      setResult(JSON.parse(saved));
    }
  }, []);

  if (!result) {
    return (
      <main className="results-page">
        <section className="results-hero">
          <h1>No results found.</h1>
          <p>Please complete the free business analysis first.</p>
          <Link href="/free-business-analysis" className="primary-button">
            Take the Analysis
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="results-page">
      <section className="results-hero">
        <p className="eyebrow">Your Results Are Ready</p>

        <h1>Your Business Efficiency Score: {result.score}/100</h1>

        <p>
          Based on your answers, your business currently falls into the{" "}
          <strong>{result.level}</strong> range.
        </p>

        <div className="score-card">
          <span>{result.score}</span>
          <p>
  {result.recommendation ||
    "Your results show opportunities to improve workflows, reduce manual work, and build stronger operating systems."}
</p>
        </div>
      </section>

      <section className="results-section">
        <div className="results-grid">
          <div className="results-card">
            <h2>Where you are likely losing time</h2>
            <p className="time-loss">{result.timeLoss}</p>
          </div>

          <div className="results-card">
            <h2>Your main problem areas</h2>
            <ul>
              {result.problemAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="results-card">
            <h2>What to fix first</h2>
            <ul>
              {result.quickWins.map((win) => (
                <li key={win}>{win}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="results-cta">
        <p className="eyebrow">Next Step</p>
        <h2>Your results show exactly where we should start.</h2>
        <p>
  Gemini Lane can help you turn these findings into a practical 2–4 week
  systems improvement plan. We’ll identify what to automate first, what workflow
  needs cleanup, and what dashboard or operating system would make the biggest
  difference.
</p>

        <div className="hero-actions center">
            <p className="results-urgency">
  I’m currently opening a limited number of workflow improvement spots for local
  Frederick-area businesses.
</p>
          <Link href="/contact" className="primary-button">
  Book My Free 15-Minute Strategy Call
</Link>

          <Link href="/dashboards" className="secondary-button">
    View Sample Dashboards
  </Link>
        </div>
      </section>
    </main>
  );
}