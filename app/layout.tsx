// app/layout.tsx (Root Layout with Navbar & Footer)
import "@/app/globals.css";  // Use absolute path

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-4 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}