import React from 'react';
import './DealsHeader.css';

export interface DealsHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const DealsHeader: React.FC<DealsHeaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <h2 className={`deals-header ${className}`.trim()}>
      {children}
    </h2>
  );
};