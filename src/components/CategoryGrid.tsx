import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { ScrollReveal } from './ScrollReveal';
import './CategoryGrid.css';

export function CategoryGrid() {
  return (
    <section className="section" aria-labelledby="categories-title">
      <div className="container">
        <ScrollReveal>
          <p className="section__eyebrow">Catálogo</p>
          <h2 id="categories-title">Categorías profesionales</h2>
          <p className="section__lead">
            Explorá soluciones por tipo de herramienta. Las imágenes muestran
            contextos de trabajo; las fichas de producto usan referencias
            verificadas del sitio oficial.
          </p>
        </ScrollReveal>

        <ul className="category-grid">
          {categories.map((cat) => (
            <li key={cat.id}>
              <ScrollReveal>
                <Link
                  to={`/herramientas?categoria=${cat.slug}`}
                  className="category-card"
                >
                  <div className="category-card__media">
                    <img
                      src={cat.image}
                      alt={cat.imageAlt}
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="category-card__body">
                    <h3>{cat.name}</h3>
                    <p>{cat.description}</p>
                    <span className="category-card__cta">Explorar →</span>
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
