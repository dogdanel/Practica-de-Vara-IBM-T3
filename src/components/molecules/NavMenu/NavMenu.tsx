import Dropdown from '../../atoms/Dropdown/Dropdown'
import type { DropdownItem } from '../../atoms/Dropdown/Dropdown'
import './NavMenu.css'

export type NavMenuEntry = {
  label: string
  href?: string
  items?: DropdownItem[]
}

type NavMenuProps = {
  entries: NavMenuEntry[]
}

/** Molecule: the main navigation — plain links mixed with dropdown menus. */
function NavMenu({ entries }: NavMenuProps) {
  return (
    <nav className="nav-menu" aria-label="Main">
      <ul>
        {entries.map((entry) => (
          <li key={entry.label}>
            {entry.items?.length ? (
              <Dropdown variant="nav" label={entry.label} items={entry.items} />
            ) : (
              <a className="nav-menu__link" href={entry.href ?? '#'}>
                {entry.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu
