import React from 'react';
import './CategoryHeader.css';

export interface CategoryHeaderProps {
  title: string;
  className?: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  className = '',
}) => {
  return (
    <div className={`category-header ${className}`.trim()}>
      <h3 className="category-header__title">{title}</h3>
    </div>
  );
};