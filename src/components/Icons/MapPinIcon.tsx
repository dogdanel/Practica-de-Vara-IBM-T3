import { MapPin } from 'lucide-react';
import { DEFAULT_ICON_SIZE, type IconProps } from './Icons.types';

export default function MapPinIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
  return <MapPin size={size} {...props} />;
}
