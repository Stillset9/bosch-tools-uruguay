import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function NotFoundPage() {
  useDocumentMeta({
    title: 'Página no encontrada | Bosch Tools Uruguay',
    description: 'La página solicitada no existe.',
  });

  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
        <p className="section__eyebrow">Error 404</p>
        <h1>Página no encontrada</h1>
        <p className="section__lead" style={{ marginInline: 'auto' }}>
          El enlace puede estar desactualizado o el producto no forma parte del
          catálogo de referencia.
        </p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <Link to="/" className="btn btn--red">
            Ir al inicio
          </Link>
          <Link to="/herramientas" className="btn btn--outline">
            Ver herramientas
          </Link>
        </div>
      </div>
    </section>
  );
}
