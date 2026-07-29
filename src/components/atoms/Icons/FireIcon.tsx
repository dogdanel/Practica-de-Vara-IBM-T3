import IconBase from './IconBase'
import type { IconProps } from './types'

function FireIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 2s1 3-1.5 5.5S7 12 7 14a5 5 0 0 0 10 0c0-2-1-3.5-2-4.5 0 1.5-1 2.5-2 2.5s-1.5-1-1-2.5S12 4 12 2z" />
    </IconBase>
  )
}

export default FireIcon
