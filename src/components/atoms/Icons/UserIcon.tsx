import IconBase from './IconBase'
import type { IconProps } from './types'

function UserIcon(props: IconProps) {
  return (
    <IconBase {...props} outline>
      <path d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c4 0 8 2 8 5v1H4v-1c0-3 4-5 8-5z" />
    </IconBase>
  )
}

export default UserIcon
