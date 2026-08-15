export interface DealData {
  id: string;
  imageSrc: string;
  title: string;
  brand: string;
  price: string;
  oldPrice?: string;
}

/** Deals of the Day, rendered by `DealsSection` on the home page. */
export const deals: readonly DealData[] = [
  {
    id: 'deal-1',
    imageSrc: '/images/product-4-cutout.png',
    title: 'Organic Cage Grade A Large Eggs',
    brand: 'Hambger Hel',
    price: '$21.00',
    oldPrice: '$24.99',
  },
  {
    id: 'deal-2',
    imageSrc: '/images/product-7-cutout.png',
    title: 'Naturally Flavored Cinnamon Vanilla',
    brand: 'Hambger Hel',
    price: '$51.00',
    oldPrice: '$55.00',
  },
  {
    id: 'deal-3',
    imageSrc: '/images/product-10-cutout.png',
    title: 'Seed of Change Organic Watermelon',
    brand: 'Hambger Hel',
    price: '$61.50',
    oldPrice: '$66.80',
  },
  {
    id: 'deal-4',
    imageSrc: '/images/product-13-cutout.png',
    title: 'Nestle Coffee Mate Coffee Creamer',
    brand: "Totino's Pizza",
    price: '$52.80',
    oldPrice: '$53.80',
  },
];
