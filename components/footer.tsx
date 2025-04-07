import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">SAWAM</h3>
            <p className="mb-4">Materiais Elétricos e Automação Industrial</p>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin size={18} className="text-red-600" />
              <span>Rua Exemplo, 123 - Cidade</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Phone size={18} className="text-red-600" />
              <span>(00) 0000-0000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-red-600" />
              <span>contato@sawam.com.br</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-red-500 transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-red-500 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
            <p>Sábado: 8h às 12h</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Sawam Materiais Elétricos e Automação Industrial. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

