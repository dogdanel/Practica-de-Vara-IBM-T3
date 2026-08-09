import React, { useState } from 'react';
import { CategoryTab } from '../../atoms/CategoryTab/CategoryTab';
import { useTranslation } from '../../../i18n';
import type { TranslationKey } from '../../../i18n';
import './CategoryFilter.css';

interface CategoryFilterProps {
  /** Translation keys of the categories, e.g. 'category.all' */
  categories: readonly TranslationKey[];
  defaultActive?: TranslationKey;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  defaultActive,
  className = '',
}) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<TranslationKey | undefined>(
    defaultActive ?? categories[0],
  );

  return (
    <nav
      className={`category-filter ${className}`.trim()}
      aria-label={t('shop.filters.ariaLabel')}
    >
      {categories.map((category) => (
        <CategoryTab
          key={category}
          label={t(category)}
          isActive={category === activeCategory}
          onClick={() => setActiveCategory(category)}
        />
      ))}
    </nav>
  );
};
