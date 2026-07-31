import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
<<<<<<< HEAD
import { CartIcon } from '../../Icons/CartIcon/CartIcon';
import './AddToCartButton.css';
import { useTranslation } from 'react-i18next';
=======
import { CartIcon } from '../../Icons';
import { ICON_SIZES } from '../../../constants';
import { useTranslation } from '../../../i18n';
import './AddToCartButton.css';
>>>>>>> 6a8f47b (Add popular products grid with design tokens, rem units, grouped icons and i18n)

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
<<<<<<< HEAD
    <button className={`add-to-cart-btn ${className}`.trim()} {...props}>
      <CartIcon size={16} className="add-to-cart-btn__icon" />
      <span className="add-to-cart-btn__text">
        {label ?? t('product.add')}
      </span>
    </button>
  );
};
=======
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
>>>>>>> 6a8f47b (Add popular products grid with design tokens, rem units, grouped icons and i18n)
