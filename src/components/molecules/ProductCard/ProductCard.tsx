import React from 'react';
import type { ReactNode } from 'react';
import { ProductImage } from '../../atoms/ProductImage/ProductImage';
import { ProductText } from '../../atoms/ProductText/ProductText';
import { ProductBadge } from '../../atoms/ProductBadge/ProductBadge';
import { FullStarIcon } from '../../atoms/FullStarIcon/FullStarIcon';
import { EmptyStarIcon } from '../../atoms/EmptyStarIcon/EmptyStarIcon';
import { AddToCartButton } from '../../atoms/AddToCartButton/AddToCartButton';
import './ProductCard.css';

export interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  rating: number;
  reviewCount: number;
  brand: string;
  price: string;
  oldPrice?: string;
  badgeText?: string;
  badgeVariant?: 'discount' | 'sale' | 'hot' | 'new';
  badgePosition?: 'left' | 'right';
  onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  category,
  title,
  rating,
  reviewCount,
  brand,
  price,
  oldPrice,
  badgeText,
  badgeVariant = 'discount',
  badgePosition = 'left',
  onAddToCart,
}) => { 
  const renderStars = () => {
    const stars: ReactNode[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FullStarIcon key={i} size={14} />);
      } else {
        stars.push(<EmptyStarIcon key={i} size={14} />);
      }
    }
    return stars;
  };

  return (
    <div className="product-card">
      {badgeText && (
        <div className={`product-card__badge-wrapper product-card__badge-wrapper--${badgePosition}`}>
          <ProductBadge variant={badgeVariant} position={badgePosition}>
            {badgeText}
          </ProductBadge>
        </div>
      )}

      <div className="product-card__image-container">
        <ProductImage src={imageSrc} alt={imageAlt} />
      </div>

      <div className="product-card__content">
        <ProductText variant="category" as="span">
          {category}
        </ProductText>

        <ProductText variant="title" as="h3" className="product-card__title">
          {title}
        </ProductText>

        <div className="product-card__rating">
          <div className="product-card__stars">{renderStars()}</div>
          <ProductText variant="rating" as="span">
            ({reviewCount})
          </ProductText>
        </div>

        <div className="product-card__brand-info">
          <ProductText variant="brand" as="span">
            By <span className="product-card__brand-name">{brand}</span>
          </ProductText>
        </div>

        <div className="product-card__footer">
          <div className="product-card__prices">
            <ProductText variant="price-current" as="span">
              {price}
            </ProductText>
            {oldPrice && (
              <ProductText variant="price-old" as="span">
                {oldPrice}
              </ProductText>
            )}
          </div>

          <AddToCartButton onClick={onAddToCart} />
        </div>
      </div>
    </div>
  );
};