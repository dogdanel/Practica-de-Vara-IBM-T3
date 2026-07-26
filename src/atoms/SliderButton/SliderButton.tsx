import React from 'react';
import { Icon } from '@iconify/react';
import './SliderButton.css';

interface SliderButtonProps {
  direction: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
}

export const SliderButton: React.FC<SliderButtonProps> = ({
  direction,
  onClick,
  disabled = false,
}) => {
  const iconName = direction === 'left' ? 'ph:arrow-left-bold' : 'ph:arrow-right-bold';

  return (
    <button
      className={`slider-button slider-button--${direction}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
      aria-label={`Scroll ${direction}`}
    >
      <Icon icon={iconName} className="slider-button__icon" />
    </button>
  );
};