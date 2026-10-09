import { Link, useParams } from 'react-router-dom';
import { ProductDetail } from '../components/ProductDetail';
import { getProductBySlug } from '../data/products';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;

  useDocumentMeta({
    title: product
      ? `${product.model} | Bosch Tools Uruguay`
      : 'Producto no encontrado | Bosch Tools Uruguay',
    description: product?.shortDescription,
  });

  if (!product) {
    return (
      <div className="section">
        <div className="container">
          <div className="error-block">
            <h1>Producto no encontrado</h1>
            <p>El modelo solicitado no está en el catálogo de referencia.</p>
            <Link to="/herramientas" className="btn">
              Volver al catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <nav aria-label="Migas de pan" className="breadcrumbs">
          <Link to="/">Inicio</Link>
          <span aria-hidden="true"> / </span>
          <Link to="/herramientas">Herramientas</Link>
          <span aria-hidden="true"> / </span>
          <span>{product.model}</span>
        </nav>
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
