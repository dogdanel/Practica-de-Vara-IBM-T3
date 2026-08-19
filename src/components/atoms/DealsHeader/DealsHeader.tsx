import React from "react";
import { useTranslation } from "../../../i18n";
import type { TranslationKey } from "../../../i18n";
import "./DealsHeader.css";

export interface DealsHeaderProps {
 titleKey?: TranslationKey;
 children?: React.ReactNode;
 className?: string;
}

export const DealsHeader: React.FC<DealsHeaderProps> = ({
 titleKey,
 children,
 className = "",
}) => {
 const { t } = useTranslation();
 const content = titleKey ? t(titleKey) : children;

 return <h3 className={`deals-header ${className}`.trim()}>{content}</h3>;
};
