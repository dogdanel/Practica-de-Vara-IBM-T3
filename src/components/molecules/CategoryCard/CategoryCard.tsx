import React from 'react';
import { CategoryIcon } from '../../atoms/CategoryIcon/CategoryIcon';
import { CategoryText } from '../../atoms/CategoryText/CategoryText';
import { CountBadge } from '../../atoms/CountBadge/CountBadge';
import './CategoryCard.css';
export interface CategoryCardProps {
  icon: string;
  title: string;
  count: number | string;
  onClick?: () => void;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  count,
  onClick,
  className = '',
}) => {
  return (
    <div className={`category-card ${className}`.trim()} onClick={onClick}>
      <div className="category-card__content">
        <CategoryIcon src={icon} alt={title} />
        <CategoryText>{title}</CategoryText>
      </div>
      <CountBadge count={count} />
    </div>
  );
};