import React from "react";
import { DealsHeader } from "../../atoms/DealsHeader/DealsHeader";
import { AllDealsLink } from "../../atoms/AllDealsLink/AllDealsLink";
import { useTranslation } from "../../../i18n";
import type { TranslationKey } from "../../../i18n";
import "./DealsSectionHeader.css";

export interface DealsSectionHeaderProps {
 titleKey?: TranslationKey;
 linkTextKey?: TranslationKey;
 linkHref?: string;
 onLinkClick?: () => void;
 className?: string;
}

export const DealsSectionHeader: React.FC<DealsSectionHeaderProps> = ({
 titleKey = "deals.title",
 linkTextKey = "deals.seeAll",
 linkHref,
 onLinkClick,
 className = "",
}) => {
 const { t } = useTranslation();

 return (
  <div className={`deals-section-header ${className}`.trim()}>
   <DealsHeader>{t(titleKey)}</DealsHeader>
   <AllDealsLink text={t(linkTextKey)} href={linkHref} onClick={onLinkClick} />
  </div>
 );
};
