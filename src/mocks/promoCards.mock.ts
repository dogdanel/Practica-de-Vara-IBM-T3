import type { TranslationKey } from "../i18n";
import "../styles/tokens.css";

export interface PromoCardData {
 id: string;
 titleKey: TranslationKey;
 buttonLabelKey?: TranslationKey;
 imageSrc: string;
 bgColor: string;
}

export const promoCardsData: PromoCardData[] = [
 {
  id: "1",
  titleKey: "promos.card1Title",
  buttonLabelKey: "promos.shopNow",
  imageSrc: "/src/assets/Onions.png",
  bgColor: "var(--promo-color1)",
 },
 {
  id: "2",
  titleKey: "promos.card2Title",
  buttonLabelKey: "promos.shopNow",
  imageSrc: "/src/assets/Strawberries.png",
  bgColor: "var(--promo-color2)",
 },
 {
  id: "3",
  titleKey: "promos.card3Title",
  buttonLabelKey: "promos.shopNow",
  imageSrc: "/src/assets/Vegetables.png",
  bgColor: "var(--promo-color3)",
 },
];
