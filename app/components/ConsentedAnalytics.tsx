"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const GA_ID = "G-H72ECQWZVK";

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
      <Script
        id="mcjs"
        strategy="afterInteractive"
        src="https://chimpstatic.com/mcjs-connected/js/users/d71fb23cbb345ef1f1ab6f372/bd19c78bbd08ebc2df52b91aa.js"
      />
    </>
  );
}
