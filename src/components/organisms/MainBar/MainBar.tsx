import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import Logo from '../../atoms/Logo/Logo'
import SearchBar from '../../atoms/SearchBar/SearchBar'
import IconAction from '../../molecules/IconAction/IconAction'
import './MainBar.css'

/** Organism: logo + search + vendor call-to-action + account actions. */
function MainBar() {
  return (
    <div className="main-bar">
      <div className="container main-bar__inner">
        <Logo />

        <SearchBar onSearch={(query) => console.log('search:', query)} />

        <Button
          variant="outline"
          pill
          className="main-bar__vendor"
          iconAfter={<Icon name="arrow-right" size={16} />}
        >
          Became Vendor
        </Button>

        <div className="main-bar__actions">
          <IconAction icon="compare" label="Compare" count={0} />
          <IconAction icon="heart" label="Wishlist" count={0} />
          <IconAction icon="cart" label="Cart" count={0} />
          <IconAction icon="user" label="Account" />
        </div>
      </div>
    </div>
  )
}

export default MainBar
