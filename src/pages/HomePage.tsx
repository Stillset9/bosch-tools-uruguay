import { Link } from 'react-router-dom';
import { ActivityGrid } from '../components/ActivityGrid';
import { CategoryGrid } from '../components/CategoryGrid';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { ProfessionalSystems } from '../components/ProfessionalSystems';
import { ServiceSection } from '../components/ServiceSection';
import { WirelessSection } from '../components/WirelessSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { products } from '../data/products';
import { OFFICIAL } from '../data/links';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function HomePage() {
  useDocumentMeta({
    title: 'Bosch Tools Uruguay | Herramientas profesionales',
    description:
      'Catálogo informativo de herramientas Bosch Professional para Uruguay: inalámbricas 18V, medición, accesorios EXPERT, distribuidores y servicio técnico.',
  });

  const featured = products.slice(0, 6);

  return (
    <>
      <Hero />

      <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '1rem' }}>
        <div className="container">
          <ScrollReveal>
            <ul className="quick-links">
              <li>
                <a href={OFFICIAL.dealers} target="_blank" rel="noopener noreferrer">
                  Buscar distribuidores
                </a>
              </li>
              <li>
                <Link to="/servicio-tecnico">Servicio técnico</Link>
              </li>
              <li>
                <Link to="/herramientas?alimentacion=inalambrica">
                  Sistema 18V
                </Link>
              </li>
              <li>
                <a href={`tel:${OFFICIAL.phoneTel}`}>{OFFICIAL.phoneDisplay}</a>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <CategoryGrid />

      <section className="section section--alt" aria-labelledby="featured-title">
        <div className="container">
          <ScrollReveal>
            <p className="section__eyebrow">Selección</p>
            <h2 id="featured-title">Modelos de referencia</h2>
            <p className="section__lead">
              Especificaciones tomadas del sitio oficial Bosch Professional
              Uruguay. Precio: consultar. Sin stock inventado.
            </p>
          </ScrollReveal>
          <ul className="product-grid" style={{ marginTop: '2rem' }}>
            {featured.map((p) => (
              <li key={p.id}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
          <div className="btn-group" style={{ marginTop: '1.75rem' }}>
            <Link to="/herramientas" className="btn btn--red">
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      <WirelessSection />
      <ProfessionalSystems />
      <ActivityGrid />
      <ServiceSection />
    </>
  );
}
