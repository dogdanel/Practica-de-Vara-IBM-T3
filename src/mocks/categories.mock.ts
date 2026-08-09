export interface CategoryItemData {
  id: string;
  title: string;
  count: number;
  icon: string;
}

export const CATEGORIES_DATA: CategoryItemData[] = [
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