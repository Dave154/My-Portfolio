import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

import { Montserrat, Roboto } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata = {
  title: "David.O",
  description: "Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} font-montserrat
        `}
      >
        <Header/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
