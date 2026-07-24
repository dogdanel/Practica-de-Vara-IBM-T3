import React from 'react';
import './CategoryIcon.css';

export interface CategoryIconProps {
  src: string;
  alt: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({
  src,
  alt,
  className = '',
}) => {
  return (
    <div className={`category-icon ${className}`.trim()}>
      <img src={src} alt={alt} className="category-icon__image" />
    </div>
  );
};