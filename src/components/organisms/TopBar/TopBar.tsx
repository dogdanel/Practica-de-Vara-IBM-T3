import ButtonSet from "../../atoms/ButtonSet/ButtonSet";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import useTranslation from "../../../i18n/useTranslation";
import type { Language } from "../../../i18n/translations";
import "./TopBar.css";

const HELP_PHONE = "+1800900122";

const LANGUAGES: { label: string; code: Language }[] = [
 { label: "English", code: "en" },
 { label: "Română", code: "ro" },
 { label: "Français", code: "fr" },
];

const CURRENCIES = [{ label: "INR" }, { label: "USD" }, { label: "EUR" }];

function TopBar() {
 const { locale, setLocale, t: translation } = useTranslation();

 const links = [
  { label: translation("TopBar.aboutUs") },
  { label: translation("TopBar.myAccount") },
  { label: translation("TopBar.wishlist") },
  { label: translation("TopBar.orderTracking") },
 ];

 const currentLanguageLabel =
  LANGUAGES.find((lang) => lang.code === locale)?.label || "English";

 const languageItems = LANGUAGES.map((lang) => ({
  label: lang.label,
  onClick: () => setLocale(lang.code),
 }));

 return (
  <div className="top-bar">
   <div className="container top-bar__inner">
    <ButtonSet items={links} ariaLabel="Utility" />

    <p className="top-bar__notice">{translation("TopBar.notice")}</p>

    <div className="top-bar__right">
     <span className="top-bar__help">
      {translation("TopBar.needHelp")}{" "}
      <a href={`tel:${HELP_PHONE}`}>{HELP_PHONE}</a>
     </span>
     <Dropdown
      label={currentLanguageLabel}
      items={languageItems}
      align="right"
     />
     <Dropdown label="USD" items={CURRENCIES} align="right" />
    </div>
   </div>
  </div>
 );
}

export default TopBar;
