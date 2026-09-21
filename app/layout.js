import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig, siteUrl } from "@/lib/site";

// 1. Setup the Google Font for your body text
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// 2. Setup the local Clash Display font for your massive headers
const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2", // Make sure this matches your exact file name!
  variable: "--font-clash-display",
  weight: "200 700", 
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "David Okpe",
    "full-stack developer",
    "software developer",
    "business systems developer",
    "e-commerce developer",
    "MVP developer",
    "SaaS developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "David Okpe, full-stack developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: siteConfig.title,
      mainEntity: { "@id": `${siteUrl}/#david-okpe` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#david-okpe`,
      name: siteConfig.name,
      jobTitle: "Full-Stack Developer",
      url: siteUrl,
      image: `${siteUrl}/dave-portrait.png`,
      description: siteConfig.description,
      email: siteConfig.email,
      sameAs: siteConfig.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteConfig.name,
      url: siteUrl,
      description: siteConfig.description,
      publisher: { "@id": `${siteUrl}/#david-okpe` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable} ${spaceGrotesk.variable} antialiased bg-[#0A0A0A] text-[#FAFAFA]`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}