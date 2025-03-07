'use client';

import { useState } from 'react';
import { Typography, Button } from '@ecommerce-nx/ui-components';
import { CartItem } from './components/cart-item/CartItem';
import { CartSummary } from './components/cart-summary/CartSummary';
import { CartActions } from './components/cart-actions/CartActions';
import './app.css';

export function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: 'https://picsum.photos/500',
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
    },
    {
      id: 2,
      image: 'https://picsum.photos/500',
      name: 'Product 2',
      price: 19.99,
      quantity: 1,
    },
  ]);

  const handleRemove = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 5.99 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-container">
      <Typography variant="h1" className="cart-title">
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <Typography variant="h3">Your cart is empty.</Typography>
          <Button onClick={() => (window.location.href = '/')}>Shop Now</Button>
        </div>
      ) : (
        <div className="cart-layout">
          {/* LEFT - Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                productImage={item.image}
                productName={item.name}
                price={item.price}
                quantity={item.quantity}
                onRemove={() => handleRemove(item.id)}
                onQuantityChange={(newQty) =>
                  handleQuantityChange(item.id, newQty)
                }
              />
            ))}
          </div>

          {/* RIGHT - Order Summary */}
          <aside className="cart-summary-section">
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              tax={tax}
              total={total}
            />
            <CartActions
              onUpdateCart={() => alert('Cart Updated!')}
              onProceedToCheckout={() =>
                (window.location.href = 'http://localhost:4300')
              }
            />
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
