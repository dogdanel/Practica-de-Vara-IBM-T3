import { Phone } from 'lucide-react';
import './PhoneItem.css';

interface PhoneItemProps {
  number: string;
  label: string;
}

export default function PhoneItem({ number, label }: PhoneItemProps) {
  const tel = number.replace(/\s+/g, '');
  return (
    <div className="phone-item">
      <Phone size={26} className="phone-item__icon" />
      <div className="phone-item__content">
        <a href={`tel:${tel}`} className="phone-item__number">
          {number}
        </a>
        <span className="phone-item__label">{label}</span>
      </div>
    </div>
  );
}
