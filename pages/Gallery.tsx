import React from 'react';

const IMAGES = [
  { url: 'https://picsum.photos/id/1035/800/600', alt: 'Muro de Arrimo de Pedra Bruta em Cotia SP', title: 'Muro de Arrimo' },
  { url: 'https://picsum.photos/id/1036/800/600', alt: 'Calçamento de Paralelepípedo em Condomínio Fechado', title: 'Pavimentação' },
  { url: 'https://picsum.photos/id/1037/800/600', alt: 'Fachada revestida com Pedra Madeira Amarela', title: 'Revestimento Fachada' },
  { url: 'https://picsum.photos/id/1038/800/600', alt: 'Área de Piscina com Pedra São Tomé e Filete', title: 'Área de Lazer' },
  { url: 'https://picsum.photos/id/1039/800/600', alt: 'Caminho de jardim com Seixos e pisantes de pedra', title: 'Paisagismo' },
  { url: 'https://picsum.photos/id/1040/800/600', alt: 'Parede interna decorada com Canjiquinha Branca', title: 'Decoração Interna' },
  { url: 'https://picsum.photos/id/1041/800/600', alt: 'Rampa de garagem com Pedra Miracema Serrada', title: 'Entrada Garagem' },
  { url: 'https://picsum.photos/id/1042/800/600', alt: 'Cascata artificial de pedras naturais', title: 'Lagos e Cascatas' },
];

const VIDEOS = [
  { id: 'video1', title: 'Como assentar Pedra Madeira - Passo a Passo', placeholder: 'https://picsum.photos/id/10/800/450' },
  { id: 'video2', title: 'Muro de Arrimo: Antes e Depois', placeholder: 'https://picsum.photos/id/11/800/450' },
];

const Gallery: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="bg-stone-100 py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Nossas Obras</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Confira a qualidade do nosso acabamento. Imagens reais de obras executadas pela São Paulo Pedras.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {IMAGES.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg cursor-pointer h-64">
              <img 
                src={img.url} 
                alt={img.alt} 
                title={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                <span className="text-white font-bold">{img.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section for YouTube SEO */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 border-l-4 border-amber-600 pl-4">Vídeos de Obras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEOS.map((video) => (
              <div key={video.id} className="bg-stone-900 rounded-xl overflow-hidden shadow-xl">
                <div className="relative aspect-video">
                  <img src={video.placeholder} alt={video.title} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg">{video.title}</h3>
                  <p className="text-stone-400 text-sm mt-1">Inscreva-se em nosso canal para mais dicas de assentamento.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;