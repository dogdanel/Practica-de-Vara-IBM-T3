import type { ReactNode } from 'react'
import type { IconProps } from './types'

type IconBaseProps = IconProps & {
  outline?: boolean
  children: ReactNode
}

function IconBase({ size = 18, className, outline = false, children }: IconBaseProps) {
  const remSize = `${size / 16}rem`

  return (
    <svg
      className={className}
      width={remSize}
      height={remSize}
      viewBox="0 0 24 24"
      fill={outline ? 'none' : 'currentColor'}
      stroke={outline ? 'currentColor' : 'none'}
      strokeWidth={outline ? 1.7 : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="presentation"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export default IconBase
