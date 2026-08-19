import Button from "../../atoms/Button/Button";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import {
 ArrowRightIcon,
 CartIcon,
 CompareIcon,
 GridIcon,
 HeartIcon,
 UserIcon,
} from "../../atoms/Icons";
import Logo from "../../atoms/Logo/Logo";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import IconAction from "../../molecules/IconAction/IconAction";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import "./MainBar.css";
import useTranslation from "../../../i18n/useTranslation";

function MainBar() {
 const { t: translation } = useTranslation();

 return (
  <div className="main-bar">
   <div className="container main-bar__inner">
    <div className="main-bar__logo">
     <Logo />
    </div>

    <SearchBar
     placeholder={translation("MainBar.searchPlaceholder")}
     buttonLabel={translation("MainBar.searchButton")}
     onSearch={(query) => console.log(query)}
    />

    <Button
     variant="outline"
     pill
     className="main-bar__vendor"
     iconAfter={<ArrowRightIcon size={20} />}
    >
     {translation("MainBar.becomeVendor")}
    </Button>

    <div className="main-bar__actions-wrapper">
     <div className="main-bar__categories-responsive">
      <Dropdown
       variant="filled"
       label={translation("NavBar.browseCategories")}
       iconBefore={<GridIcon size={20} />}
      >
       <CategoryMenu />
      </Dropdown>
     </div>

     <div className="main-bar__actions">
      <IconAction
       icon={<CompareIcon size={30} />}
       label={translation("MainBar.compare")}
       labelSize={15}
       count={0}
      />
      <IconAction
       icon={<HeartIcon size={30} />}
       label={translation("MainBar.wishlist")}
       labelSize={15}
       count={0}
      />
      <IconAction
       icon={<CartIcon size={30} />}
       label={translation("MainBar.cart")}
       labelSize={15}
       count={0}
      />
      <IconAction
       icon={<UserIcon size={30} />}
       label={translation("MainBar.account")}
       labelSize={15}
      />
     </div>
    </div>
   </div>
  </div>
 );
}

export default MainBar;
