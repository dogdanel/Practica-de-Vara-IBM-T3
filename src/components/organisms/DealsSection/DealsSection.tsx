import React from "react";
import { DealsSectionHeader } from "../../molecules/DealsSectionHeader/DealsSectionHeader";
import { DealCard } from "../../molecules/DealCard/DealCard";
import type { DealCardProps } from "../../molecules/DealCard/DealCard";
import type { TranslationKey } from "../../../i18n";
import "./DealsSection.css";

export interface DealsSectionProps {
 titleKey?: TranslationKey;
 linkTextKey?: TranslationKey;
 deals: Array<Omit<DealCardProps, "className"> & { id: string | number }>;
 onLinkClick?: () => void;
 className?: string;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
 titleKey = "deals.title",
 linkTextKey = "deals.seeAll",
 deals,
 onLinkClick,
 className = "",
}) => {
 return (
  <section className={`deals-section ${className}`.trim()}>
   <DealsSectionHeader
    titleKey={titleKey}
    linkTextKey={linkTextKey}
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
