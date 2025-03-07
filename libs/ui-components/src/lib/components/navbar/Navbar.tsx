'use client';

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaShoppingBag, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@ecommerce-nx/theme';
import { Typography } from '../typography/Typography';

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [cartItemCount, setCartItemCount] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCartItemCount(3); // Mock cart count, replace with real logic
  }, []);

  if (!isMounted) return null; // Prevent SSR hydration mismatch

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Left Section: Logo & Desktop Links */}
        <div className="nav-left">
          {/* Fancy Logo */}
          <a href="http://localhost:3000/" className="fancy-logo">
            <Typography variant="h2">E-Shop</Typography>
          </a>

          {/* Desktop Links */}
          <div className="nav-links">
            <a href="http://localhost:3000/" className="nav-link">
              <Typography variant="p">Home</Typography>
            </a>
            <a href="/categories" className="nav-link">
              <Typography variant="p">Collections</Typography>
            </a>
            <a href="/about" className="nav-link">
              <Typography variant="p">About</Typography>
            </a>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Mobile Menu (Links + Sign In) */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Typography variant="p">Home</Typography>
          </a>
          <a href="/categories" onClick={() => setIsMobileMenuOpen(false)}>
            <Typography variant="p">Collections</Typography>
          </a>
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            <Typography variant="p">About</Typography>
          </a>
          <a href="/signin" onClick={() => setIsMobileMenuOpen(false)}>
            <Typography variant="p">Sign In</Typography>
          </a>
        </div>

        {/* Right Section: Sign In (Desktop), Cart, Theme Toggle */}
        <div className="nav-right">
          {/* Sign In (Desktop) */}
          <a href="/signin" className="sign-in">
            <Typography variant="p">Sign In</Typography>
          </a>

          {/* Cart Icon */}
          <div
            className="cart-icon"
            onClick={() => (window.location.href = 'http://localhost:4200')}
          >
            <FaShoppingBag size={16} />
            {cartItemCount !== null && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <FaMoon size={20} />
            ) : (
              <FaSun color="#fff" size={20} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
