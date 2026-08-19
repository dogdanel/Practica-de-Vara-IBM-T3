import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ChevronDownIcon } from "../Icons";
import "./Dropdown.css";

export type DropdownItem = {
 label: string;
 href?: string;
 onClick?: () => void;
};

type DropdownProps = {
 label: string;
 items?: DropdownItem[];
 iconBefore?: ReactNode;
 variant?: "plain" | "nav" | "filled";
 align?: "left" | "right";
 labelSize?: number;
 children?: ReactNode;
};

function Dropdown({
 label,
 items = [],
 iconBefore,
 variant = "plain",
 align = "left",
 labelSize,
 children,
}: DropdownProps) {
 const [open, setOpen] = useState(false);
 const rootRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (!open) return;

  const onPointerDown = (event: MouseEvent) => {
   if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
  };
  const onKeyDown = (event: KeyboardEvent) => {
   if (event.key === "Escape") setOpen(false);
  };

  document.addEventListener("mousedown", onPointerDown);
  document.addEventListener("keydown", onKeyDown);
  return () => {
   document.removeEventListener("mousedown", onPointerDown);
   document.removeEventListener("keydown", onKeyDown);
  };
 }, [open]);

 return (
  <div className={`dropdown dropdown--${variant}`} ref={rootRef}>
   <button
    type="button"
    className="dropdown__toggle"
    aria-expanded={open}
    aria-haspopup="true"
    onClick={() => setOpen((value) => !value)}
    style={labelSize ? { fontSize: `${labelSize}px` } : undefined}
   >
    {iconBefore}
    <span>{label}</span>
    <ChevronDownIcon size={14} className="dropdown__caret" />
   </button>

   {open && (
    <div className={`dropdown__menu dropdown__menu--${align}`}>
     {children ? (
      children
     ) : (
      <ul className="dropdown__list">
       {items.map((item) => (
        <li key={item.label}>
         {item.onClick ? (
          <button
           type="button"
           className="dropdown__link-button"
           onClick={(e) => {
            e.stopPropagation();
            item.onClick?.();
            setOpen(false);
           }}
          >
           {item.label}
          </button>
         ) : (
          <a href={item.href ?? "#"} onClick={() => setOpen(false)}>
           {item.label}
          </a>
         )}
        </li>
       ))}
      </ul>
     )}
    </div>
   )}
  </div>
 );
}

export default Dropdown;
