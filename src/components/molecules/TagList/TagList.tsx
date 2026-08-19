import React from "react";
import { Tag } from "../../atoms/Tag/Tag";
import type { ProductTag } from "../../../mocks/productTags.mock";
import "./TagList.css";

export interface TagListProps {
 tags: ProductTag[];
 onRemoveTag?: (id: string) => void;
 className?: string;
}

export const TagList: React.FC<TagListProps> = ({
 tags,
 onRemoveTag,
 className = "",
}) => {
 return (
  <div className={`tag-list ${className}`.trim()}>
   {tags.map((tag) => (
    <Tag
     key={tag.id}
     labelKey={tag.labelKey}
     label={tag.label}
     onRemove={() => onRemoveTag?.(tag.id)}
    />
   ))}
  </div>
 );
};
