import Dropdown from "../../atoms/Dropdown/Dropdown";
import { FireIcon, GridIcon } from "../../atoms/Icons";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import type { NavMenuEntry } from "../../molecules/NavMenu/NavMenu";
import SupportInfo from "../../molecules/SupportInfo/SupportInfo";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import useTranslation from "../../../i18n/useTranslation";
import "./NavBar.css";

const SUPPORT_PHONE = "1900888123";
const MENU_LABEL_SIZE = 15;

function NavBar() {
 const { t: translation } = useTranslation();

 const entries: NavMenuEntry[] = [
  {
   label: translation("NavBar.home"),
   labelSize: MENU_LABEL_SIZE,
   items: [
    { label: translation("NavBar.home") },
    { label: translation("NavBar.contact") },
    { label: "Blog & News" },
    { label: "Recipes" },
    { label: "Snack" },
   ],
  },
  { label: translation("NavBar.about"), labelSize: MENU_LABEL_SIZE },
  {
   label: translation("NavBar.shop"),
   labelSize: MENU_LABEL_SIZE,
   items: [{ label: "Shop Grid" }, { label: "Shop List" }],
  },
  {
   label: translation("NavBar.megaMenu"),
   labelSize: MENU_LABEL_SIZE,
   items: [{ label: "Groceries" }, { label: "Drinks" }],
  },
  {
   label: translation("NavBar.vendors"),
   labelSize: MENU_LABEL_SIZE,
   items: [{ label: "Vendor Grid" }, { label: "Vendor List" }],
  },
  {
   label: translation("NavBar.blog"),
   labelSize: MENU_LABEL_SIZE,
   items: [{ label: "Blog Grid" }, { label: "Blog Details" }],
  },
  {
   label: translation("NavBar.pages"),
   labelSize: MENU_LABEL_SIZE,
   items: [{ label: translation("NavBar.contact") }, { label: "FAQ" }],
  },
  { label: translation("NavBar.contact"), labelSize: MENU_LABEL_SIZE },
 ];

 return (
  <div className="nav-bar">
   <div className="container nav-bar__inner">
    <div className="nav-bar__categories-desktop">
     <Dropdown
      variant="filled"
      label={translation("NavBar.browseCategories")}
      iconBefore={<GridIcon size={20} />}
     >
      <CategoryMenu />
     </Dropdown>
    </div>

    <a className="nav-bar__deals" href="#">
     <FireIcon size={20} />
     {translation("NavBar.hotDeals")}
    </a>

    <NavMenu entries={entries} />

    <SupportInfo phone={SUPPORT_PHONE} />
   </div>
  </div>
 );
}

export default NavBar;
