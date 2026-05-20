"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const GA_ID = "G-193PQ3VFVC";

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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
