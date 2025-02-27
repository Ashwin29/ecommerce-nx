// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { useState } from 'react';

import { Typography } from '@ecommerce-nx/ui-components';
import { CartItem } from './components/cart-item/CartItem';
import { CartSummary } from './components/cart-summary/CartSummary';
import { CartActions } from './components/cart-actions/CartActions';

export function App() {
  // Mock data; in a real app, this would come from state or an API
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: 'https://picsum.photos/200/300',
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
    },
    {
      id: 2,
      image: 'https://picsum.photos/200/300',
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
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div style={{ padding: '24px' }}>
      <Typography variant="h1">Your Cart</Typography>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          productImage={item.image}
          productName={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemove={() => handleRemove(item.id)}
          onQuantityChange={(newQty) => handleQuantityChange(item.id, newQty)}
        />
      ))}
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
    </div>
  );
}

export default App;
