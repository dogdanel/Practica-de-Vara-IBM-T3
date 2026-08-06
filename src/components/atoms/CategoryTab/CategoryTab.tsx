import React from 'react';
import './CategoryTab.css';

interface CategoryTabProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const CategoryTab: React.FC<CategoryTabProps> = ({
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`category-tab ${isActive ? 'category-tab--active' : ''}`.trim()}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
