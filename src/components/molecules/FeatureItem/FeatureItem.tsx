import './FeatureItem.css';

interface FeatureItemProps {
  icon: string;
  iconAlt: string;
  title: string;
  subtitle: string;
}

export default function FeatureItem({ icon, iconAlt, title, subtitle }: FeatureItemProps) {
  return (
    <div className="feature-item">
      <img src={icon} alt={iconAlt} className="feature-item__icon" />
      <div className="feature-item__content">
        <h5 className="feature-item__title">{title}</h5>
        <p className="feature-item__subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
