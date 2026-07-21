import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import Icon from '../Icon/Icon'
import './Dropdown.css'

export type DropdownItem = {
  label: string
  href?: string
}

type DropdownProps = {
  label: string
  items?: DropdownItem[]
  iconBefore?: ReactNode
  variant?: 'plain' | 'nav' | 'filled'
  align?: 'left' | 'right'
}

/** Atom: a label that toggles a small menu of links. */
function Dropdown({
  label,
  items = [],
  iconBefore,
  variant = 'plain',
  align = 'left',
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className={`dropdown dropdown--${variant}`} ref={rootRef}>
      <button
        type="button"
        className="dropdown__toggle"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        {iconBefore}
        <span>{label}</span>
        <Icon name="chevron-down" size={14} className="dropdown__caret" />
      </button>

      {open && items.length > 0 && (
        <ul className={`dropdown__menu dropdown__menu--${align}`}>
          {items.map((item) => (
            <li key={item.label}>
              <a href={item.href ?? '#'}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
