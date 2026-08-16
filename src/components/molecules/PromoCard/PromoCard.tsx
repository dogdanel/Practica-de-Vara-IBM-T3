import Button from "../../atoms/Button/Button";
import { Icon } from "@iconify/react";
import "./PromoCard.css";

interface PromoCardProps {
 title: string;
 buttonLabel: string;
 imageSrc: string;
 bgColor: string;
 onButtonClick?: () => void;
}

export const PromoCard = ({
 title,
 buttonLabel,
 imageSrc,
 bgColor,
 onButtonClick,
}: PromoCardProps) => {
 return (
  <article className="promo-card" style={{ backgroundColor: bgColor }}>
   <div className="promo-card__content">
    <h3 className="promo-card__title">{title}</h3>
    <Button
     variant="primary"
     iconAfter={<Icon icon="mdi:arrow-right-thin" width={18} height={18} />}
     onClick={onButtonClick}
     className="promo-card__button"
    >
     {buttonLabel}
    </Button>
   </div>
   <div className="promo-card__image-wrapper">
    <img src={imageSrc} alt={title} className="promo-card__image" />
   </div>
  </article>
 );
};
