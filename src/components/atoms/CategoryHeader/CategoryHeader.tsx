import React from "react";
import { useTranslation } from "../../../i18n";
import type { TranslationKey } from "../../../i18n";
import "./CategoryHeader.css";

export interface CategoryHeaderProps {
 titleKey?: TranslationKey;
 title?: string;
 className?: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
 titleKey,
 title,
 className = "",
}) => {
 const { t: translation } = useTranslation();
 const displayTitle = titleKey ? translation(titleKey) : (title ?? "");

 return (
  <div className={`category-header ${className}`.trim()}>
   <h3 className="category-header__title">{displayTitle}</h3>
  </div>
 );
};

export const CategoryHeaderSBCM: React.FC<CategoryHeaderProps> = ({
 titleKey,
 title,
 className = "",
}) => {
 const { t: translation } = useTranslation();
 const displayTitle = titleKey ? translation(titleKey) : (title ?? "");

 return (
  <div className={`category-header-SBCM ${className}`.trim()}>
   <h3 className="category-header-SBCM__title">{displayTitle}</h3>
  </div>
 );
};
