import './CarouselDots.css'

type CarouselDotsProps = {
  count: number
  active: number
  onSelect?: (index: number) => void
  ariaLabel?: string
  dotAriaLabel?: (index: number) => string
}

function CarouselDots({
  count,
  active,
  onSelect,
  ariaLabel,
  dotAriaLabel,
}: CarouselDotsProps) {
  return (
    <div className="carousel-dots" role="tablist" aria-label={ariaLabel}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-label={dotAriaLabel?.(index) ?? String(index + 1)}
          aria-selected={index === active}
          className={`carousel-dots__dot${index === active ? ' is-active' : ''}`}
          onClick={() => onSelect?.(index)}
        />
      ))}
    </div>
  )
}

export default CarouselDots
