import React from 'react';
import './Tag.css';

export interface TagProps {
  label: string;
  onRemove?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  label,
  onRemove,
  className = '',
}) => {
  return (
    <button
      type="button"
      className={`product-tag ${className}`.trim()}
      onClick={onRemove}
      aria-label={`Remove tag ${label}`}
    >
      <span className="product-tag__close">✕</span>
      <span className="product-tag__label">{label}</span>
    </button>
  );
};