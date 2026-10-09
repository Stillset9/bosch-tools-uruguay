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

type Slide =
  | { type: 'photo'; src: string; alt: string }
  | { type: 'placeholder'; label: string }
  | { type: 'context'; src: string; alt: string; credit?: string };

export function ProductDetail({ product }: Props) {
  const category = getCategoryById(product.categoryId);
  const [slide, setSlide] = useState(0);
  const [photoFailed, setPhotoFailed] = useState(false);

  const slides: Slide[] = [];
  if (product.image && !photoFailed) {
    slides.push({
      type: 'photo',
      src: product.image,
      alt: `${product.model} — ${product.name}`,
    });
  } else {
    slides.push({ type: 'placeholder', label: product.imagePlaceholder });
  }
  if (category?.image) {
    slides.push({
      type: 'context',
      src: category.image,
      alt: category.imageAlt ?? 'Contexto de aplicación',
      credit: category.imageCredit,
    });
  }

  const current = slides[slide] ?? slides[0];

  return (
    <article className="product-detail">
      <div className="product-detail__gallery">
        <div className="product-detail__stage">
          {current.type === 'placeholder' ? (
            <ProductPlaceholder label={current.label} />
          ) : current.type === 'photo' ? (
            <img
              className="product-detail__photo"
              src={current.src}
              alt={current.alt}
              width={800}
              height={800}
              onError={() => {
                setPhotoFailed(true);
                setSlide(0);
              }}
            />
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
                {current.credit} · contexto de aplicación
              </p>
            </>
          )}
        </div>
        <div className="product-detail__thumbs" role="tablist" aria-label="Galería">
          {slides.map((s, i) => (
            <button
              key={`${s.type}-${i}`}
              type="button"
              role="tab"
              aria-selected={slide === i}
              className={slide === i ? 'is-active' : ''}
              onClick={() => setSlide(i)}
            >
              {s.type === 'context' ? 'Aplicación' : 'Producto'}
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
            Ver en Bosch oficial
          </a>
        </div>

        {product.specs.length ? (
          <section className="product-detail__block">
            <h2>Especificaciones</h2>
            <dl className="spec-list">
              {product.specs.map((spec) => (
                <div key={`${spec.label}-${spec.value}`}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
            <p className="product-detail__note">
              Datos del catálogo de referencia. Confirmá variantes y contenido
              del kit con el distribuidor. Precio: consultar.
            </p>
          </section>
        ) : null}

        {product.features.length ? (
          <section className="product-detail__block">
            <h2>Detalle / incluye</h2>
            <ul>
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="product-detail__block">
          <h2>Manuales y recursos</h2>
          <ul>
            <li>
              <a
                href={OFFICIAL.services}
                target="_blank"
                rel="noopener noreferrer"
              >
                Manuales y descargas (sitio oficial)
              </a>
            </li>
            <li>
              <a
                href={OFFICIAL.dealers}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar distribuidor en Uruguay
              </a>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
