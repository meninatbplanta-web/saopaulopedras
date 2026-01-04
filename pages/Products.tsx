import React from 'react';
import { PRODUCTS } from '../constants';
import { Tag } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="bg-stone-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de Pedras</h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            A maior variedade de pedras decorativas de São Paulo. Do rústico ao sofisticado, encontre a pedra ideal para o seu projeto.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <article key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-stone-100 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.imageUrl} 
                  alt={`Venda e colocação de ${product.name}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                  <span className="text-white text-sm font-medium bg-amber-600 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-stone-900 mb-3">{product.name}</h2>
                <p className="text-stone-600 mb-6 leading-relaxed flex-grow">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Tag size={12} /> Ideal para:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.seoKeywords.map((kw, idx) => (
                      <span key={idx} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded border border-stone-200">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full block text-center bg-stone-900 text-white py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors"
                >
                  Solicitar Cotação
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Text for Ranking */}
        <div className="mt-24 p-8 bg-stone-50 rounded-2xl border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Pedras Decorativas em São Paulo e Região</h2>
          <p className="text-stone-600 mb-4">
            A São Paulo Pedras oferece atendimento personalizado para arquitetos, engenheiros e proprietários que buscam qualidade. 
            Nossa <strong>Pedra Madeira</strong> é extraída das melhores pedreiras, garantindo cores vivas e faces planas para um assentamento perfeito.
          </p>
          <p className="text-stone-600">
            Para áreas externas, o <strong>Paralelepípedo</strong> continua sendo a melhor opção custo-benefício, oferecendo durabilidade secular e permeabilidade ao solo, 
            evitando alagamentos. Já para áreas de piscina, indicamos a <strong>Pedra Mineira ou São Tomé</strong>, que são térmicas e antiderrapantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;