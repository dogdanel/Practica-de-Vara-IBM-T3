import React from 'react';
import type { ElementType, ReactNode } from 'react';
import './ProductText.css';

export type ProductTextVariant = 
  | 'category' 
  | 'title' 
  | 'brand' 
  | 'review-count' 
  | 'price-current' 
  | 'price-old' 
  | 'button' 
  | 'badge'
  | 'rating';

interface ProductTextProps {
  children: ReactNode;
  variant: ProductTextVariant;
  as?: ElementType;
  className?: string;
}

export const ProductText: React.FC<ProductTextProps> = ({
  children,
  variant,
  as: Component = 'span',
  className = '',
}) => {
  return (
    <Component className={`product-text product-text--${variant} ${className}`.trim()}>
      {children}
    </Component>
  );
};


// 