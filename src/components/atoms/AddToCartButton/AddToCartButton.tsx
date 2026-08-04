import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { CartIcon } from '../../Icons/CartIcon/CartIcon';
import './AddToCartButton.css';
import { useTranslation } from 'react-i18next';

interface AddToCartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  label = 'product.add',
  className = '',
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <button className={`add-to-cart-btn ${className}`.trim()} {...props}>
      <CartIcon size={16} className="add-to-cart-btn__icon" />
      <span className="add-to-cart-btn__text">
        {t(label)}
      </span>
    </button>
  );
};