import { ProductCard } from './components/molecules/ProductCard/ProductCard';
import Product1 from './assets/Product1.png';
import OrganicEggs from './assets/OrganicEggs.png';
import './styles/variables.css';
import { DealsSection } from './components/organisms/DealsSection/DealsSection';

function App() {
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
      <DealsSection
        title="Deals of the Day"
        linkText="See All Deals"
        deals={[
          {
            id: 1,
            imageSrc: OrganicEggs,
            title: "Organic Cage Grade A Large Eggs",
            price: "$21.00",
            oldPrice: "$24.99",
            brand: "Hambger Hell",
          }
        ]}
      />
    </div>
  );
}

export default App;