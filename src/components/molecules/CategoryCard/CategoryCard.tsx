import React from "react";
import { CategoryIcon } from "../../atoms/CategoryIcon/CategoryIcon";
import { CategoryText } from "../../atoms/CategoryText/CategoryText";
import { CountBadge } from "../../atoms/CountBadge/CountBadge";
import { useTranslation } from "../../../i18n";
import type { TranslationKey } from "../../../i18n";
import "./CategoryCard.css";

export interface CategoryCardProps {
 icon: string;
 titleKey: TranslationKey;
 count: number | string;
 onClick?: () => void;
 className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
 icon,
 titleKey,
 count,
 onClick,
 className = "",
}) => {
 const { t: translation } = useTranslation();
 const translatedTitle = translation(titleKey);

 return (
  <div className={`category-card ${className}`.trim()} onClick={onClick}>
   <div className="category-card__content">
    <CategoryIcon src={icon} alt={translatedTitle} />
    <CategoryText>{translatedTitle}</CategoryText>
   </div>
   <CountBadge count={count} />
  </div>
 );
};
