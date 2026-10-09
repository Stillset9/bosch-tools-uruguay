import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import { OFFICIAL } from '../data/links';
import { ScrollReveal } from './ScrollReveal';
import './ServiceSection.css';

export function ServiceSection() {
  return (
    <section className="section" aria-labelledby="service-title">
      <div className="container">
        <ScrollReveal>
          <p className="section__eyebrow">Uruguay</p>
          <h2 id="service-title">Servicio técnico y confianza</h2>
          <p className="section__lead">
            Accedé a los canales oficiales de Bosch Professional en Uruguay.
            Las condiciones de garantía dependen del producto, el uso y los
            términos aplicables publicados por el fabricante.
          </p>
        </ScrollReveal>

        <ul className="service-grid">
          {[
            {
              title: 'Distribuidores',
              text: 'Localizador oficial de distribuidores en Uruguay.',
              href: OFFICIAL.dealers,
              external: true,
            },
            {
              title: 'Centros de servicio',
              text: 'Encontrá centros de servicio técnico autorizados.',
              href: OFFICIAL.dealers,
              external: true,
            },
            {
              title: 'Garantías',
              text: 'Información de garantía de productos en el sitio oficial.',
              href: OFFICIAL.services,
              external: true,
            },
            {
              title: 'Manuales y catálogos',
              text: 'Descargas de manuales y catálogos desde Bosch Professional.',
              href: OFFICIAL.services,
              external: true,
            },
            {
              title: 'Atención al cliente',
              text: `${OFFICIAL.phoneDisplay} · ${OFFICIAL.hours}`,
              href: `tel:${OFFICIAL.phoneTel}`,
              external: false,
            },
            {
              title: 'Contacto local',
              text: 'Formulario de consulta para el mercado uruguayo.',
              href: '/contacto',
              external: false,
            },
          ].map((item) => (
            <li key={item.title}>
              <ScrollReveal className="service-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    Ir al sitio oficial →
                  </a>
                ) : item.href.startsWith('/') ? (
                  <Link to={item.href}>Abrir →</Link>
                ) : (
                  <a href={item.href}>Llamar →</a>
                )}
              </ScrollReveal>
            </li>
          ))}
        </ul>

        <ScrollReveal className="faq">
          <h3>Preguntas frecuentes</h3>
          <div className="faq__list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
