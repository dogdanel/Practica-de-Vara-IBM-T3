import Header from '../../organisms/Header/Header';
import Banner from '../../organisms/Banner/Banner';
import Hero from '../../organisms/Hero/Hero';
import { ShopByCategoryMenu } from '../../organisms/ShopByCategoryMenu/ShopByCategoryMenu';
import { ShopPage } from '../ShopPage/ShopPage';
import { DealsSection } from '../../organisms/DealsSection/DealsSection';
import Footer from '../../Footer/Footer';
import { deals } from '../../../data/deals';
import { useTranslation } from '../../../i18n';
import './HomeTemplate.css';

export default function HomeTemplate() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Header />

      <main className="home__main">
        <Banner />

        <section className="home__section container">
          <ShopByCategoryMenu />
        </section>

        <section className="home__section container">
          <ShopPage />
        </section>

        <section className="home__section container">
          <DealsSection
            title={t('deals.title')}
            linkText={t('deals.linkText')}
            deals={deals.map((deal) => ({ ...deal }))}
          />
        </section>

        <section className="home__hero">
          <Hero />
        </section>
      </main>

      <Footer />
    </div>
  );
}
