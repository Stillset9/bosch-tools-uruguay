/** Enlaces oficiales verificados en bosch-professional.com/uy/es (consulta 2026). */
export const OFFICIAL = {
  home: 'https://www.bosch-professional.com/uy/es/',
  powerTools:
    'https://www.bosch-professional.com/uy/es/herramientas-electricas-profesionales-131398-ocs-c/',
  dealers: 'https://www.bosch-professional.com/uy/es/dealers/',
  services: 'https://www.bosch-professional.com/uy/es/servicios/',
  system18v:
    'https://www.bosch-professional.com/uy/es/sistema-de-18v-225590-ocs-c/',
  ampshare:
    'https://www.bosch-professional.com/uy/es/ampshare/landingpage.html',
  procorePlus: 'https://www.bosch-professional.com/uy/es/procore18vplus/',
  faq: 'https://www.bosch-professional.com/uy/es/servicios/',
  phoneDisplay: '+598 2604 7011',
  phoneTel: '+59826047011',
  email: 'atencionalcliente@uy.bosch.com',
  hours: 'Lunes a viernes, 08:00 – 18:00',
} as const;

/**
 * WhatsApp solo se muestra si se configura un número real autorizado.
 * Ejemplo en .env: VITE_WHATSAPP_NUMBER=59899123456
 */
export const WHATSAPP_NUMBER =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.trim() || '';

export const SITE = {
  name: 'Bosch Tools Uruguay',
  tagline: 'Herramientas profesionales para el trabajo en Uruguay',
  /** Aclaración: este proyecto no es la tienda oficial del fabricante. */
  disclaimer:
    'Sitio informativo independiente dedicado a herramientas Bosch Professional para el mercado uruguayo. No es la tienda oficial de Robert Bosch ni un canal de venta autorizado por el fabricante. Precios, stock y disponibilidad deben confirmarse con distribuidores oficiales.',
} as const;
