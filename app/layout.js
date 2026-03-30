import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// 1. Setup the Google Font for your body text
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// 2. Setup the local Clash Display font for your massive headers
const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2", // Make sure this matches your exact file name!
  variable: "--font-clash-display",
  weight: "200 700", // Variable fonts support a range of weights
});

export const metadata = {
  title: "Dave | Architecting Complex SaaS Ecosystems",
  description: "Specializing in multi-tenant SaaS, dynamic commerce, and intuitive design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 3. Inject the font variables into the body tag */}
      <body className={`${clashDisplay.variable} ${spaceGrotesk.variable} antialiased bg-[#0A0A0A] text-[#FAFAFA]`}>
        {children}
      </body>
    </html>
  );
}