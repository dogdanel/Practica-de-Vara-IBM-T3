import IconBase from './IconBase'
import type { IconProps } from './types'

function ChevronDownIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7.4 9.6 12 14.2l4.6-4.6 1.4 1.4-6 6-6-6z" />
    </IconBase>
  )
}

export default ChevronDownIcon
