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
    window.dispatchEvent(new Event("cookieConsentUpdated"));
    setVisible(false);
  }

  function declineCookies() {
    localStorage.setItem("cookie_consent", "declined");
    window.dispatchEvent(new Event("cookieConsentUpdated"));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        This site uses cookies to analyze traffic and improve your experience.
        You can accept or decline non-essential cookies below.
      </p>

      <div className="cookie-buttons">
        <button onClick={declineCookies} className="cookie-button-decline">
          Decline
        </button>
        <button onClick={acceptCookies} className="cookie-button">
          Accept
        </button>
      </div>
    </div>
  );
}
