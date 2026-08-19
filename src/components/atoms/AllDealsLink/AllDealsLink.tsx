import React from "react";
import "./AllDealsLink.css";

export interface AllDealsLinkProps {
 text: string;
 href?: string;
 onClick?: () => void;
 className?: string;
}

export const AllDealsLink: React.FC<AllDealsLinkProps> = ({
 text,
 href = "#",
 onClick,
 className = "",
}) => {
 return (
  <a
   href={href}
   onClick={onClick}
   className={`all-deals-link ${className}`.trim()}
  >
   {text} <span className="all-deals-link__arrow">&gt;</span>
  </a>
 );
};
