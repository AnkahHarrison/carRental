import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "lesson on next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* nav bar */}
        <Navbar />
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
