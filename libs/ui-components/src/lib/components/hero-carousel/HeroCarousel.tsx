'use client';

import { useState, useEffect } from 'react';
import './HeroCarousel.css';
import { useTheme } from '@ecommerce-nx/theme';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  {
    id: 1,
    image: 'https://picsum.photos/1920/1080',
    caption: 'Biggest Sale of the Year!',
  },
  {
    id: 2,
    image: 'https://picsum.photos/1920/1080',
    caption: 'Exclusive Discounts for You',
  },
  {
    id: 3,
    image: 'https://picsum.photos/1920/1080',
    caption: 'New Arrivals Just Landed',
  },
];
export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, 5000);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="hero-carousel" data-theme={theme}>
      <div className="carousel-content">
        <button className="arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <img
          src={images[current].image}
          alt={images[current].caption}
          className="carousel-image"
        />
        <div className="text-overlay">
          <h1>{images[current].caption}</h1>
        </div>
        <button className="arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
