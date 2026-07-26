import React from 'react';
import { CategoryMenu } from './organisms/CategoryMenu/CategoryMenu';
import { ShopByCategoryMenu } from './organisms/ShopByCategoryMenu/ShopByCategoryMenu';

export const App: React.FC = () => {
  return (
    <div style={{ padding: '40px' }}>
      <CategoryMenu />
      <ShopByCategoryMenu />
    </div>
  );
};

export default App;