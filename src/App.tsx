import React from 'react';
import { CategoryCard } from './molecules/CategoryCard/CategoryCard';
import BakingMaterial from '../public/CategoryIcons/BakingMaterial.png';

export const App: React.FC = () => {
  const handleCategoryClick = () => {
    console.log('Category clicked!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px' }}>
      <CategoryCard
        icon={BakingMaterial}
        title="Baking Material"
        count={1}
        onClick={handleCategoryClick}
      />
    </div>
  );
};

export default App;