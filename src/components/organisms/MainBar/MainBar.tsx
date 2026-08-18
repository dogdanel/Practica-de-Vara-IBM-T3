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
import "./MainBar.css";

const CATEGORIES = [
 { label: "Milks & Dairies" },
 { label: "Clothing & Beauty" },
 { label: "Pet Foods & Toys" },
 { label: "Baking Material" },
 { label: "Fresh Fruit" },
];

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

    <div className="main-bar__actions-wrapper">
     <div className="main-bar__categories-responsive">
      <Dropdown
       variant="filled"
       label="Browse All Categories"
       items={CATEGORIES}
       iconBefore={<GridIcon size={20} />}
      />
     </div>

     <div className="main-bar__actions">
      <IconAction
       icon={<CompareIcon size={30} />}
       label="Compare"
       labelSize={15}
       count={0}
      />
      <IconAction
       icon={<HeartIcon size={30} />}
       label="Wishlist"
       labelSize={15}
       count={0}
      />
      <IconAction
       icon={<CartIcon size={30} />}
       label="Cart"
       labelSize={15}
       count={0}
      />
      <IconAction
       icon={<UserIcon size={30} />}
       label="Account"
       labelSize={15}
      />
     </div>
    </div>
   </div>
  </div>
 );
}

export default MainBar;
