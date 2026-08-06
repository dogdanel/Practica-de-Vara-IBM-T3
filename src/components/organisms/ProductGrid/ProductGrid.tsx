import React from 'react';
import { ProductCard } from '../../molecules/ProductCard/ProductCard';
import type { ProductData } from '../../../data/products';
import './ProductGrid.css';

interface ProductGridProps {
  products: readonly ProductData[];
  onAddToCart?: (product: ProductData) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
}) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageSrc={product.imageSrc}
          imageAlt={product.imageAlt}
          category={product.category}
          title={product.title}
          rating={product.rating}
          reviewCount={product.reviewCount}
          brand={product.brand}
          price={product.price}
          oldPrice={product.oldPrice}
          discountPercentage={product.discountPercentage}
          discountBadgeVariant={product.discountBadgeVariant}
          statusBadgeKey={product.statusBadgeKey}
          statusBadgeVariant={product.statusBadgeVariant}
          onAddToCart={() => onAddToCart?.(product)}
        />
      ))}
    </div>
  );
};
