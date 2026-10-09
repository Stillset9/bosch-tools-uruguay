import { ServiceSection } from '../components/ServiceSection';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ServicesPage() {
  useDocumentMeta({
    title: 'Servicio técnico | Bosch Tools Uruguay',
    description:
      'Distribuidores, centros de servicio, garantías, manuales y atención Bosch Professional en Uruguay.',
  });

  return <ServiceSection />;
}
