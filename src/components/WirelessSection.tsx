import { Link } from 'react-router-dom';
import { OFFICIAL } from '../data/links';
import { ScrollReveal } from './ScrollReveal';
import './WirelessSection.css';

export function WirelessSection() {
  return (
    <section className="section wireless" aria-labelledby="wireless-title">
      <div className="wireless__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="container wireless__content">
        <ScrollReveal>
          <p className="section__eyebrow">Tecnología inalámbrica</p>
          <h2 id="wireless-title">
            Libertad para trabajar. Potencia para avanzar.
          </h2>
          <p className="section__lead">
            El Professional 18V System de Bosch combina potencia y movilidad. En
            ese sistema, las baterías y cargadores de 18V se pueden combinar con
            herramientas de 18V. Existe además el Professional 12V System: no se
            afirma compatibilidad entre voltajes distintos.
          </p>
        </ScrollReveal>

        <div className="wireless__grid">
          <ScrollReveal className="wireless__card">
            <h3>Professional 18V System</h3>
            <p>
              Plataforma amplia para obra y taller. Incluye herramientas como
              taladros, amoladoras, sierras e iluminación alimentadas a 18V.
            </p>
            <a
              href={OFFICIAL.system18v}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver sistema 18V oficial →
            </a>
          </ScrollReveal>
          <ScrollReveal className="wireless__card">
            <h3>ProCORE18V</h3>
            <p>
              Gama de baterías de alto rendimiento del ecosistema 18V. Modelos
              como ProCORE18V 12.0Ah están documentados como compatibles con
              herramientas y cargadores del Professional 18V System y AMPShare.
            </p>
            <a
              href={OFFICIAL.procorePlus}
              target="_blank"
              rel="noopener noreferrer"
            >
              ProCORE18V+ (oficial) →
            </a>
          </ScrollReveal>
          <ScrollReveal className="wireless__card">
            <h3>AMPShare</h3>
            <p>
              Alianza multimarca basada en el Professional 18V System. Las
              baterías AMPShare son compatibles con herramientas de la alianza,
              incluido Bosch Professional 18V. No sustituye verificar cada
              combinación en la ficha del producto.
            </p>
            <a
              href={OFFICIAL.ampshare}
              target="_blank"
              rel="noopener noreferrer"
            >
              AMPShare oficial →
            </a>
          </ScrollReveal>
        </div>

        <div className="btn-group" style={{ marginTop: '2rem' }}>
          <Link
            to="/herramientas?alimentacion=inalambrica"
            className="btn btn--red"
          >
            Explorar inalámbricas
          </Link>
          <Link to="/herramientas?categoria=maletines-baterias-cargadores" className="btn btn--outline-light">
            Baterías y cargadores
          </Link>
        </div>
      </div>
    </section>
  );
}
