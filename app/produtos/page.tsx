"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

// Dados de exemplo para produtos
const products = [
  {
    id: 1,
    name: 'Botão de Emergência',
    image: 'assets/botao_emergencia.png',
    category: 'Botões',
    description: 'Botão de emergência para desligamento rápido.',
  },
  {
    id: 2,
    name: 'Contator WEG',
    image: 'assets/contator_weg.png',
    category: 'Contatores',
    description: 'Contator WEG para acionamento de motores.',
  },
  {
    id: 3,
    name: 'Interruptor de Energia',
    image: 'assets/interruptor.png',
    category: 'Interruptor',
    description: 'Interruptor de energia para controle de circuitos.',
  },
  {
    id: 4,
    name: 'Cabo Elétrico',
    image: 'assets/cabo_eletrico.png',
    category: 'Fios',
    description: 'Cabo elétrico para diversas aplicações.',
  },
  {
    id: 5,
    name: 'Tomada de Energia',
    image: 'assets/tomada.png',
    category: 'Tomada',
    description: 'Tomada de energia para uso geral.',
  },
  {
    id: 6,
    name: 'Lâmpada de led Pera',
    image: 'assets/lampada_pera.png',
    category: 'Lâmpada',
    description: 'Lâmpada de LED tipo pera.',
  },
  {
    id: 7,
    name: 'Lâmpada de led Bulbo',
    image: 'assets/lampada_bulbo.png',
    category: 'Lâmpada',
    description: 'Lâmpada de LED tipo bulbo.',
  },
  {
    id: 8,
    name: 'Lâmpada de led Tubular',
    image: 'assets/lampada_tubular_led.png',
    category: 'Lâmpada',
    description: 'Lâmpada de LED tubular.',
  },
  {
    id: 9,
    name: 'Inversor de Frequência',
    image: 'assets/inversor.png',
    category: 'Inversor',
    description: 'Inversor de frequência para controle de motores.',
  },
  {
    id: 10,
    name: 'Born Alavanca',
    image: 'assets/born alavanca.png',
    category: 'Born',
    description: 'Born alavanca para conexões elétricas.',
  },
  {
    id: 11,
    name: 'Born BST',
    image: 'assets/born bst.png',
    category: 'Born',
    description: 'Born BST para conexões elétricas.',
  },
  {
    id: 12,
    name: 'Born LTU',
    image: 'assets/born lut.png',
    category: 'Born',
    description: 'Born LTU para conexões elétricas.',
  },
  {
    id: 13,
    name: 'Botoeiras HB2-BX',
    image: 'assets/botoeiras_hbx.png',
    category: 'Botoeiras',
    description: 'Botoeiras HB2-BX para controle de máquinas.',
  },
  {
    id: 14,
    name: 'Botoeiras Vazias HJ9',
    image: 'assets/botoeiras_vazias.png',
    category: 'Botoeiras',
    description: 'Botoeiras vazias HJ9.',
  },
  {
    id: 15,
    name: 'Pedaleiras Elétricas PEB',
    image: 'assets/pedaleira.png',
    category: 'Pedaleiras',
    description: 'Pedaleiras elétricas para controle de máquinas.',
  },
  {
    id: 16,
    name: 'Botoeiras Linha COB - 6',
    image: 'assets/botoeiras_pendentes.png',
    category: 'Botoeiras',
    description: 'Botoeiras da linha COB - 6.',
  },
  {
    id: 17,
    name: 'Botoeiras Linha COB - P',
    image: 'assets/botoeira_cob_p.png',
    category: 'Botoeiras',
    description: 'Botoeiras da linha COB - P.',
  },
  {
    id: 18,
    name: 'Botoeiras Linha COB - D',
    image: 'assets/botoeira_cob_d.png',
    category: 'Botoeiras',
    description: 'Botoeiras da linha COB - D.',
  },
  {
    id: 19,
    name: 'Sinaleiro LTE',
    image: 'assets/sinaleiro_lte.png',
    category: 'Sinaleiro',
    description: 'Sinaleiro LTE para sinalização.',
  },
  {
    id: 20,
    name: 'Sinaleiro Multifunção BLEN-1101',
    image: 'assets/Sinaleiro_1101.png',
    category: 'Sinaleiro',
    description: 'Sinaleiro multifunção BLEN-1101.',
  },
  {
    id: 21,
    name: 'Sinaleiro Multifunção BLEN-2101',
    image: 'assets/Sinaleiro_2101.png',
    category: 'Sinaleiro',
    description: 'Sinaleiro multifunção BLEN-2101.',
  },
  {
    id: 22,
    name: 'Botão de Comando HB16',
    image: 'assets/botoes_hb16.png',
    category: 'Botão de Comando',
    description: 'Botão de comando HB16.',
  },
  {
    id: 23,
    name: 'Botão de Comando HB2-E',
    image: 'assets/botoes_hb2E.png',
    category: 'Botão de Comando',
    description: 'Botão de comando HB2-E.',
  },
  {
    id: 24,
    name: 'Botão de Comando Metalica HB2-B',
    image: 'assets/metal_hb2B.png',
    category: 'Botão de Comando',
    description: 'Botão de comando metálico HB2-B.',
  },
  {
    id: 25,
    name: 'Botão de Comando Metalica HB4-B',
    image: 'assets/metal_hb2B.png',
    category: 'Botão de Comando',
    description: 'Botão de comando metálico HB4-B.',
  },
  {
    id: 26,
    name: 'Botão de Comando HB5-A',
    image: 'assets/botoes_hb5A.png',
    category: 'Botão de Comando',
    description: 'Botão de comando HB5-A.',
  },
  {
    id: 27,
    name: 'Botão de Comando HB7-E',
    image: 'assets/botoes_hb7E.png',
    category: 'Botão de Comando',
    description: 'Botão de comando HB7-E.',
  },
  {
    id: 28,
    name: 'Botão de Comando BXE',
    image: 'assets/botoes_BXE.png',
    category: 'Botão de Comando',
    description: 'Botão de comando BXE.',
  },
  {
    id: 29,
    name: 'Botão de Comando Anti Vandalismo BAV-M',
    image: 'assets/botoes_AntiVandalismoBavM.png',
    category: 'Botão de Comando',
    description: 'Botão de comando anti vandalismo BAV-M.',
  },
  {
    id: 30,
    name: 'Interruptor de Alavanca XT',
    image: 'assets/alavanca_XT.png',
    category: 'Botão de Comando',
    description: 'Interruptor de alavanca XT.',
  },
  {
    id: 31,
    name: 'Acessórios Diversos',
    image: 'assets/acessorios_diversos.png',
    category: 'Botão de Comando',
    description: 'Acessórios diversos para instalação.',
  },
  {
    id: 32,
    name: "Sinaleiros Led's HDY16-16",
    image: 'assets/sinaleiro_hdy1616.png',
    category: 'Sinaleiro',
    description: 'Sinaleiro LED HDY16-16.',
  },
  {
    id: 33,
    name: "Sinaleiros Led's HD16-22",
    image: 'assets/sinaleiro_hd1622.png',
    category: 'Sinaleiro',
    description: 'Sinaleiro LED HD16-22.',
  },
  {
    id: 34,
    name: "Sinaleiros Led's HD56-22",
    image: 'assets/sinaleiro_5622.png',
    category: 'Sinaleiro',
    description: 'Sinaleiro LED HD56-22.',
  },
  {
    id: 35,
    name: 'Sinaleiros Audio-Visual AD16-22',
    image: 'assets/sinaleiro_ad1622.png',
    category: 'Sinaleiro',
    description: 'Sinaleiro audio-visual AD16-22.',
  },
  {
    id: 36,
    name: 'Sinaleiros Tipo Olho de Boi PL-108',
    image: 'assets/sinaleiro_pl108.png',
    category: 'Sinaleiro',
    description: 'Sinaleiro tipo olho de boi PL-108.',
  },
  {
    id: 37,
    name: 'Lâmpadas BA',
    image: 'assets/lampada_BA.png',
    category: 'Lâmpada',
    description: 'Lâmpadas BA.',
  },
  {
    id: 38,
    name: 'Fonte de Alimentação Chaveada S',
    image: 'assets/fonte_s.png',
    category: 'Fonte de Alimentação',
    description: 'Fonte de alimentação chaveada S.',
  },
  {
    id: 39,
    name: 'Fonte de Alimentação Chaveada BWS',
    image: 'assets/fonte_bws.png',
    category: 'Fonte de Alimentação',
    description: 'Fonte de alimentação chaveada BWS.',
  },
  {
    id: 40,
    name: 'Fonte de Alimentação Chaveada DR',
    image: 'assets/fonte_dr.png',
    category: 'Fonte de Alimentação',
    description: 'Fonte de alimentação chaveada DR.',
  },
  {
    id: 41,
    name: 'Relé de Estado Sólido Monofásico BBSR-1',
    image: 'assets/rele_bssr1.png',
    category: 'Relês',
    description: 'Relé de estado sólido monofásico BBSR-1.',
  },
  {
    id: 42,
    name: 'Relé de Estado Sólido Monofásico BBSR-3',
    image: 'assets/rele_bdsr3.png',
    category: 'Relês',
    description: 'Relé de estado sólido monofásico BBSR-3.',
  },
  {
    id: 43,
    name: 'Relé de Estado Sólido Monofásico BDSR',
    image: 'assets/rele_bssr.png',
    category: 'Relês',
    description: 'Relé de estado sólido monofásico BDSR.',
  },
  {
    id: 44,
    name: 'Relé Temporizado BTE',
    image: 'assets/rele_BTE.jpg',
    category: 'Relês',
    description: 'Relé temporizado BTE.',
  },
  {
    id: 45,
    name: 'Relé Temporizado HHS',
    image: 'assets/rele_HHE.jpg',
    category: 'Relês',
    description: 'Relé temporizado HHS.',
  },
  {
    id: 46,
    name: 'Monitor de Tensão Trifásica BMF',
    image: 'assets/monitor_bmf.jpg',
    category: 'Relês',
    description: 'Monitor de tensão trifásica BMF.',
  },
  {
    id: 47,
    name: 'Rele de Falta HHD5 - C/D',
    image: 'assets/rele_hhd5.jpg',
    category: 'Relês',
    description: 'Rele de falta HHD5 - C/D.',
  },
  {
    id: 48,
    name: 'Rele de Falta HHD5 - B',
    image: 'assets/rele hhd5b.jpg',
    category: 'Relês',
    description: 'Rele de falta HHD5 - B.',
  },
  {
    id: 49,
    name: 'Rele de Nivel BRN3',
    image: 'assets/rele_brn3.jpg',
    category: 'Relês',
    description: 'Rele de nível BRN3.',
  },
  {
    id: 50,
    name: 'Acoplador de Relê BRA',
    image: 'assets/acoplador-a-rele-interface-01.jpg',
    category: 'Relês',
    description: 'Acoplador de relê BRA.',
  },
  {
    id: 51,
    name: 'Relê Industrial BRU-36',
    image: 'assets/acoplador-a-rele-industrial-BRU-36.jpg',
    category: 'Relês',
    description: 'Relê industrial BRU-36.',
  },
  {
    id: 52,
    name: 'Relê Modular de Interface BFR-15',
    image: 'assets/acoplador-a-rele-interface-BFR-15.jpg',
    category: 'Relês',
    description: 'Relê modular de interface BFR-15.',
  },
  {
    id: 53,
    name: 'Relê Industrial BRU-90',
    image: 'assets/rele_industrial_bru_90.jpg',
    category: 'Relês',
    description: 'Relê industrial BRU-90.',
  },
  {
    id: 54,
    name: 'Interruptor de Horário AHC-15',
    image: 'assets/interruptores-de-horarioAHC-15.jpg',
    category: 'Interruptor',
    description: 'Interruptor de horário AHC-15.',
  },
  {
    id: 55,
    name: 'Indicador de Horas BMTH3L',
    image: 'assets/totalizador BMTH3L.jpg',
    category: 'Indicadores',
    description: 'Indicador de horas BMTH3L.',
  },
  {
    id: 56,
    name: 'Indicador de Impulso BMTI3J',
    image: 'assets/totalizador_bmti3j.jpg',
    category: 'Indicadores',
    description: 'Indicador de impulso BMTI3J.',
  },
  {
    id: 57,
    name: 'Totalizador de Impulso Eletromecânico CSK6',
    image: 'assets/totalizador_CSK6.jpg',
    category: 'Indicadores',
    description: 'Totalizador de impulso eletromecânico CSK6.',
  },
  {
    id: 58,
    name: 'Disjuntor Caixa Moldada FM1',
    image: 'assets/disjuntores-em-caixa-moldada-01.jpg',
    category: 'Disjuntores',
    description: 'Disjuntor em caixa moldada FM1.',
  },
  {
    id: 59,
    name: 'Disjuntor Caixa Moldada FM 101',
    image: 'assets/disjuntores-em-caixa-moldada-fm101.jpg',
    category: 'Disjuntores',
    description: 'Disjuntor em caixa moldada FM 101.',
  },
  {
    id: 60,
    name: 'Disjuntor Caixa Moldada FM 6',
    image: 'assets/disjuntores-em-caixa-moldada-fm6.jpg',
    category: 'Disjuntores',
    description: 'Disjuntor em caixa moldada FM 6.',
  },
  {
    id: 61,
    name: 'Disjuntor de Diferencial Residual ELCB',
    image: 'assets/disjuntores-diferencial-residual-ELCB.jpg',
    category: 'Disjuntores',
    description: 'Disjuntor diferencial residual ELCB.',
  },
  {
    id: 62,
    name: 'Mini-Disjuntor BDP 63',
    image: 'assets/mini-disjuntores-bddp033.jpg',
    category: 'Disjuntores',
    description: 'Mini-disjuntor BDP 63.',
  },
  {
    id: 63,
    name: 'Mini-Disjuntor BDP 100',
    image: 'assets/mini-disjuntores-bdp100.jpg',
    category: 'Disjuntores',
    description: 'Mini-disjuntor BDP 100.',
  },
  {
    id: 64,
    name: 'Disjuntor Aberto HW1',
    image: 'assets/disjuntores-abertos-hw1.jpg',
    category: 'Disjuntores',
    description: 'Disjuntor aberto HW1.',
  },
  {
    id: 65,
    name: 'Disjuntor Aberto HW2',
    image: 'assets/disjuntores-abertos-02.jpg',
    category: 'Disjuntores',
    description: 'Disjuntor aberto HW2.',
  },
]

