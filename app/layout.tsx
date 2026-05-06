import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";


export const metadata: Metadata = {
  title: "Gemini Lane | AI Automation & Operations Consulting | Frederick, Maryland",
  description:
    "AI automation, business systems, project dashboards, and operations consulting for small to mid-sized businesses in Frederick, Maryland.",
  icons: {
    icon: "/favicon.ico",},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}