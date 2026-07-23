import type { ReactNode } from 'react';
import type { IconComponent } from '../../../types';
import './ContactItem.css';

interface ContactItemProps {
  icon: IconComponent;
  label?: string;
  text?: string;
  children?: ReactNode;
}

export default function ContactItem({ icon: Icon, label, text, children }: ContactItemProps) {
  return (
    <div className="contact-item">
      <Icon size={16} className="contact-item__icon" />
      <span className="contact-item__text">
        {label ? <strong className="contact-item__label">{label} </strong> : null}
        {children ?? text}
      </span>
    </div>
  );
}
