import React, { useRef } from 'react';
import { CategoryHeaderSBCM } from '../../atoms/CategoryHeader/CategoryHeader';
import { CategoryGridCard } from '../../molecules/CategoryGridCard/CategoryGridCard';
import { SliderNavigation } from '../../molecules/SliderNavigation/SliderNavigation';
import './ShopByCategoryMenu.css';

interface CategoryData {
  id: string;
  title: string;
  count: number;
  icon: string;
}

const CATEGORIES_DATA: CategoryData[] = [
  {
    id: '1',
    title: 'Baking Material',
    count: 10,
    icon: 'ph:chef-hat',
  },
  {
    id: '2',
    title: 'Bread and Juice',
    count: 12,
    icon: 'pinhead:loaf-of-bread-with-steam',
  },
  {
    id: '3',
    title: 'Clothing & Beauty',
    count: 8,
    icon: 'hugeicons:suit-01',
  },
  {
    id: '4',
    title: 'Deals of the Day',
    count: 4,
    icon: 'hugeicons:sale-tag-01',
  },
  {
    id: '5',
    title: 'Fresh Fuits',
    count: 12,
    icon: 'healthicons:fruits-outline',
  },
  {
    id: '6',
    title: 'Fresh Seafood',
    count: 6,
    icon: 'pinhead:four-legged-squid',
  },
  {
    id: '7',
    title: 'Milk & Diaries',
    count: 15,
    icon: 'pinhead:milk-carton-and-cheese',
  },
  {
    id: '8',
    title: 'Pet Foods & Toys',
    count: 8,
    icon: 'griddy-icons:pet-friendly',
  },
  {
    id: '9',
    title: 'Vegetables',
    count: 13,
    icon: 'healthicons:vegetables-outline',
  },
  {
    id: '10',
    title: 'Wines and Drinks',
    count: 10,
    icon: 'mdi:wine',
  },
  {
    id: '11',
    title: 'Uncategorized',
    count: 20,
    icon: 'bx:category',
  },
];

export const ShopByCategoryMenu: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="shop-by-category">
      <div className="shop-by-category__header">
        <div className="shop-by-category__title-group">
          <CategoryHeaderSBCM title="Shop by Category" />
          <a href="#categories" className="shop-by-category__link">
            All Categories &gt;
          </a>
        </div>
        <SliderNavigation
          onPrev={() => handleScroll('left')}
          onNext={() => handleScroll('right')}
        />
      </div>

      <div className="shop-by-category__list" ref={scrollContainerRef}>
        {CATEGORIES_DATA.map((item) => (
          <CategoryGridCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            count={item.count}
            onClick={() => console.log(`Selected category: ${item.title}`)}
          />
        ))}
      </div>
    </section>
  );
};