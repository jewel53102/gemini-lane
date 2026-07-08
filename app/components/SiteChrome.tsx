"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import LocalBusinessSchema from "./LocalBusinessSchema";

// Routes that should render as a fully independent page — no Gemini Lane
// nav, footer, or business schema. Add new "standalone" routes here.
const STANDALONE_ROUTES = ["/portfolio"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isStandalone) {
    return <>{children}</>;
  }

  return (
    <>
      <LocalBusinessSchema />
      <Header />
      {children}
      <Footer />
    </>
  );
}
