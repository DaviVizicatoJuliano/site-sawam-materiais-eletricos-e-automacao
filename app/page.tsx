import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Zap, Shield, PenToolIcon as Tool } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

// Produtos em destaque selecionados do catálogo
const featuredProducts = [
  {
    id: 9,
    name: "Inversor de Frequência",
    image: "assets/inversor.png",
    description: "Inversor de frequência para controle de motores.",
  },
  {
    id: 37,
    name: "Lâmpadas BA",
    image: "assets/lampada_BA.png",
    description: "Lâmpadas BA de alta eficiência energética.",
  },
  {
    id: 58,
    name: "Disjuntor Caixa Moldada FM1",
    image: "assets/disjuntores-em-caixa-moldada-01.jpg",
    description: "Disjuntor em caixa moldada FM1 para proteção de circuitos.",
  },
  {
    id: 13,
    name: "Botoeiras HB2-BX",
    image: "assets/botoeiras_hbx.png",
    description: "Botoeiras HB2-BX para controle de máquinas.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Soluções em <span className="text-red-600">Materiais Elétricos</span> e Automação Industrial
              </h1>
              <p className="text-lg mb-8">
                Fornecemos produtos de alta qualidade para projetos elétricos e de automação industrial, com as melhores
                marcas do mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/produtos">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Ver Produtos</Button>
                </Link>
                <Link href="/contato">
                  <a href="https://wa.me/19978114605" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white text-black hover:bg-white hover:text-red">
                      Solicitar Orçamento
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="assets/contator_weg.png"
                alt="Inversor de Frequencia"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <ImageCarousel />

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher a <span className="text-red-600">Sawam</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle size={48} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualidade Garantida</h3>
              <p>Trabalhamos apenas com as melhores marcas e produtos certificados.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Zap size={48} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
              <p>Entregamos seus produtos no menor prazo possível.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Shield size={48} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Segurança</h3>
              <p>Produtos que atendem às normas de segurança e qualidade.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Tool size={48} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Suporte Técnico</h3>
              <p>Equipe especializada para auxiliar na escolha dos produtos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Produtos em Destaque</h2>
            <Link href="/produtos" className="flex items-center text-red-600 hover:text-red-700">
              Ver todos <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <Link href="/produtos">
                    <Button variant="outline" className="border-white text-black hover:bg-white hover:text-red">
                      Ver produtos
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de um orçamento personalizado?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para obter um orçamento personalizado para o seu projeto.
          </p>
          <a href="https://wa.me/19978114605" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-red-600 hover:bg-gray-100">Solicitar Orçamento</Button>
          </a>
        </div>
      </section>
    </div>
  )
}

