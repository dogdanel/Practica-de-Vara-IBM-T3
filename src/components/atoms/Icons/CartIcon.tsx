import IconBase from './IconBase'
import type { IconProps } from './types'

function CartIcon(props: IconProps) {
  return (
    <IconBase {...props} outline>
      <path d="M2 3h3l3.4 11h9.1L21 7H6.5M9 19.5h.01M17 19.5h.01" />
    </IconBase>
  )
}

export default CartIcon
