import type { Product } from '../types';

/**
 * Catálogo de referencia con datos verificados en bosch-professional.com/uy/es.
 * Precios no publicados aquí → siempre "Consultar precio".
 * Imágenes: placeholders provisionales (no son fotografías oficiales de producto).
 */
export const products: Product[] = [
  {
    id: 'gsb-18v-65',
    slug: 'gsb-18v-65',
    name: 'Taladro percutor atornillador inalámbrico',
    model: 'GSB 18V-65 Professional',
    orderNumber: '0 601 9N3 1E0',
    categoryId: 'taladros-atornilladores',
    shortDescription:
      'Taladro/atornillador inalámbrico versátil con torque de hasta 65 Nm y función de impacto.',
    description:
      'El GSB 18V-65 Professional ofrece torque 31/65/76 Nm y velocidades 0–550 / 0–2.100 rpm para perforar metal, madera o plástico, con impacto para mampostería. Cabezal compacto de 175 mm, KickBack Control conmutable y luces de trabajo dobles. Motor Brushless.',
    powerType: 'inalambrica',
    voltage: '18V',
    applications: ['construccion', 'carpinteria', 'electricidad', 'reformas'],
    specs: [
      { label: 'Voltaje de la batería', value: '18 V' },
      { label: 'Torque (blando/duro/máx.)', value: '31/65/76 Nm' },
      {
        label: 'Velocidad sin carga (1.ª/2.ª)',
        value: '0 – 550 / 0 – 2.100 rpm',
      },
      { label: 'Número de impactos máx.', value: '27.000 ipm' },
      { label: 'Portabrocas', value: 'Sujeción rápida 13 mm (1,5–13 mm)' },
      { label: 'Peso sin batería', value: '1,12 kg' },
      { label: 'Niveles de torque', value: '20' },
      { label: 'BITURBO', value: 'No' },
    ],
    features: [
      'Torque mejorado de 65 Nm para aplicaciones exigentes',
      'Longitud de cabezal de 175 mm para espacios estrechos',
      'KickBack Control conmutable',
      'Motor Brushless y luces de trabajo dobles',
    ],
    compatibleAccessories: [
      'Baterías y cargadores del Professional 18V System',
      'Brocas y puntas compatibles con portabrocas de 13 mm',
    ],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/products/gsb-18v-65-06019N31E0',
    imagePlaceholder: 'GSB 18V-65',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'gdr-18v-215',
    slug: 'gdr-18v-215',
    name: 'Atornillador de impacto inalámbrico',
    model: 'GDR 18V-215 Professional',
    categoryId: 'taladros-atornilladores',
    shortDescription:
      'Atornillador de impacto 18V con torque máximo de 215 Nm.',
    description:
      'Atornillador de impacto inalámbrico del Professional 18V System. Datos oficiales publicados: voltaje 18 V, torque máximo 215 Nm y velocidad en vacío 0–2.100 rpm.',
    powerType: 'inalambrica',
    voltage: '18V',
    applications: ['construccion', 'metalurgia', 'mantenimiento'],
    specs: [
      { label: 'Voltaje de la batería', value: '18 V' },
      { label: 'Torque, máx.', value: '215 Nm' },
      { label: 'Velocidad en vacío', value: '0–2.100 rpm' },
    ],
    features: [
      'Compatible con baterías y cargadores del Professional 18V System',
      'Pensado para atornillado de impacto en aplicaciones profesionales',
    ],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/sistema-de-18v-225590-ocs-c/',
    imagePlaceholder: 'GDR 18V-215',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'gdx-18v-285',
    slug: 'gdx-18v-285',
    name: 'Atornillador / llave de impacto inalámbrica',
    model: 'GDX 18V-285 Professional',
    categoryId: 'taladros-atornilladores',
    shortDescription:
      'Herramienta de impacto 18V con torque máximo de 285 Nm.',
    description:
      'Atornillador/llave de impacto inalámbrica del sistema 18V. Especificaciones oficiales: 18 V, torque máx. 285 Nm, velocidad en vacío 0–2.000 rpm.',
    powerType: 'inalambrica',
    voltage: '18V',
    applications: ['construccion', 'metalurgia', 'mantenimiento'],
    specs: [
      { label: 'Voltaje de la batería', value: '18 V' },
      { label: 'Torque, máx.', value: '285 Nm' },
      { label: 'Velocidad en vacío', value: '0–2.000 rpm' },
    ],
    features: [
      'Parte del Professional 18V System',
      'Aplicaciones de atornillado e impacto de alto torque',
    ],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/sistema-de-18v-225590-ocs-c/',
    imagePlaceholder: 'GDX 18V-285',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'gds-18v-780',
    slug: 'gds-18v-780',
    name: 'Atornillador / llave de impacto inalámbrica',
    model: 'GDS 18V-780 Professional',
    categoryId: 'percutores-rotomartillos',
    shortDescription:
      'Llave de impacto inalámbrica de alto torque: hasta 780 Nm.',
    description:
      'Atornillador/llave de impacto inalámbrica Professional. Datos oficiales: 18 V, torque máx. 780 Nm, velocidad en vacío 2.000 rpm.',
    powerType: 'inalambrica',
    voltage: '18V',
    applications: ['construccion', 'metalurgia', 'mantenimiento'],
    specs: [
      { label: 'Voltaje de la batería', value: '18 V' },
      { label: 'Torque, máx.', value: '780 Nm' },
      { label: 'Velocidad en vacío', value: '2.000 rpm' },
    ],
    features: [
      'Alto torque para aplicaciones exigentes',
      'Compatible con el Professional 18V System',
    ],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/sistema-de-18v-225590-ocs-c/',
    imagePlaceholder: 'GDS 18V-780',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'gws-18v-10',
    slug: 'gws-18v-10',
    name: 'Amoladora angular inalámbrica',
    model: 'GWS 18V-10 Professional',
    orderNumber: '0 601 9J4 0E0',
    categoryId: 'amoladoras',
    shortDescription:
      'Amoladora 125 mm con motor Brushless y potencia equivalente a 1000 W (según Bosch).',
    description:
      'Amoladora angular inalámbrica con motor Brushless. Datos oficiales: 18 V, 9.000 rpm, disco 125 mm, rosca M14, peso sin batería 2,1 kg. Incluye funciones de protección como Drop Control, Fast Brake y KickBack Control según la ficha del producto.',
    powerType: 'inalambrica',
    voltage: '18V',
    applications: ['metalurgia', 'construccion', 'mantenimiento'],
    specs: [
      { label: 'Voltaje de la batería', value: '18 V' },
      { label: 'Velocidad en vacío', value: '9.000 rpm' },
      { label: 'Diámetro del disco', value: '125 mm' },
      { label: 'Rosca del eje', value: 'M14' },
      { label: 'Peso sin batería', value: '2,1 kg' },
    ],
    features: [
      'Motor Brushless sin escobillas',
      'Potencia equivalente a 1000 W (según documentación Bosch)',
      'Drop Control, Fast Brake y KickBack Control',
    ],
    compatibleAccessories: [
      'Discos de corte y desbaste de 125 mm con rosca M14',
      'Baterías Professional 18V System / AMPShare',
    ],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/products/gws-18v-10-125-mm-06019J40E0',
    imagePlaceholder: 'GWS 18V-10',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'gws-18v-10-p',
    slug: 'gws-18v-10-p',
    name: 'Amoladora angular inalámbrica',
    model: 'GWS 18V-10 P Professional',
    categoryId: 'amoladoras',
    shortDescription:
      'Amoladora 125 mm con interruptor PROtection y motor Brushless.',
    description:
      'Versión con interruptor PROtection que desconecta la herramienta al soltar. Datos oficiales: 18 V, 9.000 rpm, disco 125 mm, rosca M14, peso sin batería 1,9 kg. Compatible con todas las baterías y cargadores del Professional 18V System.',
    powerType: 'inalambrica',
    voltage: '18V',
    applications: ['metalurgia', 'construccion'],
    specs: [
      { label: 'Voltaje de la batería', value: '18 V' },
      { label: 'Velocidad en vacío', value: '9.000 rpm' },
      { label: 'Diámetro del disco', value: '125 mm' },
      { label: 'Rosca del eje', value: 'M14' },
      { label: 'Peso sin batería', value: '1,9 kg' },
      { label: 'BITURBO', value: 'No' },
    ],
    features: [
      'Interruptor PROtection',
      'KickBack Control, Drop Control y frenado inteligente',
      'Motor Brushless — potencia equivalente a 1000 W (según Bosch)',
    ],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/products/gws-18v-10-p-06019J41E0',
    imagePlaceholder: 'GWS 18V-10 P',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'gws-18v-8',
    slug: 'gws-18v-8',
    name: 'Amoladora angular inalámbrica',
    model: 'GWS 18V-8 Professional',
    categoryId: 'amoladoras',
    shortDescription: 'Amoladora angular 125 mm del sistema 18V.',
    description:
      'Amoladora angular inalámbrica Professional. Datos oficiales del catálogo 18V: 18 V, velocidad en vacío 11.000 rpm, diámetro de disco 125 mm.',
    powerType: 'inalambrica',
    voltage: '18V',
    applications: ['metalurgia', 'mantenimiento'],
    specs: [
      { label: 'Voltaje de la batería', value: '18 V' },
      { label: 'Velocidad en vacío', value: '11.000 rpm' },
      { label: 'Diámetro del disco', value: '125 mm' },
    ],
    features: ['Compatible con el Professional 18V System'],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/sistema-de-18v-225590-ocs-c/',
    imagePlaceholder: 'GWS 18V-8',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'gks-18v-51',
    slug: 'gks-18v-51',
    name: 'Sierra circular inalámbrica',
    model: 'GKS 18V-51 Professional',
    categoryId: 'sierras',
    shortDescription: 'Sierra circular inalámbrica del Professional 18V System.',
    description:
      'Sierra circular inalámbrica. Datos oficiales publicados: voltaje 18 V, velocidad en vacío 5.800–6.300 rpm. Consultá la ficha completa en el sitio oficial para profundidad de corte y variantes.',
    powerType: 'inalambrica',
    voltage: '18V',
    applications: ['carpinteria', 'construccion', 'reformas'],
    specs: [
      { label: 'Voltaje de la batería', value: '18 V' },
      { label: 'Velocidad en vacío', value: '5.800 – 6.300 rpm' },
    ],
    features: [
      'Movilidad del sistema 18V en obra y taller',
      'Aplicaciones de corte en madera y materiales afines (verificar ficha oficial)',
    ],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/sistema-de-18v-225590-ocs-c/',
    imagePlaceholder: 'GKS 18V-51',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'glf-18v-8',
    slug: 'glf-18v-8',
    name: 'Fresadora de superficie inalámbrica',
    model: 'GLF 18V-8 Professional',
    categoryId: 'lijadoras',
    shortDescription:
      'Fresadora de superficie 18V con rango 10.000–30.000 rpm.',
    description:
      'Fresadora de superficie inalámbrica. Datos oficiales: 18 V, velocidad en vacío 10.000–30.000 rpm, boquillas compatibles 6 mm, 1/4" y 8 mm.',
    powerType: 'inalambrica',
    voltage: '18V',
    applications: ['carpinteria', 'reformas'],
    specs: [
      { label: 'Voltaje de la batería', value: '18 V' },
      { label: 'Velocidad en vacío', value: '10.000 – 30.000 rpm' },
      {
        label: 'Boquillas compatibles',
        value: '6 mm, 1/4", 8 mm',
      },
    ],
    features: ['Parte del Professional 18V System'],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/sistema-de-18v-225590-ocs-c/',
    imagePlaceholder: 'GLF 18V-8',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'glm-50-27-c',
    slug: 'glm-50-27-c',
    name: 'Medidor láser',
    model: 'GLM 50-27 C Professional',
    orderNumber: '0 601 072 T00',
    categoryId: 'medicion-laser',
    shortDescription:
      'Medidor láser robusto IP65 con Bluetooth® y alcance hasta 50 m.',
    description:
      'Medidor láser diseñado para entornos exigentes. Rango 0,05–50 m, precisión media ±1,5 mm, IP65, Bluetooth® 4.2 LE, almacenamiento de 30 valores. Alimentación: 2 pilas AA. Compatible con la app MeasureOn según documentación Bosch.',
    powerType: 'pila',
    voltage: 'N/A',
    applications: ['construccion', 'reformas', 'medicion', 'electricidad'],
    specs: [
      { label: 'Rango de medición', value: '0,050 – 50,000 m' },
      { label: 'Precisión media', value: '± 1,5 mm' },
      { label: 'Protección', value: 'IP65' },
      { label: 'Bluetooth™', value: '4.2 Low Energy' },
      { label: 'Clase de láser', value: '2' },
      { label: 'Color del láser', value: 'Rojo' },
      { label: 'Peso aprox.', value: '0,2 kg' },
      { label: 'Alimentación', value: '2 × AA 1,5 V LR6' },
    ],
    features: [
      'Carcasa resistente a caídas desde 1,5 m (según Bosch)',
      'Documentación vía Bluetooth® y MeasureOn',
      'Pantalla a color e interfaz intuitiva',
    ],
    batterySystem: null,
    officialUrl:
      'https://www.bosch-professional.com/uy/es/products/glm-50-27-c-0601072T00',
    imagePlaceholder: 'GLM 50-27 C',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'gll-2-12-g',
    slug: 'gll-2-12-g',
    name: 'Nivel láser de líneas',
    model: 'GLL 2-12 G Professional',
    orderNumber: '0 601 063 VD0',
    categoryId: 'niveles-detectores',
    shortDescription:
      'Nivel láser de líneas verdes con alcance de 12 m y precisión ±0,8 mm/m.',
    description:
      'Nivel láser de líneas con diodo verde para mayor visibilidad. Alcance 12 m, precisión ±0,8 mm/m, autonivelación ±4°, clase de láser 2. Alimentación: 2 pilas AA. Peso aprox. 0,25 kg.',
    powerType: 'pila',
    voltage: 'N/A',
    applications: ['construccion', 'reformas', 'medicion', 'electricidad'],
    specs: [
      { label: 'Alcance', value: '12 m' },
      { label: 'Precisión', value: '± 0,8 mm/m' },
      { label: 'Color de línea', value: 'Verde' },
      { label: 'Autonivelación', value: '± 4°' },
      { label: 'Clase de láser', value: '2' },
      { label: 'Peso aprox.', value: '0,25 kg' },
      { label: 'Alimentación', value: '2 × AA 1,5 V LR6' },
    ],
    features: [
      'Líneas verdes con mayor visibilidad frente a láser rojo (según Bosch)',
      'Diseño compacto con tecnología T-lens',
      'Operación con interruptor deslizante',
    ],
    batterySystem: null,
    officialUrl:
      'https://www.bosch-professional.com/uy/es/products/gll-2-12-g-0601063VD0',
    imagePlaceholder: 'GLL 2-12 G',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'procore18v-12',
    slug: 'procore18v-12-0ah',
    name: 'Batería de iones de litio',
    model: 'ProCORE18V 12.0Ah',
    orderNumber: '1 600 A01 6GU',
    categoryId: 'baterias',
    shortDescription:
      'Batería de alta capacidad del Professional 18V System y AMPShare.',
    description:
      'Batería ProCORE18V 12.0Ah con tecnología COOLPACK 2.0. Compatible con herramientas y cargadores del Professional 18V System de Bosch y AMPShare Alliance, según la ficha oficial. No implica compatibilidad con sistemas de otro voltaje.',
    powerType: 'accesorio',
    voltage: '18V',
    applications: ['construccion', 'mantenimiento', 'metalurgia'],
    specs: [
      { label: 'Voltaje', value: '18 V' },
      { label: 'Capacidad', value: '12,0 Ah' },
      { label: 'Tecnología', value: 'COOLPACK 2.0' },
      {
        label: 'Compatibilidad',
        value: 'Professional 18V System y AMPShare Alliance',
      },
    ],
    features: [
      'Alta capacidad para aplicaciones exigentes',
      'Indicador de estado de carga (según ficha oficial)',
      'Compatible con el ecosistema 18V / AMPShare — no con 12V',
    ],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/products/procore18v-12-0ah-1600A016GU',
    imagePlaceholder: 'ProCORE18V 12.0Ah',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
  {
    id: 'expert-hex9-hardceramic',
    slug: 'expert-hex9-hardceramic',
    name: 'Broca para azulejos y cerámica dura',
    model: 'EXPERT HEX-9 HardCeramic',
    categoryId: 'accesorios',
    shortDescription:
      'Accesorio EXPERT para perforación en cerámica dura y azulejos.',
    description:
      'La línea EXPERT de accesorios Bosch se orienta a aplicaciones exigentes. Según la comunicación oficial en Uruguay, HEX-9 HardCeramic destaca frente a brocas CYL-9 Ceramic en durabilidad en azulejos. Disponibilidad a través de distribuidores calificados. Verificá especificaciones y diámetros en la ficha oficial.',
    powerType: 'accesorio',
    voltage: 'N/A',
    applications: ['reformas', 'construccion', 'electricidad'],
    specs: [
      { label: 'Gama', value: 'EXPERT' },
      { label: 'Aplicación', value: 'Cerámica dura / azulejos' },
      { label: 'Tipo', value: 'Broca' },
    ],
    features: [
      'Línea EXPERT para trabajos exigentes',
      'Comunicada en novedades oficiales de Bosch Uruguay',
      'Consultá diámetros y compatibilidad en el sitio oficial',
    ],
    batterySystem: null,
    officialUrl: 'https://www.bosch-professional.com/uy/es/',
    imagePlaceholder: 'EXPERT HEX-9',
    priceLabel: 'Consultar precio',
    gama: 'EXPERT',
  },
  {
    id: 'gla-18vh-7500',
    slug: 'gla-18vh-7500',
    name: 'Lámpara de obra inalámbrica',
    model: 'GLA 18VH-7500 Professional',
    categoryId: 'inalambricas',
    shortDescription: 'Iluminación de obra 18V con 7.500 lm.',
    description:
      'Lámpara inalámbrica del sistema 18V. Datos oficiales: funciona con 18 V, flujo luminoso 7.500 lm, peso sin batería 4,1 kg.',
    powerType: 'inalambrica',
    voltage: '18V',
    applications: ['construccion', 'mantenimiento', 'reformas'],
    specs: [
      { label: 'Voltaje', value: '18 V' },
      { label: 'Flujo luminoso', value: '7.500 lm' },
      { label: 'Peso sin batería', value: '4,1 kg' },
    ],
    features: ['Compatible con baterías Professional 18V System'],
    batterySystem: '18V System',
    officialUrl:
      'https://www.bosch-professional.com/uy/es/sistema-de-18v-225590-ocs-c/',
    imagePlaceholder: 'GLA 18VH-7500',
    priceLabel: 'Consultar precio',
    gama: 'Professional',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) => {
    const haystack = [
      p.name,
      p.model,
      p.shortDescription,
      p.categoryId,
      p.orderNumber ?? '',
      ...p.features,
      ...p.applications,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

export interface ProductFilters {
  categoryId?: string;
  powerType?: string;
  voltage?: string;
  application?: string;
  query?: string;
}

export function filterProducts(filters: ProductFilters): Product[] {
  let result = products;

  if (filters.query?.trim()) {
    result = searchProducts(filters.query);
  }
  if (filters.categoryId) {
    result = result.filter((p) => p.categoryId === filters.categoryId);
  }
  if (filters.powerType) {
    result = result.filter((p) => p.powerType === filters.powerType);
  }
  if (filters.voltage) {
    result = result.filter((p) => p.voltage === filters.voltage);
  }
  if (filters.application) {
    result = result.filter((p) =>
      p.applications.includes(
        filters.application as Product['applications'][number],
      ),
    );
  }

  return result;
}
