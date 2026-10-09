import { Link } from 'react-router-dom';
import { OFFICIAL } from '../data/links';
import type { Offer } from '../data/offers';
import './OfferBanner.css';

interface Props {
  offer: Offer;
  compact?: boolean;
}

export function OfferBanner({ offer, compact = false }: Props) {
  return (
    <article className={`offer-banner ${compact ? 'offer-banner--compact' : ''}`}>
      <div className="offer-banner__media">
        <img
          src={offer.image}
          alt={offer.imageAlt}
          width={1200}
          height={675}
          loading={compact ? 'lazy' : 'eager'}
          fetchPriority={compact ? undefined : 'high'}
        />
      </div>
      <div className="offer-banner__body">
        <p className="section__eyebrow">{offer.periodLabel}</p>
        <h2>{offer.title}</h2>
        <p className="offer-banner__subtitle">{offer.subtitle}</p>
        <ul className="offer-banner__highlights">
          {offer.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="offer-banner__note">{offer.note}</p>
        <div className="btn-group">
          <Link
            to={`/contacto?producto=${encodeURIComponent(offer.title)}`}
            className="btn btn--red"
          >
            Consultar canje
          </Link>
          <a
            className="btn btn--outline"
            href={OFFICIAL.dealers}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver distribuidores
          </a>
          {compact ? (
            <Link to="/ofertas" className="btn btn--outline">
              Ver oferta
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
