import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteUrl } from "@/lib/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "XS1 Technologies | Technology Solutions for a Smarter Business Future",
    template: "%s | XS1 Technologies",
  },
  description:
    "XS1 Technologies helps businesses modernise operations through business technology, digital transformation, software development, e-commerce, and training.",
  openGraph: {
    type: "website",
    siteName: "XS1 Technologies",
    title: "XS1 Technologies",
    description:
      "Practical technology solutions for a smarter business future.",
  },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
