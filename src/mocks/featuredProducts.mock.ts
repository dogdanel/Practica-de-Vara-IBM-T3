import Meatballs from '../assets/Product1.png';
import Watermelon from '../assets/OrganicMelon.png';
import RedRice from '../assets/Product1.png';
import Almonds from '../assets/Product1.png';

export interface CompactProduct {
  id: string | number;
  imageSrc: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
  oldPrice?: string;
}

export interface FeaturedColumnData {
  id: string;
  title: string;
  products: CompactProduct[];
}

export const FEATURED_PRODUCTS_MOCK: FeaturedColumnData[] = [
  {
    id: 'top-selling',
    title: 'Top Selling',
    products: [
      {
        id: 101,
        imageSrc: '/images/product-2-cutout.png',
        title: 'All Natural Style Chicken Meatballs',
        rating: 5,
        reviewCount: 3,
        price: '$52.85',
        oldPrice: '$55.80',
      },
      {
        id: 102,
        imageSrc: '/images/product-3-cutout.png',
        title: "Angie’s Sweet & Salty Kettle Corn",
        rating: 5,
        reviewCount: 1,
        price: '$48.85',
        oldPrice: '$52.80',
      },
      {
        id: 103,
        imageSrc: '/images/product-8-cutout.png',
        title: 'Gorton’s Beer Battered Fish Fillets',
        rating: 0,
        reviewCount: 0,
        price: '$23.85',
        oldPrice: '$25.80',
      },
    ],
  },
  {
    id: 'trending',
    title: 'Trending Products',
    products: [
      {
        id: 201,
        imageSrc: '/images/OrganicWatermelon.png',
        title: 'Seeds of Change Organic Watermelon',
        rating: 5,
        reviewCount: 1,
        price: '$61.50',
        oldPrice: '$66.00',
      },
      {
        id: 202,
        imageSrc: '/images/product-12-cutout.png',
        title: 'Frozen vegetables broccoli, spinach',
        rating: 5,
        reviewCount: 1,
        price: '$71.00',
        oldPrice: '$75.00',
      },
      {
        id: 203,
        imageSrc: '/images/product-8-cutout.png',
        title: 'Gorton’s Beer Battered Fish Fillets',
        rating: 0,
        reviewCount: 0,
        price: '$23.85',
        oldPrice: '$25.80',
      },
    ],
  },
  {
    id: 'recently-added',
    title: 'Recently added',
    products: [
      {
        id: 301,
        imageSrc: '/images/product-1-cutout.png',
        title: 'Seeds of Change Organic Red Rice',
        rating: 3,
        reviewCount: 1,
        price: '$28.85',
        oldPrice: '$32.80',
      },
      {
        id: 302,
        imageSrc: '/images/product-2-cutout.png',
        title: 'All Natural Style Chicken Meatballs',
        rating: 5,
        reviewCount: 3,
        price: '$52.85',
        oldPrice: '$55.80',
      },
      {
        id: 303,
        imageSrc: '/images/product-3-cutout.png',
        title: "Angie’s Sweet & Salty Kettle Corn",
        rating: 5,
        reviewCount: 1,
        price: '$48.85',
        oldPrice: '$54.80',
      },
    ],
  },
  {
    id: 'top-rated',
    title: 'Top Rated',
    products: [
      {
        id: 401,
        imageSrc: '/images/product-5-cutout.png',
        title: 'Blue Almonds Lightly Salted Vegetables',
        rating: 5,
        reviewCount: 1,
        price: '$23.85',
        oldPrice: '$25.80',
      },
      {
        id: 402,
        imageSrc: '/images/OrganicCageEggs.png',
        title: 'Organic Cage Grade A Large Eggs',
        rating: 5,
        reviewCount: 1,
        price: '$21.00',
        oldPrice: '$24.00',
      },
      {
        id: 403,
        imageSrc: '/images/product-2-cutout.png',
        title: 'All Natural Style Chicken Meatballs',
        rating: 5,
        reviewCount: 3,
        price: '$52.85',
        oldPrice: '$55.80',
      },
    ],
  },
];