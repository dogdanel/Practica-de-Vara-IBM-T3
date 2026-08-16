import { PromoCard } from "../../molecules/PromoCard/PromoCard";
import "./PromoBanners.css";

interface PromoBannerData {
 id: string;
 title: string;
 buttonLabel: string;
 imageSrc: string;
 bgColor: string;
}

interface PromoBannersProps {
 banners: PromoBannerData[];
}

export const PromoBanners = ({ banners }: PromoBannersProps) => {
 return (
  <section className="promo-banners">
   {banners.map((banner) => (
    <PromoCard
     key={banner.id}
     title={banner.title}
     buttonLabel={banner.buttonLabel}
     imageSrc={banner.imageSrc}
     bgColor={banner.bgColor}
     onButtonClick={() => console.log(`Navigate to: ${banner.title}`)}
    />
   ))}
  </section>
 );
};
