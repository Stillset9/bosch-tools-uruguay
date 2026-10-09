import { ContactForm } from '../components/ContactForm';
import { OFFICIAL } from '../data/links';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ContactPage() {
  useDocumentMeta({
    title: 'Contacto | Bosch Tools Uruguay',
    description:
      'Consultá disponibilidad de herramientas Bosch en Uruguay. Formulario con departamento y ciudad, y datos oficiales de atención al cliente.',
  });

  return (
    <section className="section">
      <div className="container contact-page">
        <div>
          <p className="section__eyebrow">Contacto</p>
          <h1>Hablemos de tu proyecto</h1>
          <p className="section__lead">
            Este formulario prepara un correo hacia la casilla oficial publicada
            por Bosch Uruguay. No inventamos stock ni confirmamos envíos sin un
            backend real.
          </p>
          <ul className="contact-page__info">
            <li>
              <strong>Teléfono:</strong>{' '}
              <a href={`tel:${OFFICIAL.phoneTel}`}>{OFFICIAL.phoneDisplay}</a>
            </li>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${OFFICIAL.email}`}>{OFFICIAL.email}</a>
            </li>
            <li>
              <strong>Horario:</strong> {OFFICIAL.hours}
            </li>
            <li>
              <strong>Distribuidores:</strong>{' '}
              <a
                href={OFFICIAL.dealers}
                target="_blank"
                rel="noopener noreferrer"
              >
                Localizador oficial
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
