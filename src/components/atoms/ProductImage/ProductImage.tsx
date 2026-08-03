import React from 'react';
import './ProductImage.css';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`product-image ${className}`.trim()}>
      <img 
        src={src} 
        alt={alt} 
        className="product-image__img" 
      />
    </div>
  );
};