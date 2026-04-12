import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://precrux.com";

  /* ───────────── SERVICES ───────────── */
  const services = [
    "traction-accelerator",
    "authority-builder",
    "revenue-engine",
    "modular-growth", 
  ];

  /* ───────────── CASE STUDIES ───────────── */
  const caseStudies = [
    "the-net-return",
    "dariaan",
    "mover",
    "bidet",
    "chef-gourmet",
    "health-wellness",
    "wiztrek",
    "ai-professional",
  ]; // :contentReference[oaicite:0]{index=0}

  /* ───────────── BLOG POSTS ───────────── */
  const blogPosts = [
    "fashion-accelerator",
    "golf-dtc-brand",
    "bidet-dtc-brand",
    "fashion-brand",
    "top-7-fashion-startup-accelerators-in-India",
  ]; // :contentReference[oaicite:1]{index=1}

  return [
    /* ───────────── CORE PAGES ───────────── */
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/get-a-quote`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },

    /* ───────────── SERVICE DETAIL PAGES ───────────── */
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    /* ───────────── CASE STUDY DETAIL PAGES ───────────── */
    ...caseStudies.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),

    /* ───────────── BLOG DETAIL PAGES ───────────── */
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),

    /* ───────────── LEGAL (IMPORTANT FOR TRUST) ───────────── */
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}