export const DEFAULT_LOCALE = 'en';

export const translations = {
  en: {
    'app.title': 'Product Card',
    'shop.title': 'Popular Products',
    'shop.filters.ariaLabel': 'Product categories',
    'product.addToCart': 'Add',
    'product.addToCart.ariaLabel': 'Add product to cart',
    'product.by': 'By',
    'product.reviews': '({count})',
    'product.rating.ariaLabel': '{rating} out of {max} stars',
    'badge.sale': 'Sale',
    'badge.new': 'New',
    'badge.hot': 'Hot',
    'badge.discount': '{value}%',
    'category.all': 'All',
    'category.bakingMaterial': 'Baking material',
    'category.freshFruits': 'Fresh Fruits',
    'category.milksAndDairies': 'Milks & Dairies',
    'category.meats': 'Meats',
    'category.vegetables': 'Vegetables',
  },
  ro: {
    'app.title': 'Card produs',
    'shop.title': 'Produse populare',
    'shop.filters.ariaLabel': 'Categorii de produse',
    'product.addToCart': 'Adaugă',
    'product.addToCart.ariaLabel': 'Adaugă produsul în coș',
    'product.by': 'De la',
    'product.reviews': '({count})',
    'product.rating.ariaLabel': '{rating} din {max} stele',
    'badge.sale': 'Reducere',
    'badge.new': 'Nou',
    'badge.hot': 'Popular',
    'badge.discount': '{value}%',
    'category.all': 'Toate',
    'category.bakingMaterial': 'Ingrediente de copt',
    'category.freshFruits': 'Fructe proaspete',
    'category.milksAndDairies': 'Lactate',
    'category.meats': 'Carne',
    'category.vegetables': 'Legume',
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)['en'];
