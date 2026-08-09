import React from 'react';
import './CategoryIcon.css';
import { Icon } from '@iconify/react';

export interface CategoryIconProps {
  src: string;
  alt: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({
  src,
  className = '',
}) => {
  return (
    <div className={`category-icon ${className}`.trim()}>
      <Icon icon={src} width="30" height="30" style={{ color: '#24bf04' }} />
    </div>
  );
};