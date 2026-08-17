import Button from "../../atoms/Button/Button";
import {
 ArrowRightIcon,
 CartIcon,
 CompareIcon,
 HeartIcon,
 UserIcon,
} from "../../atoms/Icons";
import Logo from "../../atoms/Logo/Logo";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import IconAction from "../../molecules/IconAction/IconAction";
import "./MainBar.css";

const ACTION_ICON_SIZE = 30;

function MainBar() {
 return (
  <div className="main-bar">
   <div className="container main-bar__inner">
    <div className="main-bar__logo">
     <Logo />
    </div>

    <SearchBar
     placeholder="Search for products..."
     buttonLabel="Search"
     onSearch={(query) => console.log("search:", query)}
    />

    <Button
     variant="outline"
     pill
     className="main-bar__vendor"
     iconAfter={<ArrowRightIcon size={20} />}
    >
     Became Vendor
    </Button>

    <div className="main-bar__actions">
     <IconAction
      icon={<CompareIcon size={ACTION_ICON_SIZE} />}
      label="Compare"
      labelSize={15}
      count={0}
     />
     <IconAction
      icon={<HeartIcon size={ACTION_ICON_SIZE} />}
      label="Wishlist"
      labelSize={15}
      count={0}
     />
     <IconAction
      icon={<CartIcon size={ACTION_ICON_SIZE} />}
      label="Cart"
      labelSize={15}
      count={0}
     />
     <IconAction
      icon={<UserIcon size={ACTION_ICON_SIZE} />}
      label="Account"
      labelSize={15}
     />
    </div>
   </div>
  </div>
 );
}

export default MainBar;
