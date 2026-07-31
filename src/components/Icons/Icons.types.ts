import type { SVGProps } from 'react';
import { ICON_SIZES } from '../../constants';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  /** Rendered width & height in px (see `ICON_SIZES`). */
  size?: number;
}

export const DEFAULT_ICON_SIZE = ICON_SIZES.sm;
