import PhoneItem from '../../molecules/PhoneItem/PhoneItem';
import SocialIcon, { type SocialPlatform } from '../../atoms/SocialIcon/SocialIcon';
import { CONTACT } from '../../../constants';
import { useTranslation } from '../../../i18n';
import './FooterBottomBar.css';

const SOCIAL_PLATFORMS: SocialPlatform[] = ['facebook', 'twitter', 'skype', 'instagram'];

export default function FooterBottomBar() {
  const { t } = useTranslation();

  return (
    <div className="footer-bottom-bar">
      <p className="footer-bottom-bar__copyright">
        {t('footer.bottomBar.copyright', { year: new Date().getFullYear() })}
        <br />
        {t('footer.bottomBar.rightsReserved')}
      </p>

      <div className="footer-bottom-bar__phones">
        <PhoneItem number={CONTACT.phonePrimary} label={t('footer.bottomBar.workingHours')} />
        <PhoneItem number={CONTACT.phoneSecondary} label={t('footer.bottomBar.supportCenter')} />
      </div>

      <div className="footer-bottom-bar__social">
        <div className="footer-bottom-bar__social-row">
          <span className="footer-bottom-bar__social-label">{t('common.followUs')}</span>
          <div className="footer-bottom-bar__social-icons">
            {SOCIAL_PLATFORMS.map((platform) => (
              <SocialIcon key={platform} platform={platform} />
            ))}
          </div>
        </div>
        <p className="footer-bottom-bar__discount">{t('footer.bottomBar.discount')}</p>
      </div>
    </div>
  );
}
