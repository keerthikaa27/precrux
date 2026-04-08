import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://precrux.com",
      lastModified: new Date(),
    },
    {
      url: "https://precrux.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://precrux.com/contact",
      lastModified: new Date(),
    },
  ];
}