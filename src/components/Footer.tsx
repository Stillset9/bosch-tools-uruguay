import { Link } from 'react-router-dom';
import { OFFICIAL, SITE } from '../data/links';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__brand">
            <img
              src={`${import.meta.env.BASE_URL}brand/bosch-logo.svg`}
              alt="Bosch"
              width={120}
              height={28}
              className="site-footer__logo"
            />
            Bosch Tools Uruguay
            <img
              className="site-footer__flag"
              src={`${import.meta.env.BASE_URL}brand/flag-uruguay.svg`}
              alt="Uruguay"
              width={22}
              height={15}
            />
          </p>
          <p className="site-footer__text">{SITE.tagline}</p>
          <p className="site-footer__text site-footer__text--small">
            {SITE.disclaimer}
          </p>
        </div>

        <div>
          <h2 className="site-footer__heading">Navegación</h2>
          <ul className="site-footer__list">
            <li>
              <Link to="/herramientas">Catálogo</Link>
            </li>
            <li>
              <Link to="/servicio-tecnico">Servicio técnico</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/ofertas">Ofertas</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Enlaces oficiales</h2>
          <ul className="site-footer__list">
            <li>
              <a href={OFFICIAL.home} target="_blank" rel="noopener noreferrer">
                Bosch Professional UY
              </a>
            </li>
            <li>
              <a
                href={OFFICIAL.dealers}
                target="_blank"
                rel="noopener noreferrer"
              >
                Distribuidores
              </a>
            </li>
            <li>
              <a
                href={OFFICIAL.services}
                target="_blank"
                rel="noopener noreferrer"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href={OFFICIAL.ampshare}
                target="_blank"
                rel="noopener noreferrer"
              >
                AMPShare
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Atención Uruguay</h2>
          <ul className="site-footer__list">
            <li>
              <a href={`tel:${OFFICIAL.phoneTel}`}>{OFFICIAL.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${OFFICIAL.email}`}>{OFFICIAL.email}</a>
            </li>
            <li>{OFFICIAL.hours}</li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Marcas y nombres de
            productos son propiedad de sus respectivos titulares. Bosch es marca
            registrada de Robert Bosch GmbH.
          </p>
        </div>
      </div>
    </footer>
  );
}
