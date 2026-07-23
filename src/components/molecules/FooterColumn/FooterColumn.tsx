import Heading from '../../atoms/Heading/Heading';
import FooterLink from '../../atoms/FooterLink/FooterLink';
import './FooterColumn.css';

interface FooterColumnLink {
  label: string;
  href?: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterColumnLink[];
  titleWidth?: number;
  titleHeight?: number;
}

export default function FooterColumn({
  title,
  links,
  titleWidth,
  titleHeight,
}: FooterColumnProps) {
  const width = titleWidth ?? 207.3;

  return (
    <div className="footer-column" style={{ width: `${width}px` }}>
      <Heading className="heading--no-margin" width={titleWidth} height={titleHeight}>
        {title}
      </Heading>

      <div className="footer-column__links" style={{ width: `${width}px` }}>
        {links.map((link) => (
          <FooterLink key={link.label} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
      </div>
    </div>
  );
}
