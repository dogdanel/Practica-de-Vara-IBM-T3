import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { CartIcon } from '../CartIcon/CartIcon';
import './AddToCartButton.css';

interface AddToCartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  label = 'Add',
  className = '',
  ...props
}) => {
  return (
    <button className={`add-to-cart-btn ${className}`.trim()} {...props}>
      <CartIcon size={16} className="add-to-cart-btn__icon" />
      <span className="add-to-cart-btn__text">{label}</span>
    </button>
  );
};