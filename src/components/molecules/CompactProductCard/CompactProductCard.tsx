import React from 'react';
import './CompactProductCard.css';

export interface CompactProductCardProps {
  imageSrc: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
  oldPrice?: string;
  className?: string;
}

export const CompactProductCard: React.FC<CompactProductCardProps> = ({
  imageSrc,
  title,
  rating,
  reviewCount,
  price,
  oldPrice,
  className = '',
}) => {
  return (
    <article className={`compact-product-card ${className}`.trim()}>
      <div className="compact-product-card__image-container">
        <img src={imageSrc} alt={title} className="compact-product-card__image" />
      </div>
      <div className="compact-product-card__content">
        <h4 className="compact-product-card__title">{title}</h4>
        <div className="compact-product-card__rating">
          <span className="compact-product-card__stars">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </span>
          <span className="compact-product-card__reviews">({reviewCount})</span>
        </div>
        <div className="compact-product-card__prices">
          <span className="compact-product-card__price">{price}</span>
          {oldPrice && (
            <span className="compact-product-card__old-price">{oldPrice}</span>
          )}
        </div>
      </div>
    </article>
  );
};