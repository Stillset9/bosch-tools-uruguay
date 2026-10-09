import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { getCategoryById } from '../data/categories';
import { OFFICIAL } from '../data/links';
import { ProductPlaceholder } from './ProductPlaceholder';
import './ProductDetail.css';

interface Props {
  product: Product;
}

export function ProductDetail({ product }: Props) {
  const category = getCategoryById(product.categoryId);
  const [slide, setSlide] = useState(0);

  const slides = [
    { type: 'placeholder' as const, label: product.imagePlaceholder },
    {
      type: 'context' as const,
      src: category?.image,
      alt: category?.imageAlt ?? 'Contexto de aplicación',
      credit: category?.imageCredit,
    },
  ];

  const current = slides[slide];

  return (
    <article className="product-detail">
      <div className="product-detail__gallery">
        <div className="product-detail__stage">
          {current.type === 'placeholder' ? (
            <ProductPlaceholder label={current.label} />
          ) : (
            <>
              <img
                src={current.src}
                alt={current.alt}
                loading="lazy"
                width={800}
                height={800}
              />
              <p className="product-detail__credit">
                {current.credit} · contexto de aplicación, no ficha oficial
              </p>
            </>
          )}
        </div>
        <div className="product-detail__thumbs" role="tablist" aria-label="Galería">
          {slides.map((s, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={slide === i}
              className={slide === i ? 'is-active' : ''}
              onClick={() => setSlide(i)}
            >
              {s.type === 'placeholder' ? 'Producto' : 'Aplicación'}
            </button>
          ))}
        </div>
      </div>

      <div className="product-detail__info">
        <div className="product-card__meta">
          <span className="badge badge--blue">{product.gama}</span>
          {product.batterySystem ? (
            <span className="badge">{product.batterySystem}</span>
          ) : null}
          <span className="badge badge--red">{product.priceLabel}</span>
        </div>
        <h1>{product.model}</h1>
        <p className="product-detail__subtitle">{product.name}</p>
        {product.orderNumber ? (
          <p className="product-detail__order">
            N.º de pedido (referencia): {product.orderNumber}
          </p>
        ) : null}
        <p>{product.description}</p>

        <div className="btn-group">
          <Link
            to={`/contacto?producto=${encodeURIComponent(product.model)}`}
            className="btn btn--red"
          >
            Consultar disponibilidad
          </Link>
          <a
            className="btn btn--outline"
            href={product.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ficha oficial Bosch
          </a>
        </div>

        <section className="product-detail__block">
          <h2>Especificaciones verificadas</h2>
          <dl className="spec-list">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
          <p className="product-detail__note">
            Las especificaciones pueden variar según variante y condiciones de
            uso. Confirmá siempre en la fuente oficial.
          </p>
        </section>

        <section className="product-detail__block">
          <h2>Destacados</h2>
          <ul>
            {product.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        {product.compatibleAccessories?.length ? (
          <section className="product-detail__block">
            <h2>Accesorios / compatibilidad</h2>
            <ul>
              {product.compatibleAccessories.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="product-detail__block">
          <h2>Manuales y recursos</h2>
          <ul>
            <li>
              <a
                href={product.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Página oficial del producto / catálogo
              </a>
            </li>
            <li>
              <a
                href={OFFICIAL.services}
                target="_blank"
                rel="noopener noreferrer"
              >
                Manuales y descargas (sitio oficial)
              </a>
            </li>
            {product.manualUrl ? (
              <li>
                <a
                  href={product.manualUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manual directo
                </a>
              </li>
            ) : null}
          </ul>
        </section>
      </div>
    </article>
  );
}
