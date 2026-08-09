import type { IconProps } from './types'

type IconBaseProps = IconProps & {
  /** PrimeIcons name without the `pi-` prefix, e.g. `arrow-right`. */
  name: string
}

function IconBase({ name, size = 18, className }: IconBaseProps) {
  const classes = ['pi', `pi-${name}`, className].filter(Boolean).join(' ')

  return (
    <i
      className={classes}
      style={{ fontSize: `${size / 16}rem` }}
      role="presentation"
      aria-hidden="true"
    />
  )
}

export default IconBase
