import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { CartIcon } from '../../Icons';
import { ICON_SIZES } from '../../../constants';
import { useTranslation } from '../../../i18n';
import './AddToCartButton.css';

interface AddToCartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  label = 'product.add',
  className = '',
  ...props
}) => {
  const { t:translation } = useTranslation();

  return (
    <button className={`add-to-cart-btn ${className}`.trim()} {...props}>
      <CartIcon size={16} className="add-to-cart-btn__icon" />
      <span className="add-to-cart-btn__text">
        {translation(label)}
      </span>
    </button>
  );
};
