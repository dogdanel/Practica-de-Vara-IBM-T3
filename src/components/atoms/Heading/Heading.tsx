import type { ReactNode } from 'react';
import './Heading.css';

interface HeadingProps {
  children: ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

export default function Heading({
  children,
  className = '',
  width = 207.3,
  height = 29,
}: HeadingProps) {
  return (
    <h4
      className={`heading ${className}`.trim()}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
    </h4>
  );
}
