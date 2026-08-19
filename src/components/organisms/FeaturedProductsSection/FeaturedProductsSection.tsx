import React from "react";
import { ProductColumn } from "../../molecules/ProductColumn/ProductColumn";
import {
 FEATURED_PRODUCTS_MOCK,
 FeaturedColumnData,
} from "../../../mocks/featuredProducts.mock";
import "./FeaturedProductsSection.css";

export interface FeaturedProductsSectionProps {
 columns?: FeaturedColumnData[];
 className?: string;
}

export const FeaturedProductsSection: React.FC<
 FeaturedProductsSectionProps
> = ({ columns = FEATURED_PRODUCTS_MOCK, className = "" }) => {
 return (
  <section className={`featured-products-section ${className}`.trim()}>
   <div className="featured-products-section__grid">
    {columns.map((column) => (
     <ProductColumn
      key={column.id}
      titleKey={column.titleKey}
      title={column.title}
      products={column.products}
     />
    ))}
   </div>
  </section>
 );
};
