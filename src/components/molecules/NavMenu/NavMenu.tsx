import Dropdown from "../../atoms/Dropdown/Dropdown";
import type { DropdownItem } from "../../atoms/Dropdown/Dropdown";
import "./NavMenu.css";

export type NavMenuEntry = {
 label: string;
 href?: string;
 items?: DropdownItem[];
 labelSize?: number;
};

type NavMenuProps = {
 entries: NavMenuEntry[];
};

function NavMenu({ entries }: NavMenuProps) {
 return (
  <nav className="nav-menu" aria-label="Main">
   <ul>
    {entries.map((entry) => (
     <li key={entry.label}>
      {entry.items?.length ? (
       <Dropdown
        variant="nav"
        label={entry.label}
        items={entry.items}
        labelSize={entry.labelSize} /* <-- AICI trebuia pasat prop-ul */
       />
      ) : (
       <a
        className="nav-menu__link"
        href={entry.href ?? "#"}
        style={
         entry.labelSize ? { fontSize: `${entry.labelSize}px` } : undefined
        } /* <-- ȘI AICI pentru link-uri simple gen About */
       >
        {entry.label}
       </a>
      )}
     </li>
    ))}
   </ul>
  </nav>
 );
}

export default NavMenu;
