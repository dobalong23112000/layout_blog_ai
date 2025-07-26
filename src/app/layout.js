// app/layout.tsx
import "./globals.css";
import Footer from "../components/Footer";
import CategoryNav from "../components/CategoryNav";
import Link from "next/link";
import { cx } from "../utils";
import { Inter, Manrope } from "next/font/google";
import { Search } from "lucide-react";

export const metadata = {
  title: {
    default: "My Supabase Blog",
    template: "%s | My Supabase Blog",
  },
  description: "A fast, SEO-optimized blog built with Next.js and Supabase.",
  openGraph: {
    title: "My Supabase Blog",
    description: "A fast, SEO-optimized blog built with Next.js and Supabase.",
    type: "website",
    locale: "en_US",
    siteName: "My Supabase Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Supabase Blog",
    description: "A fast, SEO-optimized blog built with Next.js and Supabase.",
  },
  metadataBase: new URL("https://yoursite.com"),
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark text-base"
        )}
      >
        <header className="py-4 px-4 md:px-6 border-b shadow-sm bg-primary text-white">
          <nav className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8F9FA] to-[#A8FF78] text-2xl md:text-3xl font-bold"
            >
              PureVital
            </Link>

            {/* Navigation Links */}
            <CategoryNav />

            {/* Search */}
            <div className="relative w-full md:max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300 focus:bg-gray-50 transition"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </nav>
        </header>

        <main className="flex-grow px-4 md:px-6 max-w-7xl mx-auto w-full py-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
