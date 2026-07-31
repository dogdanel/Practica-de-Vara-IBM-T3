import { Clock } from 'lucide-react';
import { DEFAULT_ICON_SIZE, type IconProps } from './Icons.types';

export default function ClockIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
  return <Clock size={size} {...props} />;
}
