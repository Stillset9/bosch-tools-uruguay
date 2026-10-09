import { Link } from 'react-router-dom';
import { OfferBanner } from '../components/OfferBanner';
import { currentOffers } from '../data/offers';
import { OFFICIAL } from '../data/links';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function OffersPage() {
  useDocumentMeta({
    title: 'Ofertas | Bosch Tools Uruguay',
    description:
      'Plan Canje Bosch y promociones del mes. Consultá condiciones y disponibilidad con distribuidores en Uruguay.',
  });

  return (
    <section className="section">
      <div className="container">
        <p className="section__eyebrow">Ofertas</p>
        <h1>Promociones del mes</h1>
        <p className="section__lead">
          Campañas vigentes publicadas en este sitio. Las condiciones finales las
          confirma el distribuidor al momento de la consulta.
        </p>

        <div className="offers-list">
          {currentOffers.map((offer) => (
            <OfferBanner key={offer.id} offer={offer} />
          ))}
        </div>

        <div className="btn-group" style={{ marginTop: '2rem' }}>
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
