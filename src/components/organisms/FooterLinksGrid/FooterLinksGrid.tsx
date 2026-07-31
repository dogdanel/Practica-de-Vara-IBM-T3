import FooterColumn, {
  type FooterColumnLink,
} from '../../molecules/FooterColumn/FooterColumn';
import './FooterLinksGrid.css';

interface FooterColumnConfig {
  id: string;
  titleKey: string;
  links: FooterColumnLink[];
}

const COLUMNS: FooterColumnConfig[] = [
  {
    id: 'company',
    titleKey: 'footer.columns.company.title',
    links: [
      'aboutUs',
      'deliveryInformation',
      'privacyPolicy',
      'termsAndConditions',
      'contactUs',
      'supportCenter',
      'careers',
    ].map((key) => ({ labelKey: `footer.columns.company.links.${key}` })),
  },
  {
    id: 'account',
    titleKey: 'footer.columns.account.title',
    links: [
      'signIn',
      'viewCart',
      'myWishlist',
      'trackMyOrder',
      'helpTicket',
      'shippingDetails',
      'compareProducts',
    ].map((key) => ({ labelKey: `footer.columns.account.links.${key}` })),
  },
  {
    id: 'corporate',
    titleKey: 'footer.columns.corporate.title',
    links: [
      'becomeAVendor',
      'affiliateProgram',
      'farmBusiness',
      'farmCareers',
      'ourSuppliers',
      'accessibility',
      'promotions',
    ].map((key) => ({ labelKey: `footer.columns.corporate.links.${key}` })),
  },
  {
    id: 'popular',
    titleKey: 'footer.columns.popular.title',
    links: [
      'milk',
      'butter',
      'eggs',
      'marmalades',
      'sourCream',
      'tea',
      'cheese',
    ].map((key) => ({ labelKey: `footer.columns.popular.links.${key}` })),
  },
];

export default function FooterLinksGrid() {
  return (
    <div className="footer-links-grid">
      {COLUMNS.map((column) => (
        <FooterColumn key={column.id} titleKey={column.titleKey} links={column.links} />
      ))}
    </div>
  );
}
