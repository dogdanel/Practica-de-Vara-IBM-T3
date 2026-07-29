import IconBase from './IconBase'
import type { IconProps } from './types'

function SearchIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M11 4a7 7 0 1 0 4.2 12.6l4.1 4.1 1.4-1.4-4.1-4.1A7 7 0 0 0 11 4zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
    </IconBase>
  )
}

export default SearchIcon
