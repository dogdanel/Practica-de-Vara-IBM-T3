import type { TranslationKey } from "../i18n";

export interface CompactProduct {
 id: string | number;
 imageSrc: string;
 titleKey: TranslationKey;
 title?: string;
 rating: number;
 reviewCount: number;
 price: string;
 oldPrice?: string;
}

export interface FeaturedColumnData {
 id: string;
 titleKey: TranslationKey;
 title?: string;
 products: CompactProduct[];
}

export const FEATURED_PRODUCTS_MOCK: FeaturedColumnData[] = [
 {
  id: "top-selling",
  titleKey: "featured.topSelling",
  products: [
   {
    id: 101,
    imageSrc: "/images/product-2-cutout.png",
    titleKey: "featured.products.chickenMeatballs",
    rating: 5,
    reviewCount: 3,
    price: "$52.85",
    oldPrice: "$55.80",
   },
   {
    id: 102,
    imageSrc: "/images/product-3-cutout.png",
    titleKey: "featured.products.kettleCorn",
    rating: 5,
    reviewCount: 1,
    price: "$48.85",
    oldPrice: "$52.80",
   },
   {
    id: 103,
    imageSrc: "/images/product-8-cutout.png",
    titleKey: "featured.products.fishFillets",
    rating: 0,
    reviewCount: 0,
    price: "$23.85",
    oldPrice: "$25.80",
   },
  ],
 },
 {
  id: "trending",
  titleKey: "featured.trending",
  products: [
   {
    id: 201,
    imageSrc: "/images/OrganicWatermelon.png",
    titleKey: "featured.products.watermelon",
    rating: 5,
    reviewCount: 1,
    price: "$61.50",
    oldPrice: "$66.00",
   },
   {
    id: 202,
    imageSrc: "/images/product-12-cutout.png",
    titleKey: "featured.products.broccoliSpinach",
    rating: 5,
    reviewCount: 1,
    price: "$71.00",
    oldPrice: "$75.00",
   },
   {
    id: 203,
    imageSrc: "/images/product-8-cutout.png",
    titleKey: "featured.products.fishFillets",
    rating: 0,
    reviewCount: 0,
    price: "$23.85",
    oldPrice: "$25.80",
   },
  ],
 },
 {
  id: "recently-added",
  titleKey: "featured.recentlyAdded",
  products: [
   {
    id: 301,
    imageSrc: "/images/product-1-cutout.png",
    titleKey: "featured.products.redRice",
    rating: 3,
    reviewCount: 1,
    price: "$28.85",
    oldPrice: "$32.80",
   },
   {
    id: 302,
    imageSrc: "/images/product-2-cutout.png",
    titleKey: "featured.products.chickenMeatballs",
    rating: 5,
    reviewCount: 3,
    price: "$52.85",
    oldPrice: "$55.80",
   },
   {
    id: 303,
    imageSrc: "/images/product-3-cutout.png",
    titleKey: "featured.products.kettleCorn",
    rating: 5,
    reviewCount: 1,
    price: "$48.85",
    oldPrice: "$54.80",
   },
  ],
 },
 {
  id: "top-rated",
  titleKey: "featured.topRated",
  products: [
   {
    id: 401,
    imageSrc: "/images/product-5-cutout.png",
    titleKey: "featured.products.blueAlmonds",
    rating: 5,
    reviewCount: 1,
    price: "$23.85",
    oldPrice: "$25.80",
   },
   {
    id: 402,
    imageSrc: "/images/OrganicCageEggs.png",
    titleKey: "featured.products.organicEggs",
    rating: 5,
    reviewCount: 1,
    price: "$21.00",
    oldPrice: "$24.00",
   },
   {
    id: 403,
    imageSrc: "/images/product-2-cutout.png",
    titleKey: "featured.products.chickenMeatballs",
    rating: 5,
    reviewCount: 3,
    price: "$52.85",
    oldPrice: "$55.80",
   },
  ],
 },
];
