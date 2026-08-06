import React from 'react';
import { SliderButton } from '../../atoms/SliderButton/SliderButton';
import './SliderNavigation.css';

interface SliderNavigationProps {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

export const SliderNavigation: React.FC<SliderNavigationProps> = ({
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
}) => {
  return (
    <div className="slider-navigation">
      <SliderButton direction="left" onClick={onPrev} disabled={prevDisabled} />
      <SliderButton direction="right" onClick={onNext} disabled={nextDisabled} />
    </div>
  );
};