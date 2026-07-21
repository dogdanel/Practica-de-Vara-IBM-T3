import TopBar from '../TopBar/TopBar'
import MainBar from '../MainBar/MainBar'
import NavBar from '../NavBar/NavBar'

/** Organism: the full site header (top bar + main bar + navigation). */
function Header() {
  return (
    <header>
      <TopBar />
      <MainBar />
      <NavBar />
    </header>
  )
}

export default Header
