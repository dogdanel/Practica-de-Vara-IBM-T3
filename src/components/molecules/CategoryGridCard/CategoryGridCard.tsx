import React from "react";
import { CategoryIcon } from "../../atoms/CategoryIcon/CategoryIcon";
import { CategoryText } from "../../atoms/CategoryText/CategoryText";
import { CountBadge } from "../../atoms/CountBadge/CountBadge";
import { useTranslation } from "../../../i18n";
import type { TranslationKey } from "../../../i18n";
import "./CategoryGridCard.css";

interface CategoryCardVerticalProps {
 icon: string;
 titleKey: TranslationKey;
 count: number;
 bgColor?: string;
 onClick?: () => void;
}

export const CategoryGridCard: React.FC<CategoryCardVerticalProps> = ({
 icon,
 titleKey,
 count,
 onClick,
}) => {
 const { t: translation } = useTranslation();
 const translatedTitle = translation(titleKey);

 return (
  <div className="category-grid-card" onClick={onClick}>
   <div className="category-grid-card__icon-wrapper">
    <CategoryIcon src={icon} alt={translatedTitle} size={60} />
   </div>
   <div className="category-grid-card__content">
    <CategoryText>{translatedTitle}</CategoryText>
    <CountBadge count={count} />
   </div>
  </div>
 );
};
