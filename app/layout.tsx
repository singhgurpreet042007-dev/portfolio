import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Gurpreet Singh | AI & DS Portfolio",
  description:
    "Portfolio of Gurpreet Singh, a B.Tech student in Artificial Intelligence & Data Science building full-stack, Java, and AI-powered projects.",
  keywords: [
    "Gurpreet Singh",
    "portfolio",
    "AI and DS",
    "full stack",
    "React",
    "Node.js",
    "Java",
    "student developer",
  ],
  authors: [{ name: "Gurpreet Singh" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    title: "Gurpreet Singh | AI & DS Portfolio",
    description:
      "B.Tech AI & DS student showcasing full-stack, Java, and AI-powered academic projects.",
    siteName: "Gurpreet Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gurpreet Singh | AI & DS Portfolio",
    description:
      "B.Tech AI & DS student showcasing full-stack, Java, and AI-powered academic projects.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
