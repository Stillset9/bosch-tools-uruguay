import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { ProductPlaceholder } from './ProductPlaceholder';
import './ProductCard.css';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <article className="product-card">
      <Link to={`/producto/${product.slug}`} className="product-card__media">
        <ProductPlaceholder label={product.imagePlaceholder} />
      </Link>
      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="badge badge--blue">{product.gama}</span>
          <span className="badge">{product.voltage}</span>
        </div>
        <h3>
          <Link to={`/producto/${product.slug}`}>
            {product.model}
          </Link>
        </h3>
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__desc">{product.shortDescription}</p>
        <ul className="product-card__specs">
          {product.specs.slice(0, 3).map((spec) => (
            <li key={spec.label}>
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
