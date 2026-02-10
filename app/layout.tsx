import type { Metadata } from "next";
import { Righteous, Special_Elite, Space_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--ff-righteous",
});

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--ff-special-elite",
});

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--ff-terminal",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--ff-playfair",
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Your Agents Have Secrets: Use SHUNTLY",
  description:
    "A lightweight wiretap for your LLM API traffic. One line of code, total visibility. Python & TypeScript.",
  openGraph: {
    title: "Your Agents Have Secrets: Use SHUNTLY",
    description:
      "A lightweight wiretap for your LLM API traffic. One line of code, total visibility. Python & TypeScript.",
    url: "https://shuntly.ai",
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
        className={`${righteous.variable} ${specialElite.variable} ${spaceMono.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
