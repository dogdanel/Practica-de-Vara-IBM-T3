import React from "react";
import Button from "../../atoms/Button/Button";
import { Icon } from "@iconify/react";
import { useTranslation } from "../../../i18n";
import type { TranslationKey } from "../../../i18n";
import "./PromoCard.css";

export interface PromoCardProps {
 titleKey?: TranslationKey;
 title?: string;
 buttonLabelKey?: TranslationKey;
 buttonLabel?: string;
 imageSrc: string;
 bgColor: string;
 onButtonClick?: () => void;
}

export const PromoCard: React.FC<PromoCardProps> = ({
 titleKey,
 title,
 buttonLabelKey,
 buttonLabel,
 imageSrc,
 bgColor,
 onButtonClick,
}) => {
 const { t } = useTranslation();
 const displayTitle = titleKey ? t(titleKey) : (title ?? "");
 const displayButtonLabel = buttonLabelKey
  ? t(buttonLabelKey)
  : (buttonLabel ?? "");

 return (
  <article className="promo-card" style={{ backgroundColor: bgColor }}>
   <div className="promo-card__content">
    <h3 className="promo-card__title">{displayTitle}</h3>
    <Button
     variant="primary"
     iconAfter={<Icon icon="mdi:arrow-right-thin" width={18} height={18} />}
     onClick={onButtonClick}
     className="promo-card__button"
    >
     {displayButtonLabel}
    </Button>
   </div>
   <div className="promo-card__image-wrapper">
    <img src={imageSrc} alt={displayTitle} className="promo-card__image" />
   </div>
  </article>
 );
};
