import FooterColumn from '../../molecules/FooterColumn/FooterColumn';
import './FooterLinksGrid.css';

const columns = [
  {
    title: 'Company',
    headingWidth: 207.3,
    headingHeight: 29,
    links: [
      { label: 'About Us' },
      { label: 'Delivery Information' },
      { label: 'Privacy Policy' },
      { label: 'Terms & Conditions' },
      { label: 'Contact Us' },
      { label: 'Support Center' },
      { label: 'Careers' },
    ],
  },
  {
    title: 'Account',
    headingWidth: 212.05,
    headingHeight: 29,
    links: [
      { label: 'Sign In' },
      { label: 'View Cart' },
      { label: 'My Wishlist' },
      { label: 'Track My Order' },
      { label: 'Help Ticket' },
      { label: 'Shipping Details' },
      { label: 'Compare products' },
    ],
  },
  {
    title: 'Corporate',
    headingWidth: 204.06,
    headingHeight: 29,
    links: [
      { label: 'Become a Vendor' },
      { label: 'Affiliate Program' },
      { label: 'Farm Business' },
      { label: 'Farm Careers' },
      { label: 'Our Suppliers' },
      { label: 'Accessibility' },
      { label: 'Promotions' },
    ],
  },
  {
    title: 'Popular',
    headingWidth: 223.14,
    headingHeight: 29,
    links: [
      { label: 'Milk & Flavoured Milk' },
      { label: 'Butter and Margarine' },
      { label: 'Eggs Substitutes' },
      { label: 'Marmalades' },
      { label: 'Sour Cream and Dips' },
      { label: 'Tea & Kombucha' },
      { label: 'Cheese' },
    ],
  },
];

export default function FooterLinksGrid() {
  return (
    <div
      className="footer-links-grid"
      style={{
        gridTemplateColumns: columns.map((c) => `${c.headingWidth}px`).join(' '),
      }}
    >
      {columns.map((column) => (
        <FooterColumn
          key={column.title}
          title={column.title}
          links={column.links}
          titleWidth={column.headingWidth}
          titleHeight={column.headingHeight}
        />
      ))}
    </div>
  );
}
