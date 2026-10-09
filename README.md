# Bosch Tools Uruguay

Sitio web informativo de herramientas **Bosch Professional** orientado al mercado uruguayo.

> **Importante:** no es la tienda oficial de Robert Bosch ni un canal de venta autorizado por el fabricante. Precios, stock y disponibilidad deben confirmarse con [distribuidores oficiales](https://www.bosch-professional.com/uy/es/dealers/).

## Stack

- React 19 + TypeScript
- Vite
- React Router
- CSS modular por componente (sin frameworks de UI)

## Cómo iniciar

Requiere Node.js 20+.

```bash
npm install
npm run dev
```

Abrí la URL que indique Vite (por defecto `http://localhost:5173`).

## Cómo publicar

```bash
npm run build
npm run preview
```

El build genera `dist/`. Podés publicar esa carpeta en cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, S3, etc.).

Para rutas amigables en hosting estático, configurá fallback a `index.html` (SPA).

## WhatsApp (opcional)

Solo se muestra si configurás un número real autorizado:

```bash
cp .env.example .env
# Editá VITE_WHATSAPP_NUMBER=598XXXXXXXX
```

## Datos oficiales usados

- Sitio: https://www.bosch-professional.com/uy/es/
- Distribuidores: https://www.bosch-professional.com/uy/es/dealers/
- Servicios: https://www.bosch-professional.com/uy/es/servicios/
- Teléfono atención UY: +598 2604 7011
- Email: atencionalcliente@uy.bosch.com
- Horario publicado: lunes a viernes, 08:00–18:00

Las especificaciones de productos del catálogo de referencia se tomaron de fichas oficiales (p. ej. GSB 18V-65, GWS 18V-10, GLM 50-27 C, GLL 2-12 G, ProCORE18V 12.0Ah). Donde no hay precio verificado se muestra **Consultar precio**.

## Operativo vs. pendiente de backend

### Operativo (frontend)

- Navegación y rutas legibles
- Buscador y filtros reales sobre datos locales
- Fichas de producto
- Formularios con validación
- Envío de consulta vía `mailto:` a la casilla oficial (el usuario debe confirmar el envío en su cliente de correo)
- Enlaces oficiales a distribuidores, servicios, 18V y AMPShare
- Página 404, SEO básico, accesibilidad por teclado, `prefers-reduced-motion`
- Diseño responsive

### Requiere backend / integración

- Persistencia de formularios / CRM
- Inventario, stock y precios en UYU en tiempo real
- Checkout o compra online
- WhatsApp con número de negocio (solo env var)
- Sincronización automática del catálogo oficial
- Autenticación de usuarios

## Imágenes y licencias

- Escenas industriales: Unsplash License (fotos de atmósfera, no fichas oficiales).
- Productos: placeholders claramente marcados como **imagen provisional** (no se reutilizan fotografías oficiales de Bosch sin autorización).
- Tipografías: Google Fonts — Barlow Condensed y Source Sans 3.

## Estructura

```
src/
  components/   Header, Hero, CategoryGrid, ProductCard, ProductCatalog,
                ProductDetail, ProfessionalSystems, WirelessSection,
                ServiceSection, ContactForm, Footer…
  data/         products, categories, links, faqs, activities
  pages/        Home, catálogo, ficha, servicios, contacto, ofertas, 404
```
