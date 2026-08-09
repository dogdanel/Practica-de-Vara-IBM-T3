import { IMAGES } from '../../../constants';
import { useTranslation } from '../../../i18n';
import './Logo.css';

export default function Logo() {
  const { t } = useTranslation();

  return (
    <div className="logo">
      <img src={IMAGES.logo} alt={t('footer.brand.logoAlt')} className="logo__image" />
    </div>
  );
}
