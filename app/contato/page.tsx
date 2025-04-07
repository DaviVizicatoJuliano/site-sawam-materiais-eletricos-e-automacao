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
        <h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99157.1855552122!2d-47.43748500714959!3d-22.543509904179466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89a2e18c9b78f%3A0x64128060bbd5a5e4!2sSawam!5e0!3m2!1spt-PT!2sbr!4v1744069218913!5m2!1spt-PT!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
