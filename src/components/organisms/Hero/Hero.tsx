import SubscribeForm from '../../molecules/SubscribeForm/SubscribeForm';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Stay home &amp; get your daily needs from our shop</h1>
          <p className="hero__subtitle">
            Start Your Daily Shopping with <span className="hero__subtitle-accent">Nest Mart</span>
          </p>
          <SubscribeForm />
        </div>
        <img
          src="/hero/delivery-veggies.png"
          alt="Curier Nest Mart livrând o cutie cu fructe și legume proaspete"
          className="hero__image"
        />
      </div>
    </section>
  );
}
