import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://liquid-void.sujitkoji.com"; 

  return {
    rules: {
      userAgent: "*",       
      allow: "/",           
      disallow: ["/api/"],  
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

