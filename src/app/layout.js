import "./globals.css";
import Footer from "../components/Footer"

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={" bg-white text-gray-900 min-h-screen flex flex-col"}>
        <header className="py-6 px-4 border-b shadow-sm">
          <nav className="max-w-5xl mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold">My Supabase Blog</a>
            <div className="space-x-4">
              <a href="/blog" className="text-sm font-medium hover:underline">Blog</a>
              <a href="/about" className="text-sm font-medium hover:underline">About</a>
            </div>
          </nav>
        </header>
        <main className="flex-grow px-4 max-w-5xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
