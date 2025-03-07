'use client';

import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

interface Slide {
  imageUrl: string;
  caption: string;
}

const slides: Slide[] = [
  {
    imageUrl: `https://picsum.photos/1600/900?random=${Date.now()}`,
    caption: 'Biggest Sale of the Year!',
  },
  {
    imageUrl: `https://picsum.photos/1600/900?random=${Date.now()}`,
    caption: 'Exclusive Discounts for You',
  },
  {
    imageUrl: `https://picsum.photos/1600/900?random=${Date.now()}`,
    caption: 'New Arrivals Just Landed',
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-carousel">
      {/* Navigation Arrows */}
      <button
        className="arrow left"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        ❮
      </button>

      <div className="carousel-track">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? 'active' : 'hidden'
            }`}
          >
            <img src={slide.imageUrl} alt={slide.caption} />

            <div className="text-overlay">
              <h2 className="carousel-text">{slide.caption}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="arrow right"
        onClick={handleNext}
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
