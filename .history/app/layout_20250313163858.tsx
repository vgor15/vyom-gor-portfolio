import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vyom Gor — Web Developer",
  description: "Focused on crafting seamless web experiences from India.",
  generator: "Next.js",
  applicationName: "Vyom Gor Portfolio",
  keywords: [
    "Vyom Gor",
    "web developer",
    "frontend developer",
    "MERN stack",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Vyom Gor — Web Developer",
    description: "Focused on crafting seamless web experiences from India.",
    url: "https://www.vyomgor.dev/", // Replace with your actual portfolio URL
    siteName: "Vyom Gor Portfolio",
    images: [
      {
        url: "https://your-portfolio-image-url.com/image.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Vyom Gor — Web Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyom Gor — Web Developer",
    description: "Focused on crafting seamless web experiences from India.",
    creator: "@your_twitter_handle", // Replace with your actual Twitter handle
    images: [
      "https://your-portfolio-image-url.com/image.png", // Replace with your actual image URL
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
