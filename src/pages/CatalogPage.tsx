import { ProductCatalog } from '../components/ProductCatalog';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function CatalogPage() {
  useDocumentMeta({
    title: 'Catálogo de herramientas | Bosch Tools Uruguay',
    description:
      'Filtrá herramientas Bosch Professional por categoría, alimentación, voltaje y aplicación. Precios a consultar con distribuidores en Uruguay.',
  });

  return (
    <div className="section">
      <div className="container">
        <p className="section__eyebrow">Herramientas</p>
        <ProductCatalog />
      </div>
    </div>
  );
}
