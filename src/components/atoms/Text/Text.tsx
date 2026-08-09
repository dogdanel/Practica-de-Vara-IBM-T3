import type { ReactNode } from 'react';
import './Text.css';

interface TextProps {
  children: ReactNode;
  className?: string;
}

export default function Text({ children, className = '' }: TextProps) {
  return <p className={`text ${className}`.trim()}>{children}</p>;
}
