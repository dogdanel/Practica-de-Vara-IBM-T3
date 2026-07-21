import { useState } from 'react'
import SubscribeBox from '../../atoms/SubscribeBox/SubscribeBox'
import CarouselDots from '../../molecules/CarouselDots/CarouselDots'
import './Banner.css'

type Slide = {
  title: string[]
  subtitle: string
}

const SLIDES: Slide[] = [
  {
    title: ['Fresh Vegetables', 'Big discount'],
    subtitle: 'Sign up for the daily newsletter',
  },
  {
    title: ['Daily Groceries', 'Free delivery'],
    subtitle: 'Save up to 50% off on your first order',
  },
]

/** Organism: the hero banner carousel with the newsletter subscribe box. */
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
          onSubscribe={(email) => console.log('subscribe:', email)}
        />

        <CarouselDots
          count={SLIDES.length}
          active={active}
          onSelect={setActive}
        />
      </div>
    </section>
  )
}

export default Banner
