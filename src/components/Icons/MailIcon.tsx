import { Mail } from 'lucide-react';
import { DEFAULT_ICON_SIZE, type IconProps } from './Icons.types';

export default function MailIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
  return <Mail size={size} {...props} />;
}
