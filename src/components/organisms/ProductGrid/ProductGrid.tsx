import React from "react";
import { ProductCard } from "../../molecules/ProductCard/ProductCard";
import type { ProductData } from "../../../mocks/products";
import "./ProductGrid.css";

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
     imageAltKey={product.imageAltKey}
     categoryKey={product.categoryKey}
     titleKey={product.titleKey}
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
