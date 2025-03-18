// import "./globals.css";
// import { ReactNode } from "react";
// import type { Metadata } from "next";
// import { Syne } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";

// const syne = Syne({
//   subsets: ["latin"],
//   display: "block",
//   weight: ["400", "500", "600", "700", "800"],
// });

// export const metadata: Metadata = {
//   title: "Vyom Gor — Web Developer",
//   description: "Focused on crafting seamless web experiences from India.",
//   generator: "Next.js",
//   applicationName: "Vyom Gor Portfolio",
//   keywords: [
//     "Vyom Gor",
//     "web developer",
//     "frontend developer",
//     "MERN stack",
//     "JavaScript",
//     "React",
//     "Next.js",
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "portfolio",
//   ],
//   colorScheme: "dark",
//   openGraph: {
//     title: "Vyom Gor — Web Developer",
//     description: "Focused on crafting seamless web experiences from India.",
//     url: "https://www.vyomgor.dev/", // Replace with your actual portfolio URL
//     siteName: "Vyom Gor Portfolio",
//     images: [
//       {
//         url: "/public/screenshots/Screenshot 2025-03-18 125930.png", // Replace with your actual image URL
//         width: 1200,
//         height: 630,
//         alt: "Vyom Gor — Web Developer",
//       },
//     ],
//     locale: "en-US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Vyom Gor — Web Developer",
//     description: "Focused on crafting seamless web experiences from India.",
//     creator: "@vyom-gor", // Replace with your actual Twitter handle
//     images: [
//       "https://your-portfolio-image-url.com/image.png", // Replace with your actual image URL
//     ],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   category: "technology",
// };

// type RootLayoutProps = {
//   children: ReactNode;
// };

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en">
//       <body
//         className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
//       >
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
        url: "/", // Replace with actual hosted image
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
    creator: "@vyom-gor1503", // Replace with your actual Twitter handle
    images: ["https://www.vyomgor.dev/preview.png"], // Replace with actual hosted image
  },
  robots: {
    index: true,
    follow: true, // Allow link crawling
    noimageindex: false, // Allow image indexing
    googleBot: {
      index: true,
      follow: true, // Allow Googlebot to follow links
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.vyomgor.dev/", // Canonical URL
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vyom Gor",
              url: "https://www.vyomgor.dev/",
              sameAs: [
                "https://github.com/vgor15",
                "https://twitter.com/vyom-gor1503",
                "https://www.linkedin.com/in/vyom-gor/",
              ],
              jobTitle: "Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Vyom Gor Portfolio",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
