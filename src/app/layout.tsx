import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Task Master ",
  description:
    "A modern, full-stack task management application built with Next.js 15, React 19, and Supabase. Streamline workflows, collaborate efficiently, and boost productivity with an intuitive interface and powerful features.",
  keywords: [
    "task management",
    "project management",
    "team collaboration",
    "productivity",
    "Next.js",
    "React",
    "Supabase",
    "TypeScript",
    "workflow management",
    "task tracking",
    "employee management",
    "admin dashboard",
  ],
  authors: [{ name: "Abdallh El-Zorkany" }],
  creator: "Abdallh ElZorkany",
  publisher: "Abdallh Elzorkany",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taskmaster-legend.vercel.app/",
    siteName: "Task Master",
    title: "Task Master",
    description:
      "Modern task management application for teams. Create, assign, and track tasks with role-based access control and real-time updates.",
    images: [
      {
        url: "/src/app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Task Master",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Task Master",
    description:
      "Modern task management application for teams. Create, assign, and track tasks with ease.",
    images: ["/src/app/favicon.ico"],
    creator: "@AbdoElzorkany71",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  category: "productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} min-h-screen ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
