
import { ProductCard } from './components/molecules/ProductCard/ProductCard';
import Product1 from './assets/Product1.png';
import './styles/variables.css';

function App() {
  return (
    <div style={{ padding: '1rem', background: 'var(--background-color)' }}>
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
    </div>
  );
}

import React from 'react';
import { CategoryMenu } from './organisms/CategoryMenu/CategoryMenu';

export const App: React.FC = () => {
  return (
    <div style={{ padding: '40px' }}>
      <CategoryMenu />
    </div>
  );
};

export default App;