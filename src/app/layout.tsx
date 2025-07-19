import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Tanmay Tripathi - The Digital Brain",
  description:
    "Exploring the digital mind of Tanmay Tripathi, a developer's portfolio designed as a living neural network.",
  keywords: [
    "Tanmay Tripathi",
    "Software Engineer",
    "C++",
    "Embedded Systems",
    "VIT Vellore",
    "Portfolio",
    "AI",
    "Digital Brain",
    "Neural Network",
  ],
  authors: [{ name: "Tanmay Tripathi" }],
  creator: "Tanmay Tripathi",
  openGraph: {
    title: "Tanmay Tripathi - The Digital Brain",
    description:
      "Exploring the digital mind of Tanmay Tripathi, a developer's portfolio designed as a living neural network.",
    url: "https://tanmay-tripathi.vercel.app",
    siteName: "Tanmay Tripathi's Digital Brain",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Tripathi - The Digital Brain",
    description:
      "Exploring the digital mind of Tanmay Tripathi, a developer's portfolio designed as a living neural network.",
    creator: "@tanmaytrip59",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="/portf.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
