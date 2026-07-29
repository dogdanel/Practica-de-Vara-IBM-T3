import IconBase from './IconBase'
import type { IconProps } from './types'

function HeartIcon(props: IconProps) {
  return (
    <IconBase {...props} outline>
      <path d="M12 20.3 4.6 13a4.6 4.6 0 0 1 0-6.5 4.6 4.6 0 0 1 6.5 0l.9.9.9-.9a4.6 4.6 0 0 1 6.5 6.5z" />
    </IconBase>
  )
}

export default HeartIcon
