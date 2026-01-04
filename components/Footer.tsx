import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-16 pb-8 border-t border-stone-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 border-b border-amber-600 inline-block pb-1">São Paulo Pedras</h3>
            <p className="text-sm leading-relaxed mb-4">
              Há mais de 20 anos transformando ambientes com a beleza das pedras naturais. 
              Especialistas em pedras decorativas, pavimentação ecológica com paralelepípedos 
              e construção de muros de arrimo de alta resistência.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/produtos" className="hover:text-white transition-colors">Pedra Madeira</a></li>
              <li><a href="#/produtos" className="hover:text-white transition-colors">Pedra Miracema</a></li>
              <li><a href="#/produtos" className="hover:text-white transition-colors">Paralelepípedo</a></li>
              <li><a href="#/produtos" className="hover:text-white transition-colors">Canjiquinha</a></li>
              <li><a href="#/galeria" className="hover:text-white transition-colors">Muros de Arrimo</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Atendimento</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-600 shrink-0" size={18} />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-600 shrink-0" size={18} />
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-600 shrink-0" size={18} />
                <span>contato@saopaulopedras.com.br</span>
              </li>
            </ul>
          </div>

          {/* SEO Tags (Visible but subtle) */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Área de Atuação</h3>
            <div className="flex flex-wrap gap-2">
              {['São Paulo', 'Campinas', 'Sorocaba', 'Jundiaí', 'Atibaia', 'Bragança Paulista', 'Cotia', 'Barueri'].map((city) => (
                <span key={city} className="bg-stone-800 px-2 py-1 text-xs rounded text-stone-500 border border-stone-700">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 mt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} São Paulo Pedras. Todos os direitos reservados. Especialistas em Pedras Decorativas.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;