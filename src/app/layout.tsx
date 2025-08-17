import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const firacode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parthiv Gandhi",
  description: "Parthiv Gandhi's Developer Portfolio",
  keywords:
    "Portfolio, Developer, Software Engineer, Full Stack, Parthiv Gandhi",
  authors: {
    name: "Parthiv Gandhi",
    url: "https://parthiv-portfolio-nine.vercel.app/",
  },

  openGraph: {
    title: "Parthiv Gandhi",
    description: "Parthiv Gandhi's Developer Portfolio",
    url: "https://parthiv-portfolio-nine.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://parthiv-portfolio-nine.vercel.app/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Pro-folio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parthiv Gandhi",
    description: "Parthiv Gandhi's Developer Portfolio",
    images: ["https://parthiv-portfolio-nine.vercel.app/images/og-image.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-baseColor">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Portfolio, Developer, Software Engineer, Full Stack, Parthiv Gandhi"
        />
        <meta name="author" content="Parthiv Gandhi" />
        <meta property="og:title" content="Parthiv Gandhi" />
        <meta
          property="og:description"
          content="Parthiv Gandhi's Developer Portfolio"
        />
        <meta
          property="og:url"
          content="https://parthiv-portfolio-nine.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://parthiv-portfolio-nine.vercel.app/images/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pro-folio" />
        <meta
          name="twitter:description"
          content="Parthiv Gandhi's Developer Portfolio"
        />
        <meta
          name="twitter:image"
          content="https://parthiv-portfolio-nine.vercel.app/images/og-image.png"
        />
        <link
          rel="canonical"
          href="https://parthiv-portfolio-nine.vercel.app/"
        />
        <link rel="icon" href="/icon.svg" />
      </head>

      {/* handling different componets for mobile and web/ */}
      <body className={`${firacode.className}`}>
        {/* Web */}
        <div className="hidden md:block bg-primaryLightNavyBlue m-[56px] rounded-lg border border-line">
          <Header />
          <div className="flex flex-col web-content site-content overflow-y-auto">
            {children}
          </div>
          <Footer />
        </div>

        {/* Mobile */}
        <div className="block flex flex-col h-screen md:hidden">
          <Header />
          <div className="flex-grow mobile-content flex flex-col">
            {children}
          </div>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
