import Dropdown from "../../atoms/Dropdown/Dropdown";
import { FireIcon, GridIcon } from "../../atoms/Icons";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import type { NavMenuEntry } from "../../molecules/NavMenu/NavMenu";
import SupportInfo from "../../molecules/SupportInfo/SupportInfo";
import "./NavBar.css";

const SUPPORT_PHONE = "1900888123";

const CATEGORIES = [
 { label: "Baking Material", count: 10 },
 { label: "Bread and Juice", count: 12 },
 { label: "Clothing & Beauty", count: 8 },
 { label: "Deals of the Day", count: 4 },
 { label: "Fresh Fruits", count: 12 },
 { label: "Fresh Seafood", count: 6 },
 { label: "Milk & Diaries", count: 15 },
 { label: "Pet Foods & Toys", count: 8 },
 { label: "Vegetables", count: 13 },
 { label: "Wines and Drinks", count: 10 },
 { label: "Uncategorized", count: 20 },
];

const MENU_LABEL_SIZE = 15;

const ENTRIES: NavMenuEntry[] = [
 {
  label: "Home",
  labelSize: MENU_LABEL_SIZE,
  items: [
   { label: "Home" },
   { label: "Contact" },
   { label: "Blog & News" },
   { label: "Recipes" },
   { label: "Snack" },
  ],
 },
 { label: "About", labelSize: MENU_LABEL_SIZE },
 {
  label: "Shop",
  labelSize: MENU_LABEL_SIZE,
  items: [{ label: "Shop Grid" }, { label: "Shop List" }],
 },
 {
  label: "Mega Menu",
  labelSize: MENU_LABEL_SIZE,
  items: [{ label: "Groceries" }, { label: "Drinks" }],
 },
 {
  label: "Vendors",
  labelSize: MENU_LABEL_SIZE,
  items: [{ label: "Vendor Grid" }, { label: "Vendor List" }],
 },
 {
  label: "Blog",
  labelSize: MENU_LABEL_SIZE,
  items: [{ label: "Blog Grid" }, { label: "Blog Details" }],
 },
 {
  label: "Pages",
  labelSize: MENU_LABEL_SIZE,
  items: [{ label: "Contact" }, { label: "FAQ" }],
 },
 { label: "Contact", labelSize: MENU_LABEL_SIZE },
];

function NavBar() {
 return (
  <div className="nav-bar">
   <div className="container nav-bar__inner">
    <div className="nav-bar__categories-desktop">
     <Dropdown
      variant="filled"
      label="Browse All Categories"
      items={CATEGORIES}
      iconBefore={<GridIcon size={20} />}
     />
    </div>

    <a className="nav-bar__deals" href="#">
     <FireIcon size={20} />
     Hot Deals
    </a>

    <NavMenu entries={ENTRIES} />

    <SupportInfo phone={SUPPORT_PHONE} />
   </div>
  </div>
 );
}

export default NavBar;
