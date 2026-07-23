import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from '../../atoms/Logo/Logo';
import Text from '../../atoms/Text/Text';
import ContactItem from '../../molecules/ContactItem/ContactItem';
import './FooterBrand.css';

export default function FooterBrand() {
  return (
    <div className="footer-brand">
      <Logo />
      <Text className="footer-brand__description">Awesome grocery store website template</Text>
      <div className="footer-brand__contacts">
        <ContactItem icon={MapPin} label="Address">
          5171 W Campbell Ave undefined Kent, Utah 53127 United States
        </ContactItem>
        <ContactItem icon={Phone} label="Call Us">
          <a href="tel:+15400251245553" className="contact-item__link">(+91)-540-025-124553</a>
        </ContactItem>
        <ContactItem icon={Mail} label="Email">
          <a href="mailto:sale@Nest.com" className="contact-item__link">sale@Nest.com</a>
        </ContactItem>
        <ContactItem icon={Clock} label="Hours">10:00 - 18:00, Mon - Sat</ContactItem>
      </div>
    </div>
  );
}
