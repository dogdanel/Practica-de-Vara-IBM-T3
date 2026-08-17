import type { IconProps } from './types'

type IconBaseProps = IconProps & {
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
