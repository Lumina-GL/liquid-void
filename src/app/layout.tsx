import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liquid-void.sujitkoji.com"), 
  title: {
    default: "Liquid Void | GPGPU Morphology by Sujit Koji",
    template: "%s | Sujit Koji",
  },
  description: "Experience Liquid Void: An immersive GPGPU fluid simulation and WebGL storytelling journey. Crafted with high-fidelity 3D shaders, React Three Fiber, and Next.js.",
  keywords: [
    "Liquid Void", 
    "Sujit Koji", 
    "@sujitkoji",
    "WebGL Portfolio", 
    "Three.js Shader", 
    "Creative Frontend Developer India", 
    "Bhopal Developer",
    "GPGPU Simulation",
    "React Three Fiber Experience", 
    "Awwwards Aesthetics"
  ],
  authors: [{ name: "Sujit Koji", url: "https://sujitkoji.com" }],
  creator: "Sujit Koji",
  category: "technology",
  
  alternates: {
    canonical: "https://liquid-void.sujitkoji.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://liquid-void.sujitkoji.com",
    title: "Liquid Void | GPGPU Morphology",
    description: "An immersive generative fluid simulation and WebGL experiment by Sujit Koji.",
    siteName: "Liquid Void by Sujit Koji",
    images: [
      {
        url: "/og-img.png", 
        width: 1200,
        height: 630,
        alt: "Liquid Void WebGL Experience Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Liquid Void | GPGPU Morphology",
    description: "Immersive GPGPU fluid simulation and WebGL journey by @sujitkoji.",
    creator: "@sujitkoji", 
    images: ["/og-img.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, 
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: [
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ]
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VisualArtsEvent", 
              "name": "Liquid Void Digital Experience",
              "description": "A high-fidelity WebGL fluid simulation and generative art journey.",
              "image": "https://liquid-void.sujitkoji.com/og-img.png",
              "organizer": {
                "@type": "Person",
                "name": "Sujit Koji",
                "url": "https://sujitkoji.com"
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-black text-white selection:bg-[#ff0055] selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}