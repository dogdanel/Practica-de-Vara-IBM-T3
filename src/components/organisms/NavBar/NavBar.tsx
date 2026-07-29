import Dropdown from '../../atoms/Dropdown/Dropdown'
import { FireIcon, GridIcon } from '../../atoms/Icons'
import NavMenu from '../../molecules/NavMenu/NavMenu'
import type { NavMenuEntry } from '../../molecules/NavMenu/NavMenu'
import SupportInfo from '../../molecules/SupportInfo/SupportInfo'
import './NavBar.css'

const SUPPORT_PHONE = '1900888123'

const CATEGORIES = [
  { label: 'Milks & Dairies' },
  { label: 'Clothing & Beauty' },
  { label: 'Pet Foods & Toys' },
  { label: 'Baking Material' },
  { label: 'Fresh Fruit' },
]

const ENTRIES: NavMenuEntry[] = [
  {
    label: 'Home',
    items: [{ label: 'Home 1' }, { label: 'Home 2' }],
  },
  { label: 'About' },
  {
    label: 'Shop',
    items: [{ label: 'Shop Grid' }, { label: 'Shop List' }],
  },
  {
    label: 'Mega Menu',
    items: [{ label: 'Groceries' }, { label: 'Drinks' }],
  },
  {
    label: 'Vendors',
    items: [{ label: 'Vendor Grid' }, { label: 'Vendor List' }],
  },
  {
    label: 'Blog',
    items: [{ label: 'Blog Grid' }, { label: 'Blog Details' }],
  },
  {
    label: 'Pages',
    items: [{ label: 'Contact' }, { label: 'FAQ' }],
  },
  { label: 'Contact' },
]

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="container nav-bar__inner">
        <Dropdown
          variant="filled"
          label="Browse All Categories"
          items={CATEGORIES}
          iconBefore={<GridIcon size={16} />}
        />

        <a className="nav-bar__deals" href="#">
          <FireIcon size={18} />
          Hot Deals
        </a>

        <NavMenu entries={ENTRIES} />

        <SupportInfo phone={SUPPORT_PHONE} />
      </div>
    </div>
  )
}

export default NavBar
