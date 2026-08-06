import React from 'react';
import type { ReactNode } from 'react';
import './ProductBadge.css';

interface ProductBadgeProps {
  children: ReactNode;
  variant?: 'discount' | 'sale' | 'hot' | 'new';
  position?: 'left' | 'right';
  className?: string;
}

export const ProductBadge: React.FC<ProductBadgeProps> = ({
  children,
  variant = 'discount',
  position = 'left',
  className = ''
}) => {
  return (
    <span
      className={`product-badge product-badge--${variant} product-badge--${position} ${className}`.trim()}
    >
      {children}
    </span>
  );
};