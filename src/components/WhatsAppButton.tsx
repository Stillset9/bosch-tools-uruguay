import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../data/links';
import './WhatsAppButton.css';

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp al ${WHATSAPP_DISPLAY}`}
    >
      <span className="whatsapp-fab__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
          <path d="M16.1 3C9.2 3 3.6 8.5 3.6 15.3c0 2.2.6 4.3 1.7 6.1L3 29l7.8-2.1c1.7.9 3.6 1.4 5.3 1.4 6.9 0 12.5-5.5 12.5-12.3S23 3 16.1 3zm0 22.4c-1.6 0-3.2-.4-4.6-1.3l-.3-.2-4.6 1.2 1.2-4.5-.2-.3c-1-1.5-1.5-3.2-1.5-5 0-5.4 4.5-9.8 10-9.8s10 4.4 10 9.8-4.5 10.1-10 10.1zm5.5-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.7 2.5.8 3.4.7.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.2-.3-.5-.4z" />
        </svg>
      </span>
      <span className="whatsapp-fab__label">WhatsApp</span>
    </a>
  );
}
