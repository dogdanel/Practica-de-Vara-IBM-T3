import React from 'react';
import './SectionHeader.css';

export interface SectionHeaderProps {
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  className = '',
}) => {
  return (
    <div className={`section-header ${className}`.trim()}>
      <h3 className="section-header__title">{title}</h3>
    </div>
  );
};