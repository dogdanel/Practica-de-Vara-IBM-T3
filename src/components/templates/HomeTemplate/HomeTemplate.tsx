import Header from "../../organisms/Header/Header";
import Banner from "../../organisms/Banner/Banner";
import Hero from "../../organisms/Hero/Hero";
import { ShopByCategoryMenu } from "../../organisms/ShopByCategoryMenu/ShopByCategoryMenu";
import { ShopPage } from "../ShopPage/ShopPage";
import { DealsSection } from "../../organisms/DealsSection/DealsSection";
import Footer from "../../Footer/Footer";
import { DEALS_MOCK } from "../../../mocks/DOTD.mock";
import { useTranslation } from "../../../i18n";
import "./HomeTemplate.css";
import { CategoryMenu } from "../../organisms/CategoryMenu/CategoryMenu";
import { ProductTagsSection } from "../../organisms/ProductTagsSection/ProductTagsSection";
import { FeaturedProductsSection } from "../../organisms/FeaturedProductsSection/FeaturedProductsSection";
import { PromoBanners } from "../../organisms/PromoBanners/PromoBanners";
import { promoCardsData } from "../../../mocks/promoCards.mock";

export default function HomeTemplate() {
 const { t: translation } = useTranslation();

 return (
  <div className="home">
   <div className="home__header">
    <Header />
   </div>

   <main className="home__main">
    <div className="home__banner-wrapper">
     <Banner />
    </div>

    <div className="home__content">
     <div className="home__content-layout">
      <div className="home__products-column">
       <ShopPage />
      </div>

      <aside className="home__sidebar">
       <CategoryMenu />
       <ProductTagsSection />
      </aside>
     </div>

     <section className="home__content">
      <div className="home__DOTD">
       <DealsSection
        title={translation("deals.title")}
        linkText={translation("deals.linkText")}
        deals={DEALS_MOCK.map((deal) => ({ ...deal }))}
       />
      </div>
     </section>

     <section className="home__shop-by-category">
      <PromoBanners banners={promoCardsData} />
      <ShopByCategoryMenu />
     </section>

     <section className="home__content">
      <FeaturedProductsSection />
     </section>

     <section className="home__hero">
      <Hero />
     </section>
    </div>
   </main>

   <Footer />
  </div>
 );
}
