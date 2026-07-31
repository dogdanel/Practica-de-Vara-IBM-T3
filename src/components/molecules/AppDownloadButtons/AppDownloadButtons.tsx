import { IMAGES } from '../../../constants';
import { useTranslation } from '../../../i18n';
import './AppDownloadButtons.css';

export default function AppDownloadButtons() {
  const { t } = useTranslation();

  return (
    <div className="app-download-buttons">
      <a href="#" className="app-download-buttons__link">
        <img
          src={IMAGES.badges.googlePlay}
          alt={t('footer.appInstall.googlePlayAlt')}
          className="app-download-buttons__badge"
        />
      </a>
      <a href="#" className="app-download-buttons__link">
        <img
          src={IMAGES.badges.appStore}
          alt={t('footer.appInstall.appStoreAlt')}
          className="app-download-buttons__badge"
        />
      </a>
    </div>
  );
}
