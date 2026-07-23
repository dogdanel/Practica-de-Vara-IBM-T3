import type { IconComponent } from '../../../types.ts';
import './IconCircle.css';

interface IconCircleProps {
  icon: IconComponent;
  href?: string;
}

export default function IconCircle({ icon: Icon, href = '#' }: IconCircleProps) {
  return (
    <a href={href} className="icon-circle">
      <Icon size={16} />
    </a>
  );
}
