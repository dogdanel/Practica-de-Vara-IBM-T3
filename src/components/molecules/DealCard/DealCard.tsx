import React from "react";
import { useTranslation } from "../../../i18n";
import type { TranslationKey } from "../../../i18n";
import { AddToCartButton } from "../../atoms/AddToCartButton/AddToCartButton";
import "./DealCard.css";

export interface DealCardProps {
 imageSrc: string;
 titleKey: TranslationKey;
 brand: string;
 price: string;
 oldPrice?: string;
 onAddToCart?: () => void;
 className?: string;
}

export const DealCard: React.FC<DealCardProps> = ({
 imageSrc,
 titleKey,
 brand,
 price,
 oldPrice,
 onAddToCart,
 className = "",
}) => {
 const { t } = useTranslation();
 const translatedTitle = t(titleKey);

 return (
  <div className={`deal-card ${className}`.trim()}>
   <div className="deal-card__banner">
    <img src={imageSrc} alt={translatedTitle} className="deal-card__image" />
   </div>

   <div className="deal-card__content">
    <h4 className="deal-card__title">{translatedTitle}</h4>

    <div className="deal-card__brand-info">
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
