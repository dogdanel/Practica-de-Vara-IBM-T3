import type { ReactNode } from 'react'
import './IconAction.css'

type IconActionProps = {
  icon: ReactNode
  label: string
  count?: number
  href?: string
  labelSize?: number
}

function IconAction({ icon, label, labelSize, count, href = '#' }: IconActionProps) {
  return (
    <a className="icon-action" href={href}>
      <span className="icon-action__icon">
        {icon}
        {count !== undefined && (
          <span className="icon-action__badge">{count}</span>
        )}
      </span>
<span className="icon-action__label" style={{ fontSize: labelSize }}>
        {label}
      </span>
    </a>
  )
}

export default IconAction
