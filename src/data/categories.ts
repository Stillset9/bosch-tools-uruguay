import type { Category } from '../types';

/** Imágenes de atmósfera (Unsplash License) — no son fichas oficiales de producto. */
export const categories: Category[] = [
  {
    id: 'taladros-atornilladores',
    slug: 'taladros-y-atornilladores',
    name: 'Taladros y atornilladores',
    description:
      'Perforación y atornillado para obra, taller e instalaciones.',
    image:
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Taladro profesional en uso en taller',
    imageCredit: 'Unsplash — foto de atmósfera industrial',
  },
  {
    id: 'percutores-rotomartillos',
    slug: 'taladros-percutores-y-rotomartillos',
    name: 'Taladros percutores y rotomartillos',
    description:
      'Soluciones para mampostería, hormigón y trabajos de impacto.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Obra de construcción con herramientas eléctricas',
    imageCredit: 'Unsplash — foto de atmósfera industrial',
  },
  {
    id: 'amoladoras',
    slug: 'amoladoras',
    name: 'Amoladoras',
    description: 'Corte y desbaste en metal y piedra para uso profesional.',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Trabajo de metalurgia en taller industrial',
    imageCredit: 'Unsplash — foto de atmósfera industrial',
  },
  {
    id: 'sierras',
    slug: 'sierras-y-corte',
    name: 'Sierras y herramientas de corte',
    description: 'Corte preciso en madera, metal y materiales de obra.',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Corte de madera en carpintería',
    imageCredit: 'Unsplash — foto de atmósfera industrial',
  },
  {
    id: 'lijadoras',
    slug: 'lijadoras',
    name: 'Lijadoras',
    description: 'Acabado y preparación de superficies en madera y metal.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Trabajo de acabado en superficie de madera',
    imageCredit: 'Unsplash — foto de atmósfera industrial',
  },
  {
    id: 'inalambricas',
    slug: 'herramientas-inalambricas',
    name: 'Herramientas inalámbricas',
    description:
      'Sistema Professional 18V y 12V para movilidad en obra y taller.',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Herramientas inalámbricas en entorno de obra',
    imageCredit: 'Unsplash — foto de atmósfera industrial',
  },
  {
    id: 'medicion-laser',
    slug: 'medicion-laser',
    name: 'Herramientas de medición láser',
    description: 'Medidores y niveles láser para precisión en obra.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3faad2b8?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Medición profesional en entorno técnico',
    imageCredit: 'Unsplash — foto de atmósfera industrial',
  },
  {
    id: 'niveles-detectores',
    slug: 'niveles-y-detectores',
    name: 'Niveles y detectores',
    description: 'Nivelación y detección de materiales en instalaciones.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Obra arquitectónica moderna en construcción',
    imageCredit: 'Unsplash — foto de atmósfera industrial',
  },
  {
    id: 'accesorios',
    slug: 'accesorios-brocas-discos',
    name: 'Accesorios, brocas y discos',
    description: 'Accesorios Professional y gama EXPERT para más rendimiento.',
    image:
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Accesorios y herramientas en banco de trabajo',
    imageCredit: 'Unsplash — foto de atmósfera industrial',
  },
  {
    id: 'baterias',
    slug: 'maletines-baterias-cargadores',
    name: 'Maletines, baterías y cargadores',
    description:
      'Baterías ProCORE18V, cargadores y sistemas de transporte L-BOXX.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Equipamiento profesional organizado en taller',
    imageCredit: 'Unsplash — foto de atmósfera industrial',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
