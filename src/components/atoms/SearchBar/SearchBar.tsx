import { useState } from "react";
import type { FormEvent } from "react";
import Button from "../Button/Button";
import useTranslation from "../../../i18n/useTranslation";
import "./SearchBar.css";

type SearchBarProps = {
 placeholder?: string;
 buttonLabel?: string;
 onSearch?: (query: string) => void;
};

function SearchBar({ placeholder, buttonLabel, onSearch }: SearchBarProps) {
 const { t: translation } = useTranslation();
 const [query, setQuery] = useState("");

 const activePlaceholder =
  placeholder ?? translation("MainBar.searchPlaceholder");
 const activeButtonLabel = buttonLabel ?? translation("MainBar.searchButton");

 const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
  onSearch?.(query.trim());
 };

 return (
  <form className="search-bar" role="search" onSubmit={handleSubmit}>
   <input
    type="search"
    className="search-bar__input"
    placeholder={activePlaceholder}
    aria-label={activePlaceholder}
    value={query}
    onChange={(event) => setQuery(event.target.value)}
   />
   <Button type="submit" className="search-bar__button">
    {activeButtonLabel}
   </Button>
  </form>
 );
}

export default SearchBar;
