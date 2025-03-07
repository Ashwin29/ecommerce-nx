'use client';

import { useRef } from 'react';
import './ProductCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '@ecommerce-nx/theme';

const products = [
  {
    id: 1,
    image: 'https://picsum.photos/400/300',
    name: 'Product 1',
    price: '$49',
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/300',
    name: 'Product 2',
    price: '$59',
  },
  {
    id: 3,
    image: 'https://picsum.photos/400/300',
    name: 'Product 3',
    price: '$39',
  },
  {
    id: 4,
    image: 'https://picsum.photos/400/300',
    name: 'Product 4',
    price: '$69',
  },
];

export function ProductCarousel() {
  const { theme } = useTheme();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -250 : 250,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`product-carousel ${theme}`}>
      <button
        className="nav left"
        onClick={() => scroll('left')}
        aria-label="Scroll left"
      >
        <FaChevronLeft />
      </button>

      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef} role="list">
          {products.map((product) => (
            <div key={product.id} className="product-card" role="listitem">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        className="nav right"
        onClick={() => scroll('right')}
        aria-label="Scroll right"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
