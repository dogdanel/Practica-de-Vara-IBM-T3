import React from "react";
import { useTranslation } from "../../../i18n";
import type { TranslationKey } from "../../../i18n";
import "./CompactProductCard.css";

export interface CompactProductCardProps {
 imageSrc: string;
 titleKey?: TranslationKey;
 title?: string;
 rating: number;
 reviewCount: number;
 price: string;
 oldPrice?: string;
 className?: string;
}

export const CompactProductCard: React.FC<CompactProductCardProps> = ({
 imageSrc,
 titleKey,
 title,
 rating,
 reviewCount,
 price,
 oldPrice,
 className = "",
}) => {
 const { t } = useTranslation();
 const displayTitle = titleKey ? t(titleKey) : (title ?? "");

 return (
  <article className={`compact-product-card ${className}`.trim()}>
   <div className="compact-product-card__image-container">
    <img
     src={imageSrc}
     alt={displayTitle}
     className="compact-product-card__image"
    />
   </div>
   <div className="compact-product-card__content">
    <h4 className="compact-product-card__title">{displayTitle}</h4>
    <div className="compact-product-card__rating">
     <span className="compact-product-card__stars">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
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
