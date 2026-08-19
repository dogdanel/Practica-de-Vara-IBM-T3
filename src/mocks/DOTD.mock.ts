import type { TranslationKey } from "../i18n";
import OrganicEggs from "../assets/OrganicEggs.png";
import Vanilla from "../assets/Vanilla.png";
import OrganicMelon from "../assets/OrganicMelon.png";
import Coffee from "../assets/Coffee.png";

export interface DealItem {
 id: number;
 imageSrc: string;
 titleKey: TranslationKey;
 title?: string;
 price: string;
 oldPrice: string;
 brand: string;
}

export const DEALS_MOCK: DealItem[] = [
 {
  id: 1,
  imageSrc: OrganicEggs,
  titleKey: "deals.products.organicEggs",
  price: "$21.00",
  oldPrice: "$24.99",
  brand: "Hambger Hel",
 },
 {
  id: 2,
  imageSrc: Vanilla,
  titleKey: "deals.products.cinnamonVanilla",
  price: "$51.00",
  oldPrice: "$55.00",
  brand: "Hambger Hel",
 },
 {
  id: 3,
  imageSrc: OrganicMelon,
  titleKey: "deals.products.organicWatermelon",
  price: "$61.50",
  oldPrice: "$66.80",
  brand: "Hambger Hel",
 },
 {
  id: 4,
  imageSrc: Coffee,
  titleKey: "deals.products.coffeeCreamer",
  price: "$52.80",
  oldPrice: "$53.80",
  brand: "Totino's Pizza",
 },
];
