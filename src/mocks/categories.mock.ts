import type { TranslationKey } from "../i18n";

export interface CategoryItemData {
 id: string;
 titleKey: TranslationKey;
 count: number;
 icon: string;
}

export const CATEGORIES_DATA: CategoryItemData[] = [
 {
  id: "1",
  titleKey: "category.bakingMaterial",
  count: 10,
  icon: "ph:chef-hat",
 },
 {
  id: "2",
  titleKey: "category.breadAndJuice",
  count: 12,
  icon: "pinhead:loaf-of-bread-with-steam",
 },
 {
  id: "3",
  titleKey: "category.clothingAndBeauty",
  count: 8,
  icon: "hugeicons:suit-01",
 },
 {
  id: "4",
  titleKey: "category.dealsOfTheDay",
  count: 4,
  icon: "hugeicons:sale-tag-01",
 },
 {
  id: "5",
  titleKey: "category.freshFruit",
  count: 12,
  icon: "healthicons:fruits-outline",
 },
 {
  id: "6",
  titleKey: "category.freshSeafood",
  count: 6,
  icon: "pinhead:four-legged-squid",
 },
 {
  id: "7",
  titleKey: "category.milkAndDairies",
  count: 15,
  icon: "pinhead:milk-carton-and-cheese",
 },
 {
  id: "8",
  titleKey: "category.petFoodsAndToys",
  count: 8,
  icon: "griddy-icons:pet-friendly",
 },
 {
  id: "9",
  titleKey: "category.vegetables",
  count: 13,
  icon: "healthicons:vegetables-outline",
 },
 {
  id: "10",
  titleKey: "category.winesAndDrinks",
  count: 10,
  icon: "mdi:wine",
 },
 {
  id: "11",
  titleKey: "category.uncategorized",
  count: 20,  
  icon: "bx:category",
 },
];
