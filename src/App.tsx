import React from 'react';
import { ProductCard } from './components/molecules/ProductCard/ProductCard';
import Product1 from './assets/Product1.png';
import './styles/variables.css';
import { CategoryMenu } from './components/organisms/CategoryMenu/CategoryMenu';
import { CategoryCard } from './molecules/CategoryCard/CategoryCard';
import BakingMaterial from '../public/CategoryIcons/BakingMaterial.png';
import { ShopByCategoryMenu } from './organisms/ShopByCategoryMenu/ShopByCategoryMenu';

export const App: React.FC = () => {
  return (
    <div style={{ padding: '1rem', background: 'var(--background)' }}>
      <ProductCard
        imageSrc={Product1}
        imageAlt="All Natural Style Chicken Meatballs"
        category="Bread and Juice"
        title="All Natural Style Chicken Meatballs"
        rating={4}
        reviewCount={3}
        brand="NestFood"
        price="$52.85"
        oldPrice="$55.80"
        badgeText="6%"
        badgeVariant="discount"
        badgePosition="left"
      />
      <CategoryMenu />
      <CategoryCard
        icon={BakingMaterial}
        title="Baking Material"
        count={1}
      />
      <ShopByCategoryMenu />
    </div>
  );
};

export default App;