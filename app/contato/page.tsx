import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import GoogleMap from "@/components/google-map"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Entre em Contato</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="text-red-600 mr-4 mt-1" />
              <div>
                <h3 className="font-bold">Endereço</h3>
                <p className="text-lg">Carmine Feola, 1099 - Catharina Zanaga</p>
                <p className="text-lg">Americana - SP</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="text-red-600 mr-4 mt-1" />
              <div>
                <h3 className="font-bold">Telefone</h3>
                <p className="text-lg">(19) 3406-2711</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="text-red-600 mr-4 mt-1" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-lg">contato@sawam.com.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Horário de Funcionamento</h2>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Segunda a Sexta:</span>
              <span className="text-lg">8h às 18h</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Sábado:</span>
              <span className="text-lg">8h às 12h</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Domingo:</span>
              <span className="text-lg">Fechado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
     <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 col-span-2">Nossa Localização</h2>
        <GoogleMap />
      </div>
    </div>
  )
}
