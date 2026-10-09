import { ContactForm } from '../components/ContactForm';
import { OFFICIAL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../data/links';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ContactPage() {
  useDocumentMeta({
    title: 'Contacto | Bosch Tools Uruguay',
    description:
      'Consultá por WhatsApp o formulario. Herramientas Bosch en Uruguay: departamento, ciudad y atención directa.',
  });

  return (
    <section className="section">
      <div className="container contact-page">
        <div>
          <p className="section__eyebrow">Contacto</p>
          <h1>Hablemos de tu proyecto</h1>
          <p className="section__lead">
            Escribinos por WhatsApp para una respuesta rápida, o usá el
            formulario para dejar tu consulta por correo.
          </p>
          <ul className="contact-page__info">
            <li>
              <strong>WhatsApp:</strong>{' '}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <strong>Central Bosch UY:</strong>{' '}
              <a href={`tel:${OFFICIAL.phoneTel}`}>{OFFICIAL.phoneDisplay}</a>
            </li>
            <li>
              <strong>Email Bosch UY:</strong>{' '}
              <a href={`mailto:${OFFICIAL.email}`}>{OFFICIAL.email}</a>
            </li>
            <li>
              <strong>Horario central:</strong> {OFFICIAL.hours}
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
          <div className="btn-group" style={{ marginTop: '1.25rem' }}>
            <a
              className="btn btn--red"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
