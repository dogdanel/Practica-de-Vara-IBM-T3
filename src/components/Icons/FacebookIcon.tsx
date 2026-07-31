import { DEFAULT_ICON_SIZE, type IconProps } from './Icons.types';

export default function FacebookIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
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
      <path d="M13.5 8.75H15V6.5h-1.75c-1.66 0-3 1.34-3 3V11H9v2.25h1.25V19h2.5v-5.75h1.75l.4-2.25h-2.15V9.5c0-.41.34-.75.75-.75Z" />
    </svg>
  );
}
