import { ShopPage } from './components/templates/ShopPage/ShopPage';
import { I18nProvider } from './i18n';

export const App: React.FC = () => {
  const handleCategoryClick = () => {
    console.log('Category clicked!');
  };

  return (
    <I18nProvider>
      <ShopPage />
    </I18nProvider>
  );
}

export default App;
