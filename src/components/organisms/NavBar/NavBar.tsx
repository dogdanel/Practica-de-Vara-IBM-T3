import Dropdown from "../../atoms/Dropdown/Dropdown";
import { FireIcon, GridIcon } from "../../atoms/Icons";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import type { NavMenuEntry } from "../../molecules/NavMenu/NavMenu";
import SupportInfo from "../../molecules/SupportInfo/SupportInfo";
import "./NavBar.css";

const SUPPORT_PHONE = "1900888123";

const CATEGORIES = [
 { label: "Milks & Dairies" },
 { label: "Clothing & Beauty" },
 { label: "Pet Foods & Toys" },
 { label: "Baking Material" },
 { label: "Fresh Fruit" },
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
    <Dropdown
     variant="filled"
     label="Browse All Categories"
     items={CATEGORIES}
     iconBefore={<GridIcon size={20} />}
    />

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
