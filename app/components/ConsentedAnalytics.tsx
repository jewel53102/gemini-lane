"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ConsentedAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () =>
      setConsented(localStorage.getItem("cookie_consent") === "accepted");
    check();
    window.addEventListener("cookieConsentUpdated", check);
    return () => window.removeEventListener("cookieConsentUpdated", check);
  }, []);

  if (!consented) return null;
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
