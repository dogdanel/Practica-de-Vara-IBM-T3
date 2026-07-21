import './ButtonSet.css'

export type ButtonSetItem = {
  label: string
  href?: string
}

type ButtonSetProps = {
  items: ButtonSetItem[]
  separator?: boolean
  ariaLabel?: string
}

/** Atom: a horizontal set of text link-buttons (top bar links, footer links...). */
function ButtonSet({ items, separator = false, ariaLabel }: ButtonSetProps) {
  return (
    <nav
      className={`button-set${separator ? ' button-set--separated' : ''}`}
      aria-label={ariaLabel}
    >
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href ?? '#'}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ButtonSet
