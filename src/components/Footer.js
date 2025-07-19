// components/Footer.tsx
'use client'

export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t text-center text-sm text-gray-500">
      © {new Date().getFullYear()} My Supabase Blog. All rights reserved.
    </footer>
  )
}
