export type PowerType = 'inalambrica' | 'cable' | 'pila' | 'accesorio';

export type Voltage = '12V' | '18V' | '220V' | 'N/A';

export type Application =
  | 'construccion'
  | 'electricidad'
  | 'carpinteria'
  | 'metalurgia'
  | 'mantenimiento'
  | 'reformas'
  | 'medicion';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  model: string;
  orderNumber?: string;
  categoryId: string;
  shortDescription: string;
  description: string;
  powerType: PowerType;
  voltage: Voltage;
  applications: Application[];
  specs: ProductSpec[];
  features: string[];
  compatibleAccessories?: string[];
  batterySystem?: '18V System' | '12V System' | null;
  officialUrl: string;
  manualUrl?: string;
  imagePlaceholder: string;
  imageCredit?: string;
  priceLabel: 'Consultar precio';
  gama: 'Professional' | 'EXPERT';
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  application: Application;
  image: string;
  imageAlt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
