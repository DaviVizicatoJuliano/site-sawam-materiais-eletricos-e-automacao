import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: string
  name: string
  description: string
  image: string
}

export default function ProductCard({ id, name, description, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48 bg-gray-200 relative">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
            Ver Detalhes
          </Button>
          <Button className="flex-1 bg-red-600 hover:bg-red-700">Orçamento</Button>
        </div>
      </div>
    </div>
  )
}

