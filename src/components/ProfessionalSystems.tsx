import { Link } from 'react-router-dom';
import { OFFICIAL } from '../data/links';
import { ScrollReveal } from './ScrollReveal';
import './ProfessionalSystems.css';

export function ProfessionalSystems() {
  return (
    <section className="section section--alt" aria-labelledby="pro-title">
      <div className="container">
        <ScrollReveal>
          <p className="section__eyebrow">Gamas</p>
          <h2 id="pro-title">Professional y EXPERT</h2>
          <p className="section__lead">
            Dos líneas complementarias: herramientas Professional para el
            trabajo diario, y accesorios EXPERT orientados a aplicaciones
            exigentes. Los datos de rendimiento se basan en documentación
            oficial; no prometemos resultados no verificados.
          </p>
        </ScrollReveal>

        <div className="pro-grid">
          <ScrollReveal className="pro-panel">
            <div className="pro-panel__media">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80"
                alt="Entorno industrial profesional"
                loading="lazy"
                width={800}
                height={520}
              />
            </div>
            <div className="pro-panel__body">
              <span className="badge badge--blue">Professional</span>
              <h3>Bosch Professional</h3>
              <p>
                Herramientas eléctricas y de medición para oficios: taladros,
                amoladoras, sierras, medición láser y sistemas de batería 12V /
                18V. Modelos de referencia en este sitio incluyen GSB 18V-65,
                GWS 18V-10 y GLM 50-27 C, con especificaciones tomadas del
                catálogo oficial de Uruguay.
              </p>
              <ul>
                <li>Sistemas de batería 12V y 18V documentados por separado</li>
                <li>Fichas técnicas y manuales en el sitio oficial</li>
                <li>Red de distribuidores y servicio en Uruguay</li>
              </ul>
              <div className="btn-group">
                <Link to="/herramientas" className="btn">
                  Ver herramientas
                </Link>
                <a
                  className="btn btn--outline"
                  href={OFFICIAL.powerTools}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Catálogo oficial
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="pro-panel">
            <div className="pro-panel__media">
              <img
                src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1000&q=80"
                alt="Accesorios y herramientas en banco de trabajo"
                loading="lazy"
                width={800}
                height={520}
              />
            </div>
            <div className="pro-panel__body">
              <span className="badge badge--red">EXPERT</span>
              <h3>Accesorios EXPERT</h3>
              <p>
                La línea EXPERT se presenta en el sitio oficial de Uruguay para
                aplicaciones exigentes (por ejemplo brocas para cerámica dura y
                discos de corte de alto rendimiento). Bosch indica que
                herramientas y accesorios EXPERT pueden estar disponibles a
                través de distribuidores calificados.
              </p>
              <ul>
                <li>Enfocada en durabilidad y aplicaciones intensivas</li>
                <li>Disponibilidad vía distribuidores calificados</li>
                <li>Verificar cada accesorio en su ficha oficial</li>
              </ul>
              <div className="btn-group">
                <Link
                  to="/herramientas?categoria=accesorios-brocas-discos"
                  className="btn"
                >
                  Ver accesorios
                </Link>
                <a
                  className="btn btn--outline"
                  href={OFFICIAL.home}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Novedades oficiales
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
