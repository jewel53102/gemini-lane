"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        This site uses cookies and similar technologies to improve your
        experience, analyze traffic, and support marketing efforts. By continuing
        to use this site, you agree to our use of cookies.
      </p>

      <button onClick={acceptCookies} className="cookie-button">
        Accept
      </button>
    </div>
  );
}