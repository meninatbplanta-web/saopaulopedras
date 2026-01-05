import React from 'react';
import { ArrowRight, CheckCircle, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, SERVICES } from '../constants';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1015/1920/1080?grayscale&blur=2" 
            alt="Fundo de pedras decorativas" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2 block">Desde 2000 em São Paulo</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Pedras Decorativas e <br/>
              <span className="text-amber-500">Muros de Arrimo</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8 max-w-2xl">
              Fornecimento e mão de obra especializada em pedras naturais. 
              Transforme sua obra com a solidez e beleza da Pedra Madeira, Miracema e Paralelepípedos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/produtos" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-center transition-all flex items-center justify-center gap-2">
                Ver Catálogo de Pedras <ArrowRight size={20} />
              </Link>
              <Link to="/contato" className="bg-transparent border-2 border-white hover:bg-white hover:text-stone-900 text-white px-8 py-4 rounded-lg font-bold text-center transition-all">
                Orçamento Gratuito
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-stone-100 border-b border-stone-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-stone-900">Entrega Própria</h3>
                <p className="text-sm text-stone-600">Frota própria para todo estado de SP</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-bold text-stone-900">Pedras Selecionadas</h3>
                <p className="text-sm text-stone-600">Controle rigoroso de qualidade</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-stone-900">Mão de Obra</h3>
                <p className="text-sm text-stone-600">Equipes experientes em colocação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Nossas Pedras Mais Vendidas</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Trabalhamos com uma grande variedade de pedras naturais para revestimentos, pisos e paisagismo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {PRODUCTS.slice(0, 3).map((product) => (
              <div key={product.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow border border-stone-100">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={`Comprar ${product.name} em São Paulo`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Em Destaque
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{product.name}</h3>
                  <p className="text-stone-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                  <Link to="/produtos" className="text-amber-600 font-bold hover:text-amber-800 inline-flex items-center gap-1">
                    Saiba Mais <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/produtos" className="inline-block border-2 border-stone-900 text-stone-900 px-8 py-3 rounded-lg font-bold hover:bg-stone-900 hover:text-white transition-colors">
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Text Block & FAQ */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* SEO Content */}
            <article className="prose prose-stone lg:prose-lg">
              <h2 className="text-3xl font-bold text-stone-900 mb-6">Por que escolher a São Paulo Pedras?</h2>
              <p>
                A <strong>São Paulo Pedras</strong> se destaca no mercado de pedras decorativas pela excelência no atendimento e qualidade superior de seus materiais. 
                Seja para revestir uma fachada com <em>Pedra Madeira</em> ou pavimentar uma via com <em>Paralelepípedos</em>, 
                nossa empresa oferece a solução completa: venda da pedra e mão de obra especializada.
              </p>
              <h3 className="text-xl font-bold text-stone-800 mt-6 mb-3">Especialistas em Muros de Arrimo</h3>
              <p>
                Executamos <strong>muros de arrimo de pedra</strong> em todo o estado. Esta técnica milenar garante segurança e drenagem 
                para o seu terreno, além de um acabamento estético insuperável que valoriza o imóvel. Utilizamos pedras brutas selecionadas 
                e equipe própria.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-stone-700">
                <li>Pedra Madeira para fachadas imponentes.</li>
                <li>Pedra Miracema para calçadas duráveis e antiderrapantes.</li>
                <li>Filete de Canjiquinha para decoração interna e lareiras.</li>
                <li>Seixos de rio para paisagismo e jardins.</li>
              </ul>
            </article>

            {/* FAQ */}
            <div className="sticky top-24">
              <FAQ />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-stone-400">Além da venda, oferecemos execução completa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-stone-800 p-8 rounded-xl border border-stone-700 hover:border-amber-600 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-amber-500">{service.title}</h3>
                <p className="text-stone-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;