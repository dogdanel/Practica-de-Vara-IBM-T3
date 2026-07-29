import IconBase from './IconBase'
import type { IconProps } from './types'

function CompareIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 4v11H4.5l4.5 5 4.5-5H10V4zm8 16V9h3.5L15 4l-4.5 5H14v11z" />
    </IconBase>
  )
}

export default CompareIcon
