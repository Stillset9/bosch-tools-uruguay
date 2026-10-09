import './ProductPlaceholder.css';

interface Props {
  label: string;
  className?: string;
}

/** Imagen provisional identificada — no es fotografía oficial de producto. */
export function ProductPlaceholder({ label, className = '' }: Props) {
  return (
    <div
      className={`product-placeholder ${className}`.trim()}
      role="img"
      aria-label={`Imagen provisional del modelo ${label}`}
    >
      <div className="product-placeholder__tool" aria-hidden="true" />
      <span className="product-placeholder__model">{label}</span>
      <span className="product-placeholder__note">Imagen provisional</span>
    </div>
  );
}
