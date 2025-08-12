"use client"

import { useEffect, useState } from "react"

export default function GoogleMap() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="h-96 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        <p className="text-gray-500">Carregando mapa...</p>
      </div>
    )
  }

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.991206233765!2d-47.901596685064!3d-21.58550198569848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b92550b73a3c3b%3A0x43a13b5e4f4b1b3a!2sRua%20Carmine%20Feola%2C%201099%20-%20Jardim%20California%2C%20Americana%20-%20SP%2C%2013470-010!5e0!3m2!1spt-BR!2sbr!4v1622059318182!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Sawam Materiais Elétricos"
      />
    </div>
  )
}
