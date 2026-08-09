import React from 'react';
import './CategoryText.css';


export interface CategoryTextProps {
  children: React.ReactNode;
  className?: string;
}

export const CategoryText: React.FC<CategoryTextProps> = ({
  children,
  className = '',
}) => {
  return (
    <span className={`category-text ${className}`.trim()}>
      {children}
    </span>
  );
};