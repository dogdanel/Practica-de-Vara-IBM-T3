import React, { useRef } from "react";
import { CategoryHeaderSBCM } from "../../atoms/CategoryHeader/CategoryHeader";
import { CategoryGridCard } from "../../molecules/CategoryGridCard/CategoryGridCard";
import { SliderNavigation } from "../../molecules/SliderNavigation/SliderNavigation";
import { CATEGORIES_DATA } from "../../../mocks/categories.mock";
import { useTranslation } from "../../../i18n";
import "./ShopByCategoryMenu.css";

export const ShopByCategoryMenu: React.FC = () => {
 const { t: translation } = useTranslation();
 const scrollContainerRef = useRef<HTMLDivElement>(null);

 const handleScroll = (direction: "left" | "right") => {
  if (scrollContainerRef.current) {
   const scrollAmount = 300;
   scrollContainerRef.current.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
   });
  }
 };

 return (
  <section className="shop-by-category">
   <div className="shop-by-category__header">
    <div className="shop-by-category__title-group">
     <CategoryHeaderSBCM titleKey="category.titleSBCM" />
     <a href="#categories" className="shop-by-category__link">
      {translation("category.allCategories")} &gt;
     </a>
    </div>
    <SliderNavigation
     onPrev={() => handleScroll("left")}
     onNext={() => handleScroll("right")}
    />
   </div>

   <div className="shop-by-category__list" ref={scrollContainerRef}>
    {CATEGORIES_DATA.map((item) => (
     <CategoryGridCard
      key={item.id}
      icon={item.icon}
      titleKey={item.titleKey}
      count={item.count}
      onClick={() => console.log(`Selected category: ${item.id}`)}
     />
    ))}
   </div>
  </section>
 );
};
