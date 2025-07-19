import "./globals.css";
import Footer from "../components/Footer"
import Link from "next/link";
import { cx } from "../utils";
import { Inter, Manrope } from "next/font/google";
export const metadata = {
  title: {
    default: "My Supabase Blog",
    template: "%s | My Supabase Blog"
  },
  description: "A fast, SEO-optimized blog built with Next.js and Supabase.",
  openGraph: {
    title: "My Supabase Blog",
    description: "A fast, SEO-optimized blog built with Next.js and Supabase.",
    type: "website",
    locale: "en_US",
    siteName: "My Supabase Blog"
  },
  twitter: {
    card: "summary_large_image",
    title: "My Supabase Blog",
    description: "A fast, SEO-optimized blog built with Next.js and Supabase."
  },
  metadataBase: new URL("https://yoursite.com")
}
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
      <body className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}>
        <header className="py-6 px-4 border-b shadow-sm bg-primary text-white">
          <nav className="max-w-5xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold uppercase">PureVital</Link>
            <div className="space-x-4">
              <Link href="/blog" className="text-sm font-medium hover:underline">Blog</Link>
              <Link href="/about" className="text-sm font-medium hover:underline">About</Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow px-4 max-w-5xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
