import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  pill?: boolean
  iconAfter?: ReactNode
  iconBefore?: ReactNode
}

/** Atom: every clickable action in the UI. */
function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  iconBefore,
  iconAfter,
  children,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    pill ? 'btn--pill' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} {...rest}>
      {iconBefore}
      {children}
      {iconAfter}
    </button>
  )
}

export default Button
