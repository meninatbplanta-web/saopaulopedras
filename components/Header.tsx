import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900 text-white shadow-lg border-b-4 border-amber-600">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-amber-500 uppercase">São Paulo</span>
            <span className="text-xl font-light tracking-widest uppercase -mt-1">Pedras</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-amber-500 transition-colors font-medium">Início</Link>
            <Link to="/produtos" className="hover:text-amber-500 transition-colors font-medium">Nossas Pedras</Link>
            <Link to="/galeria" className="hover:text-amber-500 transition-colors font-medium">Galeria de Obras</Link>
            <Link to="/contato" className="hover:text-amber-500 transition-colors font-medium">Contato</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`https://wa.me/5511999999999`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-bold transition-transform hover:scale-105"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-stone-800 p-4 absolute w-full shadow-xl">
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-stone-700 hover:text-amber-500">Início</Link>
            <Link to="/produtos" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-stone-700 hover:text-amber-500">Nossas Pedras</Link>
            <Link to="/galeria" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-stone-700 hover:text-amber-500">Galeria de Obras</Link>
            <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="block py-2 border-b border-stone-700 hover:text-amber-500">Contato</Link>
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="flex items-center gap-2 text-amber-500 font-bold mt-2"
            >
              <Phone size={18} /> {PHONE_NUMBER}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;