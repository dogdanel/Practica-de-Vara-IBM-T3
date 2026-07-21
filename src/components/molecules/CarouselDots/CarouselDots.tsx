import './CarouselDots.css'

type CarouselDotsProps = {
  count: number
  active: number
  onSelect?: (index: number) => void
}

/** Molecule: slide indicators for the banner carousel. */
function CarouselDots({ count, active, onSelect }: CarouselDotsProps) {
  return (
    <div className="carousel-dots" role="tablist" aria-label="Banner slides">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-label={`Slide ${index + 1}`}
          aria-selected={index === active}
          className={`carousel-dots__dot${index === active ? ' is-active' : ''}`}
          onClick={() => onSelect?.(index)}
        />
      ))}
    </div>
  )
}

export default CarouselDots
