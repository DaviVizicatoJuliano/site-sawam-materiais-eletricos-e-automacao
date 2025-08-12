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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8640497378688!2d-47.35256172379002!3d-22.733293931695336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bbe166e412f%3A0x11cffd91428cee9d!2sSawam%20Materiais%20El%C3%A9tricos%20e%20Automa%C3%A7%C3%A3o%20industrial%20LTDA-ME!5e0!3m2!1spt-BR!2sbr!4v1755022762159!5m2!1spt-BR!2sbr"
      width="600" 
      height="450" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  )
}
