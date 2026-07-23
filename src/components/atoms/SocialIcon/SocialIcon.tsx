import type { ReactNode } from 'react';
import './SocialIcon.css';

export type SocialPlatform = 'facebook' | 'twitter' | 'skype' | 'instagram';

interface SocialIconProps {
  platform: SocialPlatform;
  href?: string;
}

const glyphs: Record<SocialPlatform, ReactNode> = {
  facebook: (
    <path d="M13.5 8.75H15V6.5h-1.75c-1.66 0-3 1.34-3 3V11H9v2.25h1.25V19h2.5v-5.75h1.75l.4-2.25h-2.15V9.5c0-.41.34-.75.75-.75Z" />
  ),
  twitter: (
    <path d="M19 8.1c-.44.2-.9.33-1.4.4a2.4 2.4 0 0 0 1.06-1.33 4.8 4.8 0 0 1-1.53.58 2.4 2.4 0 0 0-4.1 2.2A6.8 6.8 0 0 1 8.06 7.3a2.4 2.4 0 0 0 .74 3.2 2.4 2.4 0 0 1-1.09-.3v.03a2.4 2.4 0 0 0 1.93 2.36c-.2.06-.42.08-.64.08-.16 0-.31-.02-.46-.05a2.4 2.4 0 0 0 2.25 1.67 4.8 4.8 0 0 1-3.55 1 6.8 6.8 0 0 0 3.68 1.08c4.42 0 6.84-3.66 6.84-6.84l-.01-.31A4.9 4.9 0 0 0 19 8.1Z" />
  ),
  skype: (
    <path d="M17.4 13.15c.08-.37.13-.75.13-1.15 0-2.76-2.24-5-5-5-.31 0-.6.03-.89.08A4 4 0 0 0 9.5 6.1c-2.24 0-4.05 1.81-4.05 4.05 0 .45.07.88.2 1.28A4.9 4.9 0 0 0 5.1 12.9c0 2.76 2.24 5 5 5 .38 0 .75-.04 1.1-.13.37.09.76.13 1.15.13 2.24 0 4.05-1.81 4.05-4.05 0-.24-.02-.47-.06-.7Zm-4.96 2.35c-1.76 0-2.9-.82-2.9-1.87 0-.46.3-.86.83-.86.78 0 .77.66 1.27 1.01.27.2.66.32 1.06.32.65 0 1.22-.29 1.22-.78 0-.55-.65-.73-1.5-.93-1.19-.28-2.65-.63-2.65-2.19 0-1.42 1.3-2.17 2.8-2.17 1.39 0 2.73.6 2.73 1.6 0 .46-.32.83-.8.83-.7 0-.67-.55-1.4-.87a2.2 2.2 0 0 0-.83-.17c-.56 0-.98.25-.98.66 0 .5.63.68 1.44.86 1.24.29 2.68.67 2.68 2.22 0 1.48-1.32 2.4-3.24 2.4Z" />
  ),
  instagram: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="15.3" cy="8.7" r="0.7" />
    </>
  ),
};

export default function SocialIcon({ platform, href = '#' }: SocialIconProps) {
  return (
    <a href={href} className="social-icon" aria-label={platform}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        {glyphs[platform]}
      </svg>
    </a>
  );
}
