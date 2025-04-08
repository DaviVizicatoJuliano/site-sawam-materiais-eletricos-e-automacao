"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Image src="/logo/logo_sawam.png" alt="Logo Sawam" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold text-red-600">SAWAM</span>
            <span className="hidden md:inline">Materiais Elétricos e Automação Industrial</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/produtos" className="text-white hover:text-red-500 transition-colors">
              Produtos
            </Link>
            <Link href="/contato" className="text-white hover:text-red-500 transition-colors">
              Contato
            </Link>
            <a href = "https://wa.me/19978114605"> 
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                Orçamento
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/produtos"
                className="text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/contato"
                className="text-white hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <a href = "https://wa.me/19978114605">
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full"
                >
                  Orçamento
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

