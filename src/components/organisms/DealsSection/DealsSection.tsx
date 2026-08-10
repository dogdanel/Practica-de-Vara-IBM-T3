import React from "react";
import { DealsSectionHeader } from "../../molecules/DealsSectionHeader/DealsSectionHeader";
import { DealCard } from "../../molecules/DealCard/DealCard";
import type { DealCardProps } from "../../molecules/DealCard/DealCard";
import { DEALS_MOCK } from "../../../mocks/DOTD.mock.ts";
import "./DealsSection.css";

export interface DealsSectionProps {
 title?: string;
 linkText?: string;
 deals?: Array<Omit<DealCardProps, "className"> & { id: string | number }>;
 onLinkClick?: () => void;
 className?: string;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
 title = "Deals of the Day",
 linkText = "See All Deals",
 deals = DEALS_MOCK,
 onLinkClick,
 className = "",
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
