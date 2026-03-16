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
  title: "StepOne Support",
  description:
    "Official support page for the StepOne nutrition and healthy lifestyle app.",
  metadataBase:
    typeof window === "undefined"
      ? new URL("https://stepone-support.vercel.app")
      : undefined,
  openGraph: {
    title: "StepOne Support",
    description:
      "Get support for the StepOne nutrition and healthy lifestyle app.",
    url: "https://stepone-support.vercel.app/support",
    siteName: "StepOne Support",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
