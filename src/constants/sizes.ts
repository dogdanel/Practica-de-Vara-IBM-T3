/** Icon sizes used with the components from `src/components/Icons`. */
export const ICON_SIZES = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 26,
  xl: 30,
  /** Default icon size (used when a component omits `size`). */
  default: 20,
  /** Rating stars inside the product card. */
  star: 12,
  /** Cart icon inside the add-to-cart button. */
  cart: 16,
} as const;

/** Number of stars rendered by the product rating. */
export const RATING_MAX_STARS = 5;

/** Static asset paths, so no string literal is duplicated across components. */
export const IMAGES = {
  logo: '/logo.png',
  heroDelivery: '/hero/delivery-veggies.png',
  badges: {
    googlePlay: '/badges/google-play.png',
    appStore: '/badges/app-store.png',
    paymentMethods: '/badges/payment-methods.png',
  },
  features: {
    bestPrices: '/icons/best-prices.png',
    freeDelivery: '/icons/free-delivery.png',
    dailyDeal: '/icons/daily-deal.png',
    wideAssortment: '/icons/wide-assortment.png',
    easyReturns: '/icons/easy-returns.png',
  },
} as const;

/** Contact details rendered in the footer. */
export const CONTACT = {
  phonePrimary: '1900646666',
  phoneSecondary: '1900648888',
  supportPhone: '(+91)-540-025-124553',
  supportPhoneHref: 'tel:+15400251245553',
  email: 'sale@Nest.com',
  emailHref: 'mailto:sale@Nest.com',
} as const;
