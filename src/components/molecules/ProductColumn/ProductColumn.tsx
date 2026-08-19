import React from "react";
import { CategoryHeader } from "../../atoms/CategoryHeader/CategoryHeader";
import { CompactProductCard } from "../CompactProductCard/CompactProductCard";
import type { CompactProduct } from "../../../mocks/featuredProducts.mock";
import type { TranslationKey } from "../../../i18n";
import "./ProductColumn.css";

export interface ProductColumnProps {
 titleKey?: TranslationKey;
 title?: string;
 products: CompactProduct[];
 className?: string;
}

export const ProductColumn: React.FC<ProductColumnProps> = ({
 titleKey,
 title,
 products,
 className = "",
}) => {
 return (
  <div className={`product-column ${className}`.trim()}>
   <CategoryHeader titleKey={titleKey} title={title} />
   <div className="product-column__list">
    {products.map((product) => (
     <CompactProductCard key={product.id} {...product} />
    ))}
   </div>
  </div>
 );
};
