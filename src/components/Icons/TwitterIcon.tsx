import { DEFAULT_ICON_SIZE, type IconProps } from './Icons.types';

export default function TwitterIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
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
      <path d="M19 8.1c-.44.2-.9.33-1.4.4a2.4 2.4 0 0 0 1.06-1.33 4.8 4.8 0 0 1-1.53.58 2.4 2.4 0 0 0-4.1 2.2A6.8 6.8 0 0 1 8.06 7.3a2.4 2.4 0 0 0 .74 3.2 2.4 2.4 0 0 1-1.09-.3v.03a2.4 2.4 0 0 0 1.93 2.36c-.2.06-.42.08-.64.08-.16 0-.31-.02-.46-.05a2.4 2.4 0 0 0 2.25 1.67 4.8 4.8 0 0 1-3.55 1 6.8 6.8 0 0 0 3.68 1.08c4.42 0 6.84-3.66 6.84-6.84l-.01-.31A4.9 4.9 0 0 0 19 8.1Z" />
    </svg>
  );
}
