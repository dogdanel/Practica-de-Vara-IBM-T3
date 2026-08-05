import React from 'react';
import { DealsSectionHeader } from '../../molecules/DealsSectionHeader/DealsSectionHeader';
import { DealCard} from '../../molecules/DealCard/DealCard';
import type { DealCardProps } from '../../molecules/DealCard/DealCard';
import './DealsSection.css';

export interface DealsSectionProps {
  title: string;
  linkText: string;
  deals: Array<Omit<DealCardProps, 'className'> & { id: string | number }>;
  onLinkClick?: () => void;
  className?: string;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  title,
  linkText,
  deals,
  onLinkClick,
  className = '',
}) => {
  return (
    <section className={`deals-section ${className}`.trim()}>
      <DealsSectionHeader
        title={title}
        linkText={linkText}
        onLinkClick={onLinkClick}
      />

      <div className="deals-section__grid">
        {deals.map((deal) => (
          <DealCard key={deal.id} {...deal} />
        ))}
      </div>
    </section>
  );
};