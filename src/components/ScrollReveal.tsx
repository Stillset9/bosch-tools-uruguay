import type { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props {
  children: ReactNode;
  className?: string;
}

export function ScrollReveal({ children, className = '' }: Props) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
