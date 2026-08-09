import { useState } from 'react'
import SubscribeBox from '../../atoms/SubscribeBox/SubscribeBox'
import CarouselDots from '../../molecules/CarouselDots/CarouselDots'
import './Banner.css'

const SLIDES = [
  {
    title: ['Fresh Vegetables', 'Big discount'],
    subtitle: 'Sign up for the daily newsletter',
  },
  {
    title: ['Daily Groceries', 'Free delivery'],
    subtitle: 'Save up to 50% off on your first order',
  },
]

function Banner() {
  const [active, setActive] = useState(0)

  const slide = SLIDES[active]

  return (
    <section className="banner">
      <div className="container banner__inner">
        <h1 className="banner__title">
          {slide.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <p className="banner__subtitle">{slide.subtitle}</p>

        <SubscribeBox
          placeholder="Your email address"
          buttonLabel="Subscribe"
          onSubscribe={(email) => console.log('subscribe:', email)}
        />

        <CarouselDots
          count={SLIDES.length}
          active={active}
          onSelect={setActive}
          ariaLabel="Banner slides"
          dotAriaLabel={(index) => `Slide ${index + 1}`}
        />
      </div>
    </section>
  )
}

export default Banner
