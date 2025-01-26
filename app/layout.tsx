import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const nunito = Nunito({
  variable: "--font-Nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlanIt",
  description: "An app to manage your tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${nunito.variable} antialiased`}>
        <Navbar />
        {children}
        {/* {children} */}
      </body>
    </html>
  );
}
