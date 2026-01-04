import { Product, StoneType, Service } from './types';

export const PHONE_NUMBER = "(11) 99999-9999";
export const ADDRESS = "Av. Principal, 1000 - Zona Sul - São Paulo, SP";

export const PRODUCTS: Product[] = [
  {
    id: 'pedra-madeira',
    name: 'Pedra Madeira',
    category: StoneType.WALL,
    description: 'A Pedra Madeira é ideal para revestimentos de fachadas e calçadas. Disponível nas cores amarela, branca e rosa. Muito utilizada em São Paulo por sua durabilidade e beleza rústica.',
    imageUrl: 'https://picsum.photos/id/1015/600/400',
    seoKeywords: ['pedra madeira', 'revestimento fachada', 'pedra amarela', 'pedra decorativa sp']
  },
  {
    id: 'paralelepipedo',
    name: 'Paralelepípedo',
    category: StoneType.PAVING,
    description: 'O melhor calçamento para tráfego pesado e áreas rurais. O paralelepípedo é eterno, ecológico e oferece excelente drenagem. Executamos obras em todo o estado de SP.',
    imageUrl: 'https://picsum.photos/id/1016/600/400',
    seoKeywords: ['paralelepipedo', 'calçamento de pedra', 'pavimentação', 'pedra para rua']
  },
  {
    id: 'pedra-miracema',
    name: 'Pedra Miracema',
    category: StoneType.PAVING,
    description: 'Pedra Miracema bruta ou serrada. O antiderrapante natural perfeito para rampas de garagem e calçadas. Alta resistência e baixo custo.',
    imageUrl: 'https://picsum.photos/id/1018/600/400',
    seoKeywords: ['pedra miracema', 'rampa de garagem', 'pedra cinza', 'lajinha']
  },
  {
    id: 'filete-canjiquinha',
    name: 'Filete Canjiquinha',
    category: StoneType.DECORATIVE,
    description: 'O Filete de Pedra (Canjiquinha) proporciona um ar sofisticado para lareiras, churrasqueiras e paredes internas. Corte manual ou serrado.',
    imageUrl: 'https://picsum.photos/id/1019/600/400',
    seoKeywords: ['canjiquinha', 'filete de pedra', 'pedra são tomé', 'decoração interna']
  },
  {
    id: 'seixos',
    name: 'Seixos de Rio',
    category: StoneType.LANDSCAPING,
    description: 'Seixos selecionados para jardins de inverno e paisagismo. Diversos tamanhos e tonalidades para compor seu jardim.',
    imageUrl: 'https://picsum.photos/id/1020/600/400',
    seoKeywords: ['seixo de rio', 'pedra de jardim', 'paisagismo', 'decoração externa']
  },
  {
    id: 'pedra-ferro',
    name: 'Pedra Ferro',
    category: StoneType.WALL,
    description: 'A Pedra Ferro ou Topázio possui uma coloração única, oxidada, que traz modernidade a qualquer fachada ou área gourmet.',
    imageUrl: 'https://picsum.photos/id/1021/600/400',
    seoKeywords: ['pedra ferro', 'pedra vulcânica', 'revestimento moderno', 'arquitetura rústica']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'calcamento',
    title: 'Calçamento e Pavimentação',
    description: 'Equipes especializadas em assentamento de paralelepípedos e pedras irregulares para condomínios, fazendas e indústrias.',
    iconName: 'Hammer'
  },
  {
    id: 'muros',
    title: 'Muros de Arrimo',
    description: 'Construção de muros de contenção com pedras grossas. Segurança estrutural e beleza natural para o seu terreno.',
    iconName: 'BrickWall'
  },
  {
    id: 'paisagismo',
    title: 'Projetos de Paisagismo',
    description: 'Integração de pedras naturais com áreas verdes. Lagos ornamentais, caminhos de pedra e cascatas.',
    iconName: 'Flower2'
  }
];