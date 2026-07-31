import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from '../../Icons';
import Logo from '../../atoms/Logo/Logo';
import Text from '../../atoms/Text/Text';
import ContactItem from '../../molecules/ContactItem/ContactItem';
import { CONTACT } from '../../../constants';
import { useTranslation } from '../../../i18n';
import './FooterBrand.css';

export default function FooterBrand() {
  const { t } = useTranslation();

  return (
    <div className="footer-brand">
      <Logo />
      <Text className="footer-brand__description">{t('footer.brand.description')}</Text>
      <div className="footer-brand__contacts">
        <ContactItem icon={MapPinIcon} label={t('footer.brand.addressLabel')}>
          {t('footer.brand.address')}
        </ContactItem>
        <ContactItem icon={PhoneIcon} label={t('footer.brand.callUsLabel')}>
          <a href={CONTACT.supportPhoneHref} className="contact-item__link">
            {CONTACT.supportPhone}
          </a>
        </ContactItem>
        <ContactItem icon={MailIcon} label={t('footer.brand.emailLabel')}>
          <a href={CONTACT.emailHref} className="contact-item__link">
            {CONTACT.email}
          </a>
        </ContactItem>
        <ContactItem icon={ClockIcon} label={t('footer.brand.hoursLabel')}>
          {t('footer.brand.hours')}
        </ContactItem>
      </div>
    </div>
  );
}
