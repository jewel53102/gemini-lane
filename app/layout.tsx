import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import ConsentedAnalytics from "./components/ConsentedAnalytics";
import LocalBusinessSchema from "./components/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gemini-lane.com"),
  title: "Gemini Lane | AI Automation & Operations Consulting | Frederick, Maryland",
  description:
    "AI automation, business systems, project dashboards, and operations consulting for small to mid-sized businesses in Frederick, Maryland.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gemini-lane.com",
    siteName: "Gemini Lane",
    title: "Gemini Lane | AI Automation & Operations Consulting | Frederick, MD",
    description:
      "Stop losing time to manual work. Gemini Lane builds AI automation, workflow systems, and project dashboards for small businesses in Frederick, MD.",
    images: [
      {
        url: "https://www.gemini-lane.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gemini Lane – AI Automation & Operations Consulting in Frederick, MD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemini Lane | AI Automation & Operations Consulting | Frederick, MD",
    description:
      "Stop losing time to manual work. Gemini Lane builds AI automation, workflow systems, and project dashboards for small businesses in Frederick, MD.",
    images: ["https://www.gemini-lane.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        <Header />
        {children}
        <ConsentedAnalytics />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
