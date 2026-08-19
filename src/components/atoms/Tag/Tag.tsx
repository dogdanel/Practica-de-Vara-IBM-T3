import React from "react";
import { useTranslation } from "../../../i18n";
import type { TranslationKey } from "../../../i18n";
import "./Tag.css";

export interface TagProps {
 labelKey?: TranslationKey;
 label?: string;
 onRemove?: () => void;
 className?: string;
}

export const Tag: React.FC<TagProps> = ({
 labelKey,
 label,
 onRemove,
 className = "",
}) => {
 const { t } = useTranslation();
 const displayLabel = labelKey ? t(labelKey) : (label ?? "");

 return (
  <button
   type="button"
   className={`product-tag ${className}`.trim()}
   onClick={onRemove}
   aria-label={`Remove tag ${displayLabel}`}
  >
   <span className="product-tag__close">✕</span>
   <span className="product-tag__label">{displayLabel}</span>
  </button>
 );
};
