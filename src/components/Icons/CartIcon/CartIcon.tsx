import React from 'react';
import { ICON_SIZES } from '../../../constants';
import type { IconProps } from '../types';
import './CartIcon.css';

export const CartIcon: React.FC<IconProps> = ({
  size = ICON_SIZES.default,
  className = '',
  title,
}) => {
  return (
    <svg
      className={`cart-icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
};
