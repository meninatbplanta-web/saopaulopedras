export enum StoneType {
  DECORATIVE = 'Decorativa',
  PAVING = 'Pavimentação',
  WALL = 'Revestimento e Muros',
  LANDSCAPING = 'Paisagismo'
}

export interface Product {
  id: string;
  name: string;
  category: StoneType;
  description: string;
  imageUrl: string;
  seoKeywords: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CalculatorResponse {
  advice: string;
  estimatedMaterial?: string;
}