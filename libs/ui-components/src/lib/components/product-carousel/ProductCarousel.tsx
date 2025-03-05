'use client';

import { useRef } from 'react';
import './ProductCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '@ecommerce-nx/theme';

const products = [
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
    name: 'Product 1',
    price: '$49',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
    name: 'Product 2',
    price: '$59',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300',
    name: 'Product 3',
    price: '$39',
  },
];

export function ProductCarousel() {
  const { theme } = useTheme();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`product-carousel ${theme}`}>
      <button className="nav left" onClick={() => scroll('left')}>
        <FaChevronLeft />
      </button>
      <div className="carousel" ref={carouselRef}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button className="nav right" onClick={() => scroll('right')}>
        <FaChevronRight />
      </button>
    </div>
  );
}
