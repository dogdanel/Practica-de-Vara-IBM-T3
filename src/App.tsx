import { ShopPage } from './components/templates/ShopPage/ShopPage';
import { I18nProvider } from './i18n';

function App() {
  return (
    <I18nProvider>
      <ShopPage />
    </I18nProvider>
  );
}

export default App;
