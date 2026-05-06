import type { NextConfig } from "next";

const securityHeaders = [
  // Force HTTPS and tell browsers to remember it for 2 years
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Prevent the site from being embedded in iframes (clickjacking)
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Stop browsers from MIME-sniffing the content type
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Send full URL only for same-origin requests; only origin for cross-origin
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disable browser features the site doesn't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      // Default: only load from same origin
      "default-src 'self'",
      // Scripts: self + inline (required by Next.js) + Vercel Analytics external script
      "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
      // Styles: self + inline (required by Next.js/Tailwind) + Google Fonts CSS
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts: self + Google Fonts files
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + data URIs (used by some Next.js internals)
      "img-src 'self' data: blob:",
      // Fetch/XHR: self (API routes) + Vercel Speed Insights telemetry
      "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
      // Block all framing from external origins
      "frame-ancestors 'self'",
      // Restrict <base> tag to same origin
      "base-uri 'self'",
      // Restrict form submissions to same origin
      "form-action 'self'",
      // Block Flash and other plugins entirely
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
