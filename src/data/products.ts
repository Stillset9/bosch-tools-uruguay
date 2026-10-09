import catalog from './catalog.json';
import type { Product } from '../types';

type CatalogItem = Product & {
  image?: string | null;
};

function withBase(path?: string | null): string | null {
  if (!path) return null;
  const clean = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}

/**
 * Catálogo importado desde la lista Mayo 2026.
 * Los precios del Excel NO se publican: siempre "Consultar precio".
 */
export const products: Product[] = (catalog as CatalogItem[]).map((p) => ({
  ...p,
  priceLabel: 'Consultar precio',
  officialUrl: p.officialUrl || 'https://www.bosch-professional.com/uy/es/',
  imagePlaceholder: p.imagePlaceholder || p.model,
  image: withBase(p.image),
  features: p.features || [],
  specs: p.specs || [],
  applications: p.applications || ['mantenimiento'],
  compatibleAccessories: p.compatibleAccessories || [],
}));

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) => {
    const haystack = [
      p.name,
      p.model,
      p.shortDescription,
      p.categoryId,
      p.orderNumber ?? '',
      p.segment ?? '',
      ...p.features,
      ...p.applications,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

export interface ProductFilters {
  categoryId?: string;
  powerType?: string;
  voltage?: string;
  application?: string;
  query?: string;
}

export function filterProducts(filters: ProductFilters): Product[] {
  let result = products;

  if (filters.query?.trim()) {
    result = searchProducts(filters.query);
  }
  if (filters.categoryId) {
    result = result.filter((p) => p.categoryId === filters.categoryId);
  }
  if (filters.powerType) {
    result = result.filter((p) => p.powerType === filters.powerType);
  }
  if (filters.voltage) {
    result = result.filter((p) => p.voltage === filters.voltage);
  }
  if (filters.application) {
    result = result.filter((p) =>
      p.applications.includes(
        filters.application as Product['applications'][number],
      ),
    );
  }

  return result;
}