// Extrair categorias únicas dos produtos
const uniqueCategories = ["Todos os Produtos", ...Array.from(new Set(products.map((product) => product.category)))]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos os Produtos")
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10

  // Filtrar produtos com base na categoria e termo de pesquisa
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Todos os Produtos" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Calcular produtos para a página atual
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Calcular número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Mudar de página
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
      // Rolar para o topo da lista de produtos
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // Resetar para a primeira página quando a categoria ou pesquisa mudar
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchTerm])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nossos Produtos</h1>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Categorias</h2>
          <div className="flex flex-wrap gap-2">
            {uniqueCategories.map((category, index) => (
              <Button
                key={index}
                variant={category === selectedCategory ? "default" : "outline"}
                className={category === selectedCategory ? "bg-red-600 hover:bg-red-700" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-4 text-gray-600">
        Mostrando {currentProducts.length} de {filteredProducts.length} produtos
        {selectedCategory !== "Todos os Produtos" && ` na categoria "${selectedCategory}"`}
        {searchTerm && ` contendo "${searchTerm}"`}
      </div>

      {/* Products Grid */}
    {currentProducts.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    ) : (
      <div className="text-center py-12">
        <p className="text-xl text-gray-500">Nenhum produto encontrado</p>
      </div>
    )}


      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3"
            >
              <ChevronLeft size={16} />
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  // Mostrar primeira página, última página e páginas próximas à atual
                  return page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)
                })
                .map((page, index, array) => (
                  <React.Fragment key={page}>
                    {index > 0 && array[index - 1] !== page - 1 && (
                      <Button variant="ghost" disabled className="px-3">
                        ...
                      </Button>
                    )}
                    <Button
                      variant={currentPage === page ? "default" : "outline"}
                      className={currentPage === page ? "bg-red-600 hover:bg-red-700" : ""}
                      onClick={() => paginate(page)}
                    >
                      {page}
                    </Button>
                  </React.Fragment>
                ))}
            </div>

            <Button
              variant="outline"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

