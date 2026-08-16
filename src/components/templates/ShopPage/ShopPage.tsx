import React from 'react';
import { CategoryFilter } from '../../molecules/CategoryFilter/CategoryFilter';
import { ProductGrid } from '../../organisms/ProductGrid/ProductGrid';
import { categories, products } from '../../../mocks/products';
import type { ProductData } from '../../../mocks/products';
import { useTranslation } from '../../../i18n';
import './ShopPage.css';

export const ShopPage: React.FC = () => {
  const { t } = useTranslation();

  const handleAddToCart = (product: ProductData) => {
    console.log('Added to cart:', product.title);
  };

  return (
    <div className="shop-page">
      <header className="shop-page__header">
        <h1 className="shop-page__title">{t('shop.title')}</h1>
        <CategoryFilter
          categories={categories}
          defaultActive="category.all"
          className="shop-page__filters"
        />
      </header>
      <ProductGrid products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};
