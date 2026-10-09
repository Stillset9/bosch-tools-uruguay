import { useEffect, useId, useState, type FormEvent } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import { OFFICIAL, SITE, WHATSAPP_NUMBER } from '../data/links';
import './Header.css';

const navItems = [
  { to: '/', label: 'Inicio', match: 'exact' as const },
  { to: '/herramientas', label: 'Herramientas', match: 'herramientas' as const },
  {
    to: '/herramientas?categoria=accesorios-brocas-discos',
    label: 'Accesorios',
    match: 'accesorios' as const,
  },
  {
    to: '/herramientas?categoria=medicion-laser',
    label: 'Medición',
    match: 'medicion' as const,
  },
  { to: '/ofertas', label: 'Ofertas', match: 'path' as const },
  { to: '/servicio-tecnico', label: 'Servicio técnico', match: 'path' as const },
  { to: '/contacto', label: 'Contacto', match: 'path' as const },
];

function useNavActive() {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const categoria = params.get('categoria') || '';

  return (item: (typeof navItems)[number]) => {
    if (item.match === 'exact') return pathname === '/';
    if (item.match === 'path') return pathname === item.to.split('?')[0];
    if (item.match === 'accesorios') {
      return (
        pathname === '/herramientas' &&
        categoria === 'accesorios-brocas-discos'
      );
    }
    if (item.match === 'medicion') {
      return pathname === '/herramientas' && categoria === 'medicion-laser';
    }
    if (item.match === 'herramientas') {
      return (
        (pathname === '/herramientas' || pathname.startsWith('/producto/')) &&
        categoria !== 'accesorios-brocas-discos' &&
        categoria !== 'medicion-laser'
      );
    }
    return false;
  };
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const menuId = useId();
  const isNavActive = useNavActive();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (category) params.set('categoria', category);
    navigate(`/herramientas?${params.toString()}`);
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="disclaimer-banner">
        <div className="container">
          <p>{SITE.disclaimer}</p>
        </div>
      </div>

      <div className="site-header__bar">
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label={`${SITE.name} — inicio`}>
            <span className="brand__mark" aria-hidden="true">
              B
            </span>
            <span className="brand__text">
              <strong>BOSCH TOOLS</strong>
              <small>Uruguay · Catálogo profesional</small>
            </span>
          </Link>

          <form className="header-search" onSubmit={onSearch} role="search">
            <label htmlFor="header-category" className="sr-only">
              Categoría
            </label>
            <select
              id="header-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              {categories.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
            <label htmlFor="header-q" className="sr-only">
              Buscar productos
            </label>
            <input
              id="header-q"
              type="search"
              placeholder="Buscar modelo o herramienta…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="btn btn--red header-search__btn">
              Buscar
            </button>
          </form>

          <div className="header-actions">
            <a
              className="header-actions__link"
              href={OFFICIAL.dealers}
              target="_blank"
              rel="noopener noreferrer"
            >
              Distribuidores UY
            </a>
            {WHATSAPP_NUMBER ? (
              <a
                className="btn btn--red header-actions__wa"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            ) : null}
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">
                {open ? 'Cerrar menú' : 'Abrir menú'}
              </span>
              <span aria-hidden="true">{open ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      <nav
        id={menuId}
        className={`site-nav ${open ? 'is-open' : ''}`}
        aria-label="Principal"
      >
        <div className="container site-nav__inner">
          <form
            className="header-search header-search--mobile"
            onSubmit={onSearch}
            role="search"
          >
            <label htmlFor="mobile-q" className="sr-only">
              Buscar productos
            </label>
            <input
              id="mobile-q"
              type="search"
              placeholder="Buscar modelo o herramienta…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="btn btn--red">
              Buscar
            </button>
          </form>
          {navItems.map((item) => (
            <NavLink
              key={item.to + item.label}
              to={item.to}
              className={() =>
                isNavActive(item) ? 'site-nav__link is-active' : 'site-nav__link'
              }
              onClick={() => setOpen(false)}
              end={item.match === 'exact'}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
