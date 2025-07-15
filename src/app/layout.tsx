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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-dark-bg text-dark-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
