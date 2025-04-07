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
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Nome
                </label>
                <Input id="name" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                Assunto
              </label>
              <Input id="subject" placeholder="Assunto da mensagem" />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Mensagem
              </label>
              <Textarea id="message" placeholder="Sua mensagem" rows={5} />
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700">Enviar Mensagem</Button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div className="bg-black text-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Endereço</h3>
                  <p>Carmine Feola, 1099 - Catharina Zanaga</p>
                  <p>Americana - SP</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Telefone</h3>
                  <p>(19) 3406-2711</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-red-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>contato@sawam.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Horário de Funcionamento</h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Segunda a Sexta:</span>
                <span>8h às 18h</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sábado:</span>
                <span>8h às 12h</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Domingo:</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
        <GoogleMap />
      </div>
    </div>
  )
}

