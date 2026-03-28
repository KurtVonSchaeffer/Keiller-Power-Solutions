import { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.css';

export default function Carousel({ slides, autoPlay = true, interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);
  const total = slides.length;

  const go = useCallback((idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((idx + total) % total);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [total, isTransitioning]);

  const next = useCallback(() => go(current + 1), [go, current]);
  const prev = useCallback(() => go(current - 1), [go, current]);

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, next]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    if (autoPlay) timerRef.current = setInterval(next, interval);
  };

  // Touch & drag
  const onDragStart = (e) => {
    setDragging(true);
    setDragStart(e.touches ? e.touches[0].clientX : e.clientX);
    pause();
  };
  const onDragEnd = (e) => {
    if (!dragging) return;
    const end = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStart - end;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setDragging(false);
    resume();
  };

  return (
    <div
      className="carousel"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onTouchStart={onDragStart}
      onTouchEnd={onDragEnd}
    >
      {/* Slides track */}
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="carousel__slide">
            {slide.image && (
              <img src={slide.image} alt={slide.title || `Slide ${i + 1}`} draggable="false" />
            )}
            {slide.content && (
              <div className="carousel__slide-custom">{slide.content}</div>
            )}
            {(slide.title || slide.caption) && (
              <div className="carousel__caption">
                {slide.title   && <h3 className="carousel__caption-title">{slide.title}</h3>}
                {slide.caption && <p  className="carousel__caption-text">{slide.caption}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      {/* Dots */}
      <div className="carousel__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot ${i === current ? 'carousel__dot--active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {autoPlay && (
        <div className="carousel__progress">
          <div
            className="carousel__progress-bar"
            key={current}
            style={{ animationDuration: `${interval}ms` }}
          />
        </div>
      )}
    </div>
  );
}
