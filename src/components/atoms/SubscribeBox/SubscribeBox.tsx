import { useState } from 'react'
import type { FormEvent } from 'react'
import Button from '../Button/Button'
import './SubscribeBox.css'

type SubscribeBoxProps = {
  placeholder?: string
  buttonLabel?: string
  onSubscribe?: (email: string) => void
}

/** Atom: the newsletter email field with its subscribe button. */
function SubscribeBox({
  placeholder = 'Your email address',
  buttonLabel = 'Subscribe',
  onSubscribe,
}: SubscribeBoxProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubscribe?.(email.trim())
    setEmail('')
  }

  return (
    <form className="subscribe-box" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        className="subscribe-box__input"
        placeholder={placeholder}
        aria-label={placeholder}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button type="submit" pill className="subscribe-box__button">
        {buttonLabel}
      </Button>
    </form>
  )
}

export default SubscribeBox
