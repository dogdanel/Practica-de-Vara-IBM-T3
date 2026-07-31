import { ICON_SIZES } from '../../../constants';
import type { IconComponent } from '../../../types';
import './IconCircle.css';

interface IconCircleProps {
  icon: IconComponent;
  href?: string;
  label: string;
}

export default function IconCircle({ icon: Icon, href = '#', label }: IconCircleProps) {
  return (
    <a href={href} className="icon-circle" aria-label={label}>
      <Icon size={ICON_SIZES.sm} />
    </a>
  );
}
