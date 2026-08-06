import React from 'react';
import './EmptyStarIcon.css';

interface EmptyStarIconProps {
  size?: number;
  className?: string;
}

export const EmptyStarIcon: React.FC<EmptyStarIconProps> = ({ 
  size = 16, 
  className = '' 
}) => {
  return (
    <svg 
      className={`empty-star-icon ${className}`.trim()}
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
};