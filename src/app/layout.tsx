import type { Metadata } from "next";
import glancyr from "./font/glancyr";

import "./globals.css";
import { Footer } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";

export const metadata: Metadata = {
  title: "Kingdom Millionaires Convention",
  description: "Rich In Christ & Rich In Cash.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${glancyr.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
