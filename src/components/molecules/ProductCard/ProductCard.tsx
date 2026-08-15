import React from 'react';
import type { ReactNode } from 'react';
import { ProductImage } from '../../atoms/ProductImage/ProductImage';
import { ProductText } from '../../atoms/ProductText/ProductText';
import { ProductBadge } from '../../atoms/ProductBadge/ProductBadge';
import { EmptyStarIcon, FullStarIcon } from '../../Icons';
import { AddToCartButton } from '../../atoms/AddToCartButton/AddToCartButton';
import { ICON_SIZES, RATING_MAX_STARS } from '../../../constants';
import { useTranslation } from '../../../i18n';
import type { TranslationKey } from '../../../i18n';
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
  discountPercentage?: number;
  discountBadgeVariant?: 'discount' | 'discount-blue';
  statusBadgeKey?: TranslationKey;
  statusBadgeVariant?: 'sale' | 'new' | 'hot';
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
  discountPercentage,
  discountBadgeVariant = 'discount',
  statusBadgeKey,
  statusBadgeVariant = 'sale',
  onAddToCart,
}) => {
  const { t } = useTranslation();

  const renderStars = () => {
    const stars: ReactNode[] = [];
    for (let i = 1; i <= RATING_MAX_STARS; i++) {
      if (i <= rating) {
        stars.push(<FullStarIcon key={i} size={ICON_SIZES.star} />);
      } else {
        stars.push(<EmptyStarIcon key={i} size={ICON_SIZES.star} />);
      }
    }
    return stars;
  };

  return (
    <div className="product-card">
      {discountPercentage !== undefined && (
        <div className="product-card__badge-wrapper product-card__badge-wrapper--left">
          <ProductBadge variant={discountBadgeVariant} position="left">
            {t('badge.discount', { value: discountPercentage })}
          </ProductBadge>
        </div>
      )}

      {statusBadgeKey && (
        <div className="product-card__badge-wrapper product-card__badge-wrapper--right">
          <ProductBadge variant={statusBadgeVariant} position="right">
            {t(statusBadgeKey)}
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

        <div
          className="product-card__rating"
          aria-label={t('product.rating.ariaLabel', {
            rating,
            max: RATING_MAX_STARS,
          })}
        >
          <div className="product-card__stars">{renderStars()}</div>
          <ProductText variant="rating" as="span">
            {t('product.reviews', { count: reviewCount })}
          </ProductText>
        </div>

        <div className="product-card__brand-info">
          <ProductText variant="brand" as="span">
            {t('product.by')}{' '}
            <span className="product-card__brand-name">{brand}</span>
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