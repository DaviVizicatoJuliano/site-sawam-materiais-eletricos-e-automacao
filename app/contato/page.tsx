import { Mail, MapPin, Phone } from "lucide-react"

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

      {/* Google Maps */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Nossas Localizações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8639165976797!2d-47.35256708928871!3d-22.733298879291628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bbe166e412f%3A0x11cffd91428cee9d!2sSawam%20Materiais%20El%C3%A9tricos%20e%20Automa%C3%A7%C3%A3o%20industrial%20LTDA-ME!5e0!3m2!1spt-PT!2sbr!4v1744071046503!5m2!12"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8639165976797!2d-47.35256708928871!3d-22.733298879291628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89bbe166e412f%3A0x11cffd91428cee9d!2sSawam%20Materiais%20El%C3%A9tricos%20e%20Automa%C3%A7%C3%A3o%20industrial%20LTDA-ME!5e0!3m2!1spt-PT!2sbr!4v1744071046503!5m2!13"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
