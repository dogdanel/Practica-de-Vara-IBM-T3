import IconBase from './IconBase'
import type { IconProps } from './types'

function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M13 5l-1.4 1.4L16.2 11H4v2h12.2l-4.6 4.6L13 19l7-7z" />
    </IconBase>
  )
}

export default ArrowRightIcon
