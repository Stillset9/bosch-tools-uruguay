import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { ProductPlaceholder } from './ProductPlaceholder';
import './ProductCard.css';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const showPhoto = Boolean(product.image) && !imgFailed;

  return (
    <article className="product-card">
      <Link to={`/producto/${product.slug}`} className="product-card__media">
        {showPhoto ? (
          <img
            className="product-card__photo"
            src={product.image!}
            alt={`${product.model} — ${product.name}`}
            loading="lazy"
            width={480}
            height={480}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <ProductPlaceholder label={product.imagePlaceholder} />
        )}
      </Link>
      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="badge badge--blue">{product.gama}</span>
          {product.voltage !== 'N/A' ? (
            <span className="badge">{product.voltage}</span>
          ) : null}
        </div>
        <h3>
          <Link to={`/producto/${product.slug}`}>{product.model}</Link>
        </h3>
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__desc">{product.shortDescription}</p>
        <ul className="product-card__specs">
          {product.specs.slice(0, 3).map((spec) => (
            <li key={`${spec.label}-${spec.value}`}>
              <strong>{spec.label}:</strong> {spec.value}
            </li>
          ))}
        </ul>
        <p className="product-card__price">{product.priceLabel}</p>
        <div className="product-card__actions">
          <Link to={`/producto/${product.slug}`} className="btn">
            Ver producto
          </Link>
          <Link
            to={`/contacto?producto=${encodeURIComponent(product.model)}`}
            className="btn btn--outline"
          >
            Consultar disponibilidad
          </Link>
        </div>
      </div>
    </article>
  );
}
