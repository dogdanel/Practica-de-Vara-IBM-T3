import './Logo.css'

type LogoProps = {
  name?: string
  tagline?: string
  href?: string
}

/** Atom: the brand mark. */
function Logo({ name = 'Nest', tagline = 'MART & GROCERY', href = '/' }: LogoProps) {
  return (
    <a className="logo" href={href} aria-label={`${name} home`}>
      <svg
        className="logo__mark"
        viewBox="0 0 44 34"
        role="presentation"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="22" rx="11" ry="8" fill="#8fd6b0" />
        <ellipse cx="20" cy="17" rx="9" ry="7" fill="#f2b705" />
        <ellipse cx="30" cy="20" rx="10" ry="8" fill="#f28705" />
        <path d="M18 9c4-6 12-8 12-8s-1 8-6 10-6-2-6-2z" fill="#3bb77e" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">{name}</span>
        <span className="logo__tagline">{tagline}</span>
      </span>
    </a>
  )
}

export default Logo
