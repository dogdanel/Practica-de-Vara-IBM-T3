import React from 'react';
import './CountBadge.css';

export interface CountBadgeProps {
  count: number | string;
  className?: string;
}

export const CountBadge: React.FC<CountBadgeProps> = ({
  count,
  className = '',
}) => {
  return (
    <span className={`count-badge ${className}`.trim()}>
      {count}
    </span>
  );
};