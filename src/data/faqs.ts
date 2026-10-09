import type { FaqItem } from '../types';
import { OFFICIAL } from './links';

export const faqs: FaqItem[] = [
  {
    question: '¿Este sitio es la tienda oficial de Bosch?',
    answer:
      'No. Este es un sitio informativo independiente orientado al mercado uruguayo. Para compra, stock y condiciones comerciales, consultá distribuidores oficiales a través del localizador de Bosch Professional.',
  },
  {
    question: '¿Dónde encuentro un distribuidor en Uruguay?',
    answer: `Usá el localizador oficial de distribuidores: ${OFFICIAL.dealers}`,
  },
  {
    question: '¿Cómo contacto al servicio de atención en Uruguay?',
    answer: `Central de atención Bosch Uruguay: teléfono ${OFFICIAL.phoneDisplay}, correo ${OFFICIAL.email}. Horario publicado: ${OFFICIAL.hours}.`,
  },
  {
    question: '¿Las baterías de 18V son compatibles entre sí?',
    answer:
      'Según Bosch Professional, en el Professional 18V System podés combinar baterías y cargadores de 18V con herramientas de 18V del mismo sistema. No afirmamos compatibilidad entre sistemas de distinto voltaje (por ejemplo 12V y 18V). Verificá siempre la ficha oficial del producto.',
  },
  {
    question: '¿Qué es AMPShare?',
    answer:
      'AMPShare es la alianza de baterías multimarca basada en el Professional 18V System de Bosch. Las baterías AMPShare son compatibles con herramientas de la alianza, incluido el sistema Bosch Professional 18V. Más información en la página oficial de AMPShare.',
  },
  {
    question: '¿Cómo funcionan las garantías?',
    answer:
      'Las condiciones de garantía dependen del producto, el uso y los términos aplicables publicados por Bosch. Consultá la sección de servicios y garantía en el sitio oficial; no inventamos plazos ni coberturas aquí.',
  },
];
