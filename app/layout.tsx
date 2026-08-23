import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Abdur Rehman | AI & Machine Learning Portfolio",
    template: "%s | Abdur Rehman",
  },

  description:
    "Portfolio of Abdur Rehman, a computer engineer building machine-learning, deep-learning, computer-vision and web applications.",

  keywords: [
    "Abdur Rehman",
    "Computer Engineer",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Python",
    "TensorFlow",
    "Flask",
    "Next.js",
  ],

  authors: [
    {
      name: "Abdur Rehman",
    },
  ],

  creator: "Abdur Rehman",

  openGraph: {
    title:
      "Abdur Rehman | AI & Machine Learning Portfolio",

    description:
      "Computer engineer building practical AI, machine-learning and computer-vision applications.",

    type: "website",
    locale: "en_US",
    siteName: "Abdur Rehman Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Abdur Rehman | AI & Machine Learning Portfolio",

    description:
      "Computer engineer building practical AI and machine-learning applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}