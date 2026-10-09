import { Link } from 'react-router-dom';
import { activities } from '../data/activities';
import { ScrollReveal } from './ScrollReveal';
import './ActivityGrid.css';

export function ActivityGrid() {
  return (
    <section className="section section--alt" aria-labelledby="activity-title">
      <div className="container">
        <ScrollReveal>
          <p className="section__eyebrow">Mercado uruguayo</p>
          <h2 id="activity-title">Encontrá herramientas para tu trabajo</h2>
          <p className="section__lead">
            Accesos por oficio para profesionales de Montevideo y del interior
            del país.
          </p>
        </ScrollReveal>
        <ul className="activity-grid">
          {activities.map((item) => (
            <li key={item.id}>
              <ScrollReveal>
                <Link
                  to={`/herramientas?aplicacion=${item.application}`}
                  className="activity-card"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    width={640}
                    height={420}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
