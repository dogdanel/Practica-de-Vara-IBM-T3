import type { ReactNode } from 'react';
import './FooterLink.css';

interface FooterLinkProps {
  href?: string;
  children: ReactNode;
}

export default function FooterLink({ href = '#', children }: FooterLinkProps) {
  return (
    <a href={href} className="footer-link">
      {children}
    </a>
  );
}
