import type { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: 'construccion',
    name: 'Construcción',
    description: 'Perforación, corte y demolición en obra.',
    application: 'construccion',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Obra de construcción en Uruguay',
  },
  {
    id: 'electricidad',
    name: 'Instalaciones eléctricas',
    description: 'Atornillado, medición y trabajo en espacios reducidos.',
    application: 'electricidad',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Instalación eléctrica profesional',
  },
  {
    id: 'carpinteria',
    name: 'Carpintería',
    description: 'Corte, atornillado y acabado en madera.',
    application: 'carpinteria',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Taller de carpintería',
  },
  {
    id: 'metalurgia',
    name: 'Metalurgia',
    description: 'Amolado, corte e impacto en metal.',
    application: 'metalurgia',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Trabajo metalúrgico en taller',
  },
  {
    id: 'mantenimiento',
    name: 'Mantenimiento',
    description: 'Soluciones versátiles para servicio y taller.',
    application: 'mantenimiento',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3faad2b8?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Mantenimiento técnico industrial',
  },
  {
    id: 'reformas',
    name: 'Instalación y reformas',
    description: 'Herramientas para remodelación y acabados.',
    application: 'reformas',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Proyecto de reforma y arquitectura',
  },
];
