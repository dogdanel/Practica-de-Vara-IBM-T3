import React from "react";
import { PromoCard } from "../../molecules/PromoCard/PromoCard";
import type { TranslationKey } from "../../../i18n";
import "./PromoBanners.css";

export interface PromoBannerData {
 id: string;
 titleKey: TranslationKey;
 buttonLabelKey?: TranslationKey;
 imageSrc: string;
 bgColor: string;
}

export interface PromoBannersProps {
 banners: PromoBannerData[];
}

export const PromoBanners: React.FC<PromoBannersProps> = ({ banners }) => {
 return (
  <section className="promo-banners">
   {banners.map((banner) => (
    <PromoCard
     key={banner.id}
     titleKey={banner.titleKey}
     buttonLabelKey={banner.buttonLabelKey}
     imageSrc={banner.imageSrc}
     bgColor={banner.bgColor}
     onButtonClick={() => console.log(`Navigate to banner: ${banner.id}`)}
    />
   ))}
  </section>
 );
};
