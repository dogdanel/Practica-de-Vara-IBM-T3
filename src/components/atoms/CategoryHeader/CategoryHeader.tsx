import React from "react";
import { useTranslation } from "../../../i18n";
import type { TranslationKey } from "../../../i18n";
import "./CategoryHeader.css";

export interface CategoryHeaderProps {
 titleKey: TranslationKey;
 className?: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
 titleKey,
 className = "",
}) => {
 const { t: translation } = useTranslation();

 return (
  <div className={`category-header ${className}`.trim()}>
   <h3 className="category-header__title">{translation(titleKey)}</h3>
  </div>
 );
};

export const CategoryHeaderSBCM: React.FC<CategoryHeaderProps> = ({
 titleKey,
 className = "",
}) => {
 const { t: translation } = useTranslation();

 return (
  <div className={`category-header-SBCM ${className}`.trim()}>
   <h3 className="category-header-SBCM__title">{translation(titleKey)}</h3>
  </div>
 );
};
