import SubscribeForm from '../../molecules/SubscribeForm/SubscribeForm';
import { IMAGES } from '../../../constants';
import { useTranslation } from '../../../i18n';
import './Hero.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-wrapper">
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">{t('hero.title')}</h1>
          <p className="hero__subtitle">
            {t('hero.subtitlePrefix')}{' '}
            <span className="hero__subtitle-accent">{t('hero.subtitleBrand')}</span>
          </p>
          <SubscribeForm />
        </div>
        <img src={IMAGES.heroDelivery} alt={t('hero.imageAlt')} className="hero__image" />
      </div>
    </section>
  );
}
