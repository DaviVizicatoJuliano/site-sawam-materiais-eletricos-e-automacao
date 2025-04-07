"use client"

import Link from "next/link"
import Image from "next/image"

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/19978114605"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <div className="w-16 h-16 rounded-full shadow-lg overflow-hidden">
        <Image
          src="/icons/icon_whatsapp_transparent.png"
          alt="WhatsApp"
          width={64}
          height={64}
          className="w-12 h-12 object-cover"
        />
      </div>
    </Link>
  )
}

