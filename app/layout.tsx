import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const monigue = localFont({
  src: "./fonts/Monigue.otf",
  variable: "--font-monigue",
  weight: "400 500 600 700 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mohmaya",
  description: "Mohmaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monigue.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
