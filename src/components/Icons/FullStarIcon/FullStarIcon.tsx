import React from 'react';
import { ICON_SIZES } from '../../../constants';
import type { IconProps } from '../types';
import './FullStarIcon.css';

export const FullStarIcon: React.FC<IconProps> = ({
  size = ICON_SIZES.star,
  className = '',
  title,
}) => {
  return (
    <svg
      className={`full-star-icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
};
