import IconBase from './IconBase'
import type { IconProps } from './types'

function GridIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z" />
    </IconBase>
  )
}

export default GridIcon
