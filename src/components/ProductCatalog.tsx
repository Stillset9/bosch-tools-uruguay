import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { filterProducts } from '../data/products';
import { ProductCard } from './ProductCard';
import './ProductCatalog.css';

const powerOptions = [
  { value: '', label: 'Todas' },
  { value: 'inalambrica', label: 'Inalámbrica' },
  { value: 'cable', label: 'Con cable' },
  { value: 'pila', label: 'Pila' },
  { value: 'accesorio', label: 'Accesorio' },
];

const voltageOptions = [
  { value: '', label: 'Todos' },
  { value: '12V', label: '12V' },
  { value: '18V', label: '18V' },
  { value: '220V', label: '220V' },
  { value: 'N/A', label: 'N/A' },
];

const applicationOptions = [
  { value: '', label: 'Todas' },
  { value: 'construccion', label: 'Construcción' },
  { value: 'electricidad', label: 'Instalaciones eléctricas' },
  { value: 'carpinteria', label: 'Carpintería' },
  { value: 'metalurgia', label: 'Metalurgia' },
  { value: 'mantenimiento', label: 'Mantenimiento' },
  { value: 'reformas', label: 'Reformas' },
  { value: 'medicion', label: 'Medición' },
];

export function ProductCatalog() {
  const [params, setParams] = useSearchParams();

  const filters = useMemo(() => {
    const categoriaSlug = params.get('categoria') || '';
    const category = categories.find((c) => c.slug === categoriaSlug);
    return {
      query: params.get('q') || '',
      categoryId: category?.id,
      categorySlug: categoriaSlug,
      powerType: params.get('alimentacion') || '',
      voltage: params.get('voltaje') || '',
      application: params.get('aplicacion') || '',
    };
  }, [params]);

  const results = useMemo(
    () =>
      filterProducts({
        query: filters.query,
        categoryId: filters.categoryId,
        powerType: filters.powerType || undefined,
        voltage: filters.voltage || undefined,
        application: filters.application || undefined,
      }),
    [filters],
  );

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const clearAll = () => setParams({}, { replace: true });

  const activeCount = [
    filters.query,
    filters.categorySlug,
    filters.powerType,
    filters.voltage,
    filters.application,
  ].filter(Boolean).length;

  return (
    <section className="catalog" aria-labelledby="catalog-title">
      <div className="catalog__toolbar">
        <div>
          <h2 id="catalog-title">Catálogo de productos</h2>
          <p>
            {results.length} resultado{results.length === 1 ? '' : 's'}
            {activeCount > 0 ? ` · ${activeCount} filtro(s) activo(s)` : ''}
          </p>
        </div>
        {activeCount > 0 ? (
          <button type="button" className="btn btn--outline" onClick={clearAll}>
            Limpiar filtros
          </button>
        ) : null}
      </div>

      <div className="catalog__layout">
        <aside className="catalog-filters" aria-label="Filtros de catálogo">
          <label className="filter-field">
            <span>Buscar</span>
            <input
              type="search"
              value={filters.query}
              onChange={(e) => update('q', e.target.value)}
              placeholder="Modelo, nombre…"
            />
          </label>

          <label className="filter-field">
            <span>Categoría</span>
            <select
              value={filters.categorySlug}
              onChange={(e) => update('categoria', e.target.value)}
            >
              <option value="">Todas</option>
              {categories.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-field">
            <span>Alimentación</span>
            <select
              value={filters.powerType}
              onChange={(e) => update('alimentacion', e.target.value)}
            >
              {powerOptions.map((o) => (
                <option key={o.value || 'all'} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-field">
            <span>Voltaje</span>
            <select
              value={filters.voltage}
              onChange={(e) => update('voltaje', e.target.value)}
            >
              {voltageOptions.map((o) => (
                <option key={o.value || 'all'} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-field">
            <span>Aplicación</span>
            <select
              value={filters.application}
              onChange={(e) => update('aplicacion', e.target.value)}
            >
              {applicationOptions.map((o) => (
                <option key={o.value || 'all'} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          {activeCount > 0 ? (
            <ul className="active-filters">
              {filters.query ? (
                <li>
                  Búsqueda: <strong>{filters.query}</strong>
                </li>
              ) : null}
              {filters.categorySlug ? (
                <li>
                  Categoría:{' '}
                  <strong>
                    {
                      categories.find((c) => c.slug === filters.categorySlug)
                        ?.name
                    }
                  </strong>
                </li>
              ) : null}
              {filters.powerType ? (
                <li>
                  Alimentación: <strong>{filters.powerType}</strong>
                </li>
              ) : null}
              {filters.voltage ? (
                <li>
                  Voltaje: <strong>{filters.voltage}</strong>
                </li>
              ) : null}
              {filters.application ? (
                <li>
                  Aplicación: <strong>{filters.application}</strong>
                </li>
              ) : null}
            </ul>
          ) : null}
        </aside>

        <div className="catalog__results">
          {results.length === 0 ? (
            <div className="error-block" role="status">
              No encontramos productos con esos filtros. Probá ampliar la
              búsqueda o limpiar los filtros.
            </div>
          ) : (
            <ul className="product-grid">
              {results.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
