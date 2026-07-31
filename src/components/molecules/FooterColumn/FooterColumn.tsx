import Heading from '../../atoms/Heading/Heading';
import FooterLink from '../../atoms/FooterLink/FooterLink';
import { useTranslation } from '../../../i18n';
import './FooterColumn.css';

export interface FooterColumnLink {
  /** Translation key resolved by the i18n provider. */
  labelKey: string;
  href?: string;
}

interface FooterColumnProps {
  titleKey: string;
  links: FooterColumnLink[];
}

export default function FooterColumn({ titleKey, links }: FooterColumnProps) {
  const { t } = useTranslation();

  return (
    <div className="footer-column">
      <Heading className="heading--no-margin">{t(titleKey)}</Heading>

      <div className="footer-column__links">
        {links.map((link) => (
          <FooterLink key={link.labelKey} href={link.href}>
            {t(link.labelKey)}
          </FooterLink>
        ))}
      </div>
    </div>
  );
}
