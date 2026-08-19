import { useState } from "react";
import SubscribeBox from "../../atoms/SubscribeBox/SubscribeBox";
import CarouselDots from "../../molecules/CarouselDots/CarouselDots";
import useTranslation from "../../../i18n/useTranslation";
import "./Banner.css";

function Banner() {
 const { t: translation } = useTranslation();
 const [active, setActive] = useState(0);

 const slides = [
  {
   title: [translation("Banner.title1"), translation("Banner.subtitle")],
   subtitle: translation("Banner.newsletterText"),
  },
  {
   title: [translation("Banner.title2"), translation("Banner.subtitle")],
   subtitle: translation("Banner.newsletterText"),
  },
 ];

 const slide = slides[active];

 return (
  <section className="banner">
   <div className="container banner__inner">
    <h1 className="banner__title">
     {slide.title.map((line, index) => (
      <span key={index}>{line}</span>
     ))}
    </h1>

    <p className="banner__subtitle">{slide.subtitle}</p>

    <SubscribeBox
     placeholder={translation("Banner.emailPlaceholder")}
     buttonLabel={translation("Banner.subscribeButton")}
     onSubscribe={(email) => console.log("subscribe:", email)}
    />

    <CarouselDots
     count={slides.length}
     active={active}
     onSelect={setActive}
     ariaLabel="Banner slides"
     dotAriaLabel={(index) => `Slide ${index + 1}`}
    />
   </div>
  </section>
 );
}

export default Banner;
