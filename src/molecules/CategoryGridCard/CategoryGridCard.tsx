import React from 'react';
import { CategoryIcon } from '../../atoms/CategoryIcon/CategoryIcon';
import { CategoryText } from '../../atoms/CategoryText/CategoryText';
import { CountBadge } from '../../atoms/CountBadge/CountBadge';
import './CategoryGridCard.css';

interface CategoryCardVerticalProps {
  icon: string;
  title: string;
  count: number;
  bgColor?: string;
  onClick?: () => void;
}

export const CategoryGridCard: React.FC<CategoryCardVerticalProps> = ({
  icon,
  title,
  count,
  onClick,
}) => {
  return (
    <div
      className="category-grid-card"
      onClick={onClick}
    >
      <div className="category-grid-card__icon-wrapper">
        <CategoryIcon src={icon} alt={title} />
      </div>
      <div className="category-grid-card__content">
        <CategoryText>{title}</CategoryText>
        <CountBadge count={count} />
      </div>
    </div>
  );
};