// src/components/molecules/DealCard/DealCard.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AddToCartButton } from '../../atoms/AddToCartButton/AddToCartButton';
import './DealCard.css';

export interface DealCardProps {
  imageSrc: string;
  title: string;
  brand: string;
  price: string;
  oldPrice?: string;
  onAddToCart?: () => void;
  className?: string;
}

export const DealCard: React.FC<DealCardProps> = ({
  imageSrc,
  title,
  brand,
  price,
  oldPrice,
  onAddToCart,
  className = '',
}) => {
  const { t } = useTranslation();

  return (
    <div className={`deal-card ${className}`.trim()}>
      <div className="deal-card__banner">
        <img src={imageSrc} alt={title} className="deal-card__image" />
      </div>

      <div className="deal-card__content">
        <h4 className="deal-card__title">{title}</h4>

        <div className="deal-card__brand-info">
          <span className="deal-card__by-text">{t('productCard.by', 'By')}</span>
          <span className="deal-card__brand-name">{brand}</span>
        </div>

        <div className="deal-card__footer">
          <div className="deal-card__prices">
            <span className="deal-card__price">{price}</span>
            {oldPrice && <span className="deal-card__old-price">{oldPrice}</span>}
          </div>

          <AddToCartButton onClick={onAddToCart} />
        </div>
      </div>
    </div>
  );
};