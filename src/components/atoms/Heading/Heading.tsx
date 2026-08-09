import type { ReactNode } from 'react';
import './Heading.css';

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({ children, className = '' }: HeadingProps) {
  return <h4 className={`heading ${className}`.trim()}>{children}</h4>;
}
