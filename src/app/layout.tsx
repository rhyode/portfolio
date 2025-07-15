import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanmay Tripathi - Software Engineer & EEE Student",
  description:
    "Portfolio of Tanmay Tripathi - Self-driven EEE student at VIT Vellore with experience in C++, embedded systems, and cloud computing.",
  keywords: [
    "Tanmay Tripathi",
    "Software Engineer",
    "C++",
    "Embedded Systems",
    "VIT Vellore",
    "Portfolio",
  ],
  authors: [{ name: "Tanmay Tripathi" }],
  creator: "Tanmay Tripathi",
  openGraph: {
    title: "Tanmay Tripathi - Software Engineer & EEE Student",
    description:
      "Portfolio of Tanmay Tripathi - Self-driven EEE student at VIT Vellore with experience in C++, embedded systems, and cloud computing.",
    url: "https://tanmay-tripathi.vercel.app",
    siteName: "Tanmay Tripathi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Tripathi - Software Engineer & EEE Student",
    description:
      "Portfolio of Tanmay Tripathi - Self-driven EEE student at VIT Vellore with experience in C++, embedded systems, and cloud computing.",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111827" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
