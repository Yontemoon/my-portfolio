import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "contact", "/projects"],
      disallow: [],
    },
    sitemap: `https://monteyoon.com/sitemap.xml`,
  };
}
