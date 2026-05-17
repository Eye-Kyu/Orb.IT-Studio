import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://studiomizan.com/sitemap.xml",
    host: "https://studiomizan.com",
  };
}
