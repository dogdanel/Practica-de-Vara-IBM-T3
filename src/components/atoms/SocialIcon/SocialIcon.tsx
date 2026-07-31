import { FacebookIcon, InstagramIcon, SkypeIcon, TwitterIcon } from '../../Icons';
import { ICON_SIZES } from '../../../constants';
import { useTranslation } from '../../../i18n';
import type { IconComponent } from '../../../types';
import './SocialIcon.css';

export type SocialPlatform = 'facebook' | 'twitter' | 'skype' | 'instagram';

const ICONS: Record<SocialPlatform, IconComponent> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  skype: SkypeIcon,
  instagram: InstagramIcon,
};

interface SocialIconProps {
  platform: SocialPlatform;
  href?: string;
}

export default function SocialIcon({ platform, href = '#' }: SocialIconProps) {
  const { t } = useTranslation();
  const Icon = ICONS[platform];

  return (
    <a href={href} className="social-icon" aria-label={t(`footer.social.${platform}`)}>
      <Icon size={ICON_SIZES.xs} />
    </a>
  );
}
