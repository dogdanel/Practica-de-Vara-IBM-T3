import React, { useState } from "react";
import { CategoryHeader } from "../../atoms/CategoryHeader/CategoryHeader";
import { TagList } from "../../molecules/TagList/TagList";
import { PRODUCT_TAGS_MOCK } from "../../../mocks/productTags.mock";
import type { ProductTag } from "../../../mocks/productTags.mock";
import type { TranslationKey } from "../../../i18n";
import "./ProductTagsSection.css";

export interface ProductTagsSectionProps {
 titleKey?: TranslationKey;
 initialTags?: ProductTag[];
 className?: string;
}

export const ProductTagsSection: React.FC<ProductTagsSectionProps> = ({
 titleKey = "tags.title",
 initialTags = PRODUCT_TAGS_MOCK,
 className = "",
}) => {
 const [tags, setTags] = useState<ProductTag[]>(initialTags);

 const handleRemoveTag = (id: string) => {
  setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
 };

 return (
  <aside className={`product-tags-section ${className}`.trim()}>
   <CategoryHeader titleKey={titleKey} />
   <div className="product-tags-section__content">
    <TagList tags={tags} onRemoveTag={handleRemoveTag} />
   </div>
  </aside>
 );
};
