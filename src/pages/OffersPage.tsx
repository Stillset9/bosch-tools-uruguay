import { Link } from 'react-router-dom';
import { OFFICIAL } from '../data/links';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function OffersPage() {
  useDocumentMeta({
    title: 'Ofertas | Bosch Tools Uruguay',
    description:
      'No publicamos descuentos inventados. Consultá promociones oficiales y precios con distribuidores Bosch en Uruguay.',
  });

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '720px' }}>
        <p className="section__eyebrow">Ofertas</p>
        <h1>Promociones y disponibilidad</h1>
        <p className="section__lead">
          En este sitio no inventamos precios, descuentos ni stock. Las
          condiciones comerciales las definen los distribuidores y las campañas
          oficiales de Bosch.
        </p>
        <div className="error-block" style={{ marginBottom: '1.5rem' }}>
          Si hay una promoción activa (por ejemplo ampliación de garantía),
          verificála siempre en el sitio oficial o con un distribuidor
          autorizado.
        </div>
        <div className="btn-group">
          <a
            className="btn btn--red"
            href={OFFICIAL.home}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver novedades oficiales
          </a>
          <a
            className="btn btn--outline"
            href={OFFICIAL.dealers}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar distribuidor
          </a>
          <Link to="/herramientas" className="btn btn--outline">
            Ir al catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
