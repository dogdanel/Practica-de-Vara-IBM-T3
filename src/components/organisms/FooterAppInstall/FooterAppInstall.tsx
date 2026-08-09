import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';
import AppDownloadButtons from '../../molecules/AppDownloadButtons/AppDownloadButtons';
import { IMAGES } from '../../../constants';
import { useTranslation } from '../../../i18n';
import './FooterAppInstall.css';

export default function FooterAppInstall() {
  const { t } = useTranslation();

  return (
    <div className="footer-app-install">
      <Heading>{t('footer.appInstall.title')}</Heading>
      <Text className="footer-app-install__label">{t('footer.appInstall.subtitle')}</Text>
      <AppDownloadButtons />

      <Text className="footer-app-install__label footer-app-install__label--spaced">
        {t('footer.appInstall.paymentsTitle')}
      </Text>
      <img
        src={IMAGES.badges.paymentMethods}
        alt={t('footer.appInstall.paymentsAlt')}
        className="footer-app-install__payments-img"
      />
    </div>
  );
}
