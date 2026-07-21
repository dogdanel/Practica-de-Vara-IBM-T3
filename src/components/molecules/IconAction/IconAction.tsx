import Icon from '../../atoms/Icon/Icon'
import type { IconName } from '../../atoms/Icon/Icon'
import './IconAction.css'

type IconActionProps = {
  icon: IconName
  label: string
  count?: number
  href?: string
}

/** Molecule: icon + label + optional counter badge (Compare, Wishlist, Cart...). */
function IconAction({ icon, label, count, href = '#' }: IconActionProps) {
  return (
    <a className="icon-action" href={href}>
      <span className="icon-action__icon">
        <Icon name={icon} size={22} />
        {count !== undefined && (
          <span className="icon-action__badge">{count}</span>
        )}
      </span>
      <span className="icon-action__label">{label}</span>
    </a>
  )
}

export default IconAction
