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
      <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src="/icons/icon_whatsapp_transparent.png"
          alt="WhatsApp"
          width={40}  // Ajuste a largura da imagem
          height={40} // Ajuste a altura da imagem
          className="w-full h-full object-cover" // Use object-cover para preencher o espaço
        />
      </div>
    </Link>
  )
}
