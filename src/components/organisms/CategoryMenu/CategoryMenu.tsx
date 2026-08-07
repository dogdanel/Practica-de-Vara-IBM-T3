import React from "react";
import { CategoryHeader } from "../../atoms/CategoryHeader/CategoryHeader";
import { CategoryCard } from "../../molecules/CategoryCard/CategoryCard";
import { CATEGORIES_DATA } from "../../../mocks/categories.mock.ts";
import "./CategoryMenu.css";

export const CategoryMenu: React.FC = () => {
 return (
  <aside className="category-menu">
   <CategoryHeader title="Category" />
   <div className="category-menu__list">
    {CATEGORIES_DATA.map((category) => (
     <CategoryCard
      key={category.id}
      icon={category.icon}
      title={category.title}
      count={category.count}
      onClick={() => console.log(`Selected: ${category.title}`)}
     />
    ))}
   </div>
  </aside>
 );
};
