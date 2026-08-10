import React from 'react';
import { DealsHeader } from '../../atoms/DealsHeader/DealsHeader';
import { AllDealsLink } from '../../atoms/AllDealsLink/AllDealsLink';
import './DealsSectionHeader.css';

export interface DealsSectionHeaderProps {
  title: string;
  linkText: string;
  linkHref?: string;
  onLinkClick?: () => void;
  className?: string;
}

export const DealsSectionHeader: React.FC<DealsSectionHeaderProps> = ({
  title,
  linkText,
  linkHref,
  onLinkClick,
  className = '',
}) => {
  return (
    <div className={`deals-section-header ${className}`.trim()}>
      <DealsHeader>{title}</DealsHeader>
      <AllDealsLink text={linkText} href={linkHref} onClick={onLinkClick} />
    </div>
  );
};