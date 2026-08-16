import TopBar from '../TopBar/TopBar'
import MainBar from '../MainBar/MainBar'
import NavBar from '../NavBar/NavBar'
import './Header.css'

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
