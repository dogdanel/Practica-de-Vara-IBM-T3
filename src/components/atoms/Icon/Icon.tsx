export type IconName =
  | 'search'
  | 'chevron-down'
  | 'arrow-right'
  | 'grid'
  | 'fire'
  | 'headphone'
  | 'user'
  | 'cart'
  | 'heart'
  | 'compare'

type Glyph = { d: string; outline?: boolean }

const GLYPHS: Record<IconName, Glyph> = {
  search: {
    d: 'M11 4a7 7 0 1 0 4.2 12.6l4.1 4.1 1.4-1.4-4.1-4.1A7 7 0 0 0 11 4zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z',
  },
  'chevron-down': { d: 'M7.4 9.6 12 14.2l4.6-4.6 1.4 1.4-6 6-6-6z' },
  'arrow-right': { d: 'M13 5l-1.4 1.4L16.2 11H4v2h12.2l-4.6 4.6L13 19l7-7z' },
  grid: { d: 'M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z' },
  fire: {
    d: 'M12 2s1 3-1.5 5.5S7 12 7 14a5 5 0 0 0 10 0c0-2-1-3.5-2-4.5 0 1.5-1 2.5-2 2.5s-1.5-1-1-2.5S12 4 12 2z',
  },
  headphone: {
    d: 'M12 3a8 8 0 0 0-8 8v6a3 3 0 0 0 3 3h2v-8H6v-1a6 6 0 0 1 12 0v1h-3v8h2a3 3 0 0 0 3-3v-6a8 8 0 0 0-8-8z',
  },
  user: {
    d: 'M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c4 0 8 2 8 5v1H4v-1c0-3 4-5 8-5z',
    outline: true,
  },
  cart: {
    d: 'M2 3h3l3.4 11h9.1L21 7H6.5M9 19.5h.01M17 19.5h.01',
    outline: true,
  },
  heart: {
    d: 'M12 20.3 4.6 13a4.6 4.6 0 0 1 0-6.5 4.6 4.6 0 0 1 6.5 0l.9.9.9-.9a4.6 4.6 0 0 1 6.5 6.5z',
    outline: true,
  },
  compare: { d: 'M8 4v11H4.5l4.5 5 4.5-5H10V4zm8 16V9h3.5L15 4l-4.5 5H14v11z' },
}

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

/** Atom: a single inline SVG glyph. */
function Icon({ name, size = 18, className }: IconProps) {
  const glyph = GLYPHS[name]

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={glyph.outline ? 'none' : 'currentColor'}
      stroke={glyph.outline ? 'currentColor' : 'none'}
      strokeWidth={glyph.outline ? 1.7 : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="presentation"
      aria-hidden="true"
    >
      <path d={glyph.d} />
    </svg>
  )
}

export default Icon
