import type { TranslationKey } from "../i18n";

export interface ProductTag {
 id: string;
 labelKey: TranslationKey;
 label?: string;
}

export const PRODUCT_TAGS_MOCK: ProductTag[] = [
 { id: "tag-1", labelKey: "tags.brown" },
 { id: "tag-2", labelKey: "tags.coffees" },
 { id: "tag-3", labelKey: "tags.cream" },
 { id: "tag-4", labelKey: "tags.hodo" },
 { id: "tag-5", labelKey: "tags.meats" },
 { id: "tag-6", labelKey: "tags.organic" },
 { id: "tag-7", labelKey: "tags.snack" },
 { id: "tag-8", labelKey: "tags.vegetables" },
];
