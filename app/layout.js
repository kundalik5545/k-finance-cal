import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import HeaderPage from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "K Finance",
  description:
    "An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.",
  author: [{ name: "Kundalik Jadhav" }],
  generator: "Next.js",
  keywords: ["finance", "money"],
  referrer: "origin-when-cross-origin",
  creator: "Kundalik Jadhav",
  publisher: "Kundalik Jadhav",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        {/* header/ Navbar */}
        <HeaderPage />

        <main className="min-h-screen">{children}</main>
        <Toaster richColors />

        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💖 by Coder Jk..</p>
            <p>&copy;2024 All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
