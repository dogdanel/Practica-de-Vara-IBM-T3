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
  label,
  className = '',
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className={`add-to-cart-btn ${className}`.trim()}
      aria-label={t('product.addToCart.ariaLabel')}
      {...props}
    >
      <CartIcon size={ICON_SIZES.cart} className="add-to-cart-btn__icon" />
      <span className="add-to-cart-btn__text">{label ?? t('product.addToCart')}</span>
    </button>
  );
};
