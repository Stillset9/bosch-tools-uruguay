import { Link } from 'react-router-dom';
import { OFFICIAL } from '../data/links';
import './Hero.css';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          src={HERO_IMAGE}
          alt="Profesional en obra moderna con herramientas eléctricas en primer plano"
          width={1600}
          height={1000}
          fetchPriority="high"
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <p className="section__eyebrow">Bosch Professional · Uruguay</p>
        <h1 id="hero-title">Herramientas que impulsan tu trabajo</h1>
        <p className="hero__lead">
          Potencia, precisión y soluciones para profesionales y proyectos en
          Uruguay.
        </p>
        <div className="btn-group">
          <Link to="/herramientas" className="btn btn--red">
            Explorar herramientas
          </Link>
          <a
            className="btn btn--outline-light"
            href={OFFICIAL.dealers}
            target="_blank"
            rel="noopener noreferrer"
          >
            Encontrar distribuidor
          </a>
        </div>
        <p className="hero__credit">
          Fotografía de atmósfera · Unsplash (no es imagen oficial de producto)
        </p>
      </div>
    </section>
  );
}
