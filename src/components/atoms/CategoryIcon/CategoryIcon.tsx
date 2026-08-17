import React from "react";
import "./CategoryIcon.css";
import { Icon } from "@iconify/react";
import "../../../styles/tokens.css";

export interface CategoryIconProps {
 src: string;
 alt: string;
 className?: string;
 size?: number;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({
 src,
 className = "",
 size = 37,
}) => {
 return (
  <div className={`category-icon ${className}`.trim()}>
   <Icon
    icon={src}
    width={size}
    height={size}
    style={{ color: "var(--brand-green)" }}
   />
  </div>
 );
};
