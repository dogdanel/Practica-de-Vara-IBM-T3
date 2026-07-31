import { Phone } from 'lucide-react';
import { DEFAULT_ICON_SIZE, type IconProps } from './Icons.types';

export default function PhoneIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
  return <Phone size={size} {...props} />;
}
