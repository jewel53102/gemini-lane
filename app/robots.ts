import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/free-business-analysis/results",
          "/downloads/",
          "/portal-86c7a4a1ee2f/",
        ],
      },
    ],
    sitemap: "https://www.gemini-lane.com/sitemap.xml",
  };
}
