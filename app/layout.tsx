// app/layout.tsx
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer"; // Add this import
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Profile App",
  description: "A simple profile website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>{" "}
        {/* Flex-grow ensures content takes available space */}
        <Footer />
      </body>
    </html>
  );
}
