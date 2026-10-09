export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  periodLabel: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  note: string;
}

/** Ofertas cargadas por el responsable del sitio (no inventadas). */
export const currentOffers: Offer[] = [
  {
    id: 'plan-canje-octubre-2026',
    title: 'Plan Canje Bosch',
    subtitle: 'Renová tu potencia',
    periodLabel: 'Oferta de este mes',
    image: `${import.meta.env.BASE_URL}ofertas/plan-canje-bosch.jpg`,
    imageAlt:
      'Plan Canje Bosch: 35% OFF canjeando herramientas usadas por una Bosch nueva',
    highlights: [
      '35% OFF en el canje',
      'Canjeá tus herramientas usadas',
      'Por una Bosch nueva',
    ],
    note: 'Condiciones, modelos participantes y disponibilidad sujetos a confirmación con el distribuidor. Consultá antes de comprar.',
  },
];
