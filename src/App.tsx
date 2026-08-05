import { ProductCard } from './components/molecules/ProductCard/ProductCard';
import Product1 from './assets/Product1.png';
import OrganicEggs from './assets/OrganicEggs.png';
import Vanilla from './assets/Vanilla.png';
import OrganicMelon from './assets/OrganicMelon.png';
import Coffee from './assets/Coffee.png';
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
            brand: "Hambger Hel",
          },
          {
            id: 2,
            imageSrc: Vanilla,
            title: "Naturally Flavored Cinnamon Vanilla",
            price: "$51.00",
            oldPrice: "$55.00",
            brand: "Hambger Hel",
          },
          {
            id: 3,
            imageSrc: OrganicMelon,
            title: "Seed of Change Organic Watermelon",
            price: "$61.50",
            oldPrice: "$66.80",
            brand: "Hambger Hel",
          },
          {
            id: 4,
            imageSrc: Coffee,
            title: " Nestle Coffee Mate Coffee Creamer",
            price: "$52.80",
            oldPrice: "$53.80",
            brand: "Totino's Pizza",
          }

        ]}
      />
    </div>
  );
}

export default App;