import React from 'react';
import { CategoryMenu } from './organisms/CategoryMenu/CategoryMenu';

export const App: React.FC = () => {
  return (
    <div style={{ padding: '40px' }}>
      <CategoryMenu />
    </div>
  );
};

export default App;