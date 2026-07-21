import ButtonSet from '../../atoms/ButtonSet/ButtonSet'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import './TopBar.css'

const LINKS = [
  { label: 'About Us' },
  { label: 'My Account' },
  { label: 'Wishlist' },
  { label: 'Order Tracking' },
]

const LANGUAGES = [{ label: 'English' }, { label: 'Français' }, { label: 'Română' }]
const CURRENCIES = [{ label: 'INR' }, { label: 'USD' }, { label: 'EUR' }]

/** Organism: the thin utility bar above the header. */
function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar__inner">
        <ButtonSet items={LINKS} ariaLabel="Utility" />

        <p className="top-bar__notice">
          100% Secure delivery without contacting the courier
        </p>

        <div className="top-bar__right">
          <span className="top-bar__help">
            Need help? Call Us:{' '}
            <a href="tel:+1800900122">+1800900122</a>
          </span>
          <Dropdown label="English" items={LANGUAGES} align="right" />
          <Dropdown label="INR" items={CURRENCIES} align="right" />
        </div>
      </div>
    </div>
  )
}

export default TopBar
