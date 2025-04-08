import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function ImageCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="p-1 h-[400px] relative">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Imagem 1"
                fill
                className="rounded-lg object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6 rounded-lg">
                <h3 className="text-white text-2xl font-bold">Produtos de Qualidade</h3>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1 h-[400px] relative">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Imagem 2"
                fill
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6 rounded-lg">
                <h3 className="text-white text-2xl font-bold">Materiais Elétricos</h3>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1 h-[400px] relative">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Imagem 3"
                fill
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6 rounded-lg">
                <h3 className="text-white text-2xl font-bold">Soluções Completas</h3>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="absolute inset-y-0 left-4 flex items-center">
          <CarouselPrevious className="relative" />
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center">
          <CarouselNext className="relative" />
        </div>
      </Carousel>
    </div>
  )
}
