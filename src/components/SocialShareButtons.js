'use client'

import React, { useState } from 'react'
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react'


export default function SocialShareButtons({
  shareUrl,
  shareText = '',
  instagramProfileUrl = 'https://www.instagram.com/yourprofile/',
}) {
      const [copied, setCopied] = useState(false)
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
      setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-wrap gap-3">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        <Facebook className="w-4 h-4" />
        Facebook
      </a>

      {/* Twitter (X) */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        <Twitter className="w-4 h-4" />
        Twitter
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </a>

      {/* Instagram – link to profile */}
      <a
        href={instagramProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        <Instagram className="w-4 h-4" />
        Instagram
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-white px-4 py-2 rounded flex items-center gap-2"
      >
        {copied ? (
        <>
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-green-600">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700">Copy link</span>
        </>
      )}
      </button>
    </div>
  )
}
