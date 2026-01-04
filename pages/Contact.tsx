import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-stone-900 mb-12">Fale Conosco</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Telefones</h3>
                    <p className="text-stone-600">{PHONE_NUMBER}</p>
                    <p className="text-stone-600">(11) 4444-4444</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Email</h3>
                    <p className="text-stone-600">vendas@saopaulopedras.com.br</p>
                    <p className="text-stone-600">sac@saopaulopedras.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Endereço</h3>
                    <p className="text-stone-600">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Horário de Funcionamento</h3>
                    <p className="text-stone-600">Segunda a Sexta: 08:00 - 18:00</p>
                    <p className="text-stone-600">Sábado: 08:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-stone-300 w-full h-64 rounded-xl flex items-center justify-center text-stone-500 font-bold text-xl shadow-inner">
              Mapa do Google Embed
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Solicite um Orçamento</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="Seu nome" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Telefone / WhatsApp</label>
                  <input type="tel" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Cidade da Obra</label>
                  <input type="text" className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all" placeholder="Ex: Cotia" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Tipo de Pedra / Serviço</label>
                <select className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all bg-white">
                  <option>Selecione uma opção...</option>
                  <option>Pedra Madeira (Revestimento)</option>
                  <option>Paralelepípedo (Calçamento)</option>
                  <option>Muro de Arrimo</option>
                  <option>Pedra Miracema</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Mensagem</label>
                <textarea className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition-all h-32 resize-none" placeholder="Descreva sua necessidade (metragem, local, etc)"></textarea>
              </div>

              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg transition-all shadow-md hover:shadow-lg">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;