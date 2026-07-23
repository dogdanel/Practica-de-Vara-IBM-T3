import FeatureItem from '../../molecules/FeatureItem/FeatureItem';
import './FeatureBar.css';

const features = [
  { icon: '/icons/best-prices.png', iconAlt: 'Best prices & offers', title: 'Best prices & offers', subtitle: 'Orders $50 or more' },
  { icon: '/icons/free-delivery.png', iconAlt: 'Free delivery', title: 'Free delivery', subtitle: '24/7 amazing services' },
  { icon: '/icons/daily-deal.png', iconAlt: 'Great daily deal', title: 'Great daily deal', subtitle: 'When you sign up' },
  { icon: '/icons/wide-assortment.png', iconAlt: 'Wide assortment', title: 'Wide assortment', subtitle: 'Mega Discounts' },
  { icon: '/icons/easy-returns.png', iconAlt: 'Easy returns', title: 'Easy returns', subtitle: 'Within 30 days' },
];

export default function FeatureBar() {
  return (
    <div className="feature-bar">
      {features.map((feature) => (
        <div key={feature.title} className="feature-bar__item">
          <FeatureItem {...feature} />
        </div>
      ))}
    </div>
  );
}
