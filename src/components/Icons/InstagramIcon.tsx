import { DEFAULT_ICON_SIZE, type IconProps } from './Icons.types';

export default function InstagramIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="15.3" cy="8.7" r="0.7" />
    </svg>
  );
}
