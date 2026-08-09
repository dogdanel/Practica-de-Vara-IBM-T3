export const en = {
  common: {
    followUs: 'Follow Us',
  },
  hero: {
    title: 'Stay home & get your daily needs from our shop',
    subtitlePrefix: 'Start Your Daily Shopping with',
    subtitleBrand: 'Nest Mart',
    imageAlt: 'Nest Mart courier delivering a box of fresh fruit and vegetables',
    subscribe: {
      placeholder: 'Your email address',
      submit: 'Subscribe',
    },
  },
  features: {
    bestPrices: {
      title: 'Best prices & offers',
      subtitle: 'Orders $50 or more',
    },
    freeDelivery: {
      title: 'Free delivery',
      subtitle: '24/7 amazing services',
    },
    dailyDeal: {
      title: 'Great daily deal',
      subtitle: 'When you sign up',
    },
    wideAssortment: {
      title: 'Wide assortment',
      subtitle: 'Mega Discounts',
    },
    easyReturns: {
      title: 'Easy returns',
      subtitle: 'Within 30 days',
    },
  },
  footer: {
    brand: {
      logoAlt: 'Nest Mart & Grocery',
      description: 'Awesome grocery store website template',
      addressLabel: 'Address',
      address: '5171 W Campbell Ave undefined Kent, Utah 53127 United States',
      callUsLabel: 'Call Us',
      emailLabel: 'Email',
      hoursLabel: 'Hours',
      hours: '10:00 - 18:00, Mon - Sat',
    },
    columns: {
      company: {
        title: 'Company',
        links: {
          aboutUs: 'About Us',
          deliveryInformation: 'Delivery Information',
          privacyPolicy: 'Privacy Policy',
          termsAndConditions: 'Terms & Conditions',
          contactUs: 'Contact Us',
          supportCenter: 'Support Center',
          careers: 'Careers',
        },
      },
      account: {
        title: 'Account',
        links: {
          signIn: 'Sign In',
          viewCart: 'View Cart',
          myWishlist: 'My Wishlist',
          trackMyOrder: 'Track My Order',
          helpTicket: 'Help Ticket',
          shippingDetails: 'Shipping Details',
          compareProducts: 'Compare products',
        },
      },
      corporate: {
        title: 'Corporate',
        links: {
          becomeAVendor: 'Become a Vendor',
          affiliateProgram: 'Affiliate Program',
          farmBusiness: 'Farm Business',
          farmCareers: 'Farm Careers',
          ourSuppliers: 'Our Suppliers',
          accessibility: 'Accessibility',
          promotions: 'Promotions',
        },
      },
      popular: {
        title: 'Popular',
        links: {
          milk: 'Milk & Flavoured Milk',
          butter: 'Butter and Margarine',
          eggs: 'Eggs Substitutes',
          marmalades: 'Marmalades',
          sourCream: 'Sour Cream and Dips',
          tea: 'Tea & Kombucha',
          cheese: 'Cheese',
        },
      },
    },
    appInstall: {
      title: 'Install App',
      subtitle: 'From App Store or Google Play',
      googlePlayAlt: 'Get it on Google Play',
      appStoreAlt: 'Download on the App Store',
      paymentsTitle: 'Secured Payment Gateways',
      paymentsAlt: 'VISA, Mastercard, Maestro, American Express',
    },
    bottomBar: {
      copyright: '© {{year}}, Nest – WordPress Ecommerce Template',
      rightsReserved: 'All rights reserved',
      workingHours: 'Working 8:00 - 22:00',
      supportCenter: '24/7 Support Center',
      discount: 'Up to 15% discount on your first subscribe',
    },
    social: {
      facebook: 'Facebook',
      twitter: 'Twitter',
      skype: 'Skype',
      instagram: 'Instagram',
    },
  },
} as const;

export type Translations = typeof en;
