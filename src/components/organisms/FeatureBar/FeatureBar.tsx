import FeatureItem from '../../molecules/FeatureItem/FeatureItem';
import { IMAGES } from '../../../constants';
import { useTranslation } from '../../../i18n';
import './FeatureBar.css';

const FEATURES = [
  { id: 'bestPrices', icon: IMAGES.features.bestPrices },
  { id: 'freeDelivery', icon: IMAGES.features.freeDelivery },
  { id: 'dailyDeal', icon: IMAGES.features.dailyDeal },
  { id: 'wideAssortment', icon: IMAGES.features.wideAssortment },
  { id: 'easyReturns', icon: IMAGES.features.easyReturns },
] as const;

export default function FeatureBar() {
  const { t } = useTranslation();

  return (
    <div className="feature-bar">
      {FEATURES.map((feature) => {
        const title = t(`features.${feature.id}.title`);

        return (
          <div key={feature.id} className="feature-bar__item">
            <FeatureItem
              icon={feature.icon}
              iconAlt={title}
              title={title}
              subtitle={t(`features.${feature.id}.subtitle`)}
            />
          </div>
        );
      })}
    </div>
  );
}
