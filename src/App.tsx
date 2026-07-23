import { ProductCard } from './components/molecules/ProductCard/ProductCard';
import Product1 from './assets/Product1.png';

function App() {
  return (
    <div style={{ padding: '40px', background: '#f8f9fa' }}>
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

export default App;