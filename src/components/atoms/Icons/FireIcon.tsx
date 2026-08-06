import IconBase from './IconBase'
import type { IconProps } from './types'

// PrimeIcons ships no flame glyph; bolt is the closest "hot deals" marker.
function FireIcon(props: IconProps) {
  return <IconBase name="bolt" {...props} />
}

export default FireIcon
