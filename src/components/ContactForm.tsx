import { useMemo, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OFFICIAL } from '../data/links';
import './ContactForm.css';

const DEPARTAMENTOS = [
  'Artigas',
  'Canelones',
  'Cerro Largo',
  'Colonia',
  'Durazno',
  'Flores',
  'Florida',
  'Lavalleja',
  'Maldonado',
  'Montevideo',
  'Paysandú',
  'Río Negro',
  'Rivera',
  'Rocha',
  'Salto',
  'San José',
  'Soriano',
  'Tacuarembó',
  'Treinta y Tres',
];

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  departamento: string;
  ciudad: string;
  producto: string;
  mensaje: string;
  consentimiento: boolean;
}

const initial: FormState = {
  nombre: '',
  email: '',
  telefono: '',
  departamento: 'Montevideo',
  ciudad: '',
  producto: '',
  mensaje: '',
  consentimiento: false,
};

export function ContactForm() {
  const [params] = useSearchParams();
  const [form, setForm] = useState<FormState>(() => ({
    ...initial,
    producto: params.get('producto') || '',
  }));
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [status, setStatus] = useState<'idle' | 'ready' | 'error'>('idle');

  const canUseMailto = useMemo(() => Boolean(OFFICIAL.email), []);

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.nombre.trim()) next.nombre = 'Ingresá tu nombre.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Ingresá un correo válido.';
    }
    if (form.telefono && !/^\+?598?\s?\d{7,9}$/.test(form.telefono.replace(/\s/g, '')) && !/^\d{8,9}$/.test(form.telefono.replace(/\s/g, ''))) {
      next.telefono = 'Usá formato uruguayo, ej. +598 99 123 456.';
    }
    if (!form.departamento) next.departamento = 'Seleccioná un departamento.';
    if (!form.ciudad.trim()) next.ciudad = 'Ingresá la ciudad.';
    if (form.mensaje.trim().length < 10) {
      next.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }
    if (!form.consentimiento) {
      next.consentimiento = 'Necesitamos tu consentimiento para contactarte.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    if (!validate()) {
      setStatus('error');
      return;
    }

    /**
     * Sin backend: no simulamos envío exitoso.
     * Abrimos el cliente de correo del usuario con el mensaje preparado
     * hacia la casilla oficial publicada por Bosch Uruguay.
     */
    if (!canUseMailto) {
      setStatus('error');
      return;
    }

    const subject = encodeURIComponent(
      `Consulta Bosch Tools Uruguay — ${form.producto || 'General'}`,
    );
    const body = encodeURIComponent(
      [
        `Nombre: ${form.nombre}`,
        `Email: ${form.email}`,
        `Teléfono: ${form.telefono || 'No indicado'}`,
        `Departamento: ${form.departamento}`,
        `Ciudad: ${form.ciudad}`,
        `Producto: ${form.producto || 'No indicado'}`,
        '',
        form.mensaje,
        '',
        '---',
        'Mensaje generado desde el sitio informativo Bosch Tools Uruguay.',
        'Nota: este canal usa mailto hacia la casilla oficial publicada.',
      ].join('\n'),
    );

    window.location.href = `mailto:${OFFICIAL.email}?subject=${subject}&body=${body}`;
    setStatus('ready');
  };

  const field = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__grid">
        <label>
          Nombre completo *
          <input
            name="nombre"
            autoComplete="name"
            value={form.nombre}
            onChange={(e) => field('nombre', e.target.value)}
            aria-invalid={Boolean(errors.nombre)}
          />
          {errors.nombre ? <span className="field-error">{errors.nombre}</span> : null}
        </label>

        <label>
          Correo electrónico *
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => field('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </label>

        <label>
          Teléfono (+598)
          <input
            type="tel"
            name="telefono"
            autoComplete="tel"
            placeholder="+598 99 123 456"
            value={form.telefono}
            onChange={(e) => field('telefono', e.target.value)}
            aria-invalid={Boolean(errors.telefono)}
          />
          {errors.telefono ? (
            <span className="field-error">{errors.telefono}</span>
          ) : null}
        </label>

        <label>
          Departamento *
          <select
            name="departamento"
            value={form.departamento}
            onChange={(e) => field('departamento', e.target.value)}
          >
            {DEPARTAMENTOS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>

        <label>
          Ciudad *
          <input
            name="ciudad"
            autoComplete="address-level2"
            value={form.ciudad}
            onChange={(e) => field('ciudad', e.target.value)}
            aria-invalid={Boolean(errors.ciudad)}
          />
          {errors.ciudad ? <span className="field-error">{errors.ciudad}</span> : null}
        </label>

        <label>
          Producto de interés
          <input
            name="producto"
            value={form.producto}
            onChange={(e) => field('producto', e.target.value)}
            placeholder="Ej. GSB 18V-65"
          />
        </label>
      </div>

      <label className="contact-form__full">
        Mensaje *
        <textarea
          name="mensaje"
          rows={5}
          value={form.mensaje}
          onChange={(e) => field('mensaje', e.target.value)}
          aria-invalid={Boolean(errors.mensaje)}
        />
        {errors.mensaje ? <span className="field-error">{errors.mensaje}</span> : null}
      </label>

      <label className="contact-form__check">
        <input
          type="checkbox"
          checked={form.consentimiento}
          onChange={(e) => field('consentimiento', e.target.checked)}
        />
        <span>
          Autorizo el uso de mis datos únicamente para responder esta consulta.
          No se almacenan en un servidor de este sitio (no hay backend
          conectado).
        </span>
      </label>
      {errors.consentimiento ? (
        <span className="field-error">{errors.consentimiento}</span>
      ) : null}

      <div className="contact-form__actions">
        <button type="submit" className="btn btn--red">
          Preparar consulta por correo
        </button>
        <a className="btn btn--outline" href={`tel:${OFFICIAL.phoneTel}`}>
          Llamar {OFFICIAL.phoneDisplay}
        </a>
      </div>

      {status === 'ready' ? (
        <div className="contact-form__status" role="status">
          Se abrió tu cliente de correo hacia {OFFICIAL.email}. La consulta se
          completa cuando vos enviás el mensaje. Si no se abrió, copiá el correo
          oficial y escribinos manualmente.
        </div>
      ) : null}

      {status === 'error' ? (
        <div className="error-block" role="alert">
          Revisá los campos marcados. No se confirma envío hasta que el mensaje
          salga desde tu correo o un backend real.
        </div>
      ) : null}

      <p className="contact-form__note">
        Integración pendiente: API/backend para guardar consultas, CRM o
        inventario. WhatsApp solo aparece en el encabezado si configurás{' '}
        <code>VITE_WHATSAPP_NUMBER</code> con un número autorizado.
      </p>
    </form>
  );
}
