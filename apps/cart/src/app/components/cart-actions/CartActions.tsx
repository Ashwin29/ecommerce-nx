'use client';

import React from 'react';
import './CartActions.css';
import { Button } from '@ecommerce-nx/ui-components';
import { useTheme } from '@ecommerce-nx/theme';

interface CartActionsProps {
  onUpdateCart: () => void;
  onProceedToCheckout: () => void;
}

export const CartActions: React.FC<CartActionsProps> = ({
  onUpdateCart,
  onProceedToCheckout,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`cartActions ${theme}`}
      role="region"
      aria-labelledby="cart-actions-heading"
    >
      <Button
        onClick={onUpdateCart}
        variant="secondary"
        aria-label="Update your cart items"
        className="updateCartButton"
      >
        Update Cart
      </Button>
      <Button
        onClick={onProceedToCheckout}
        variant="primary"
        aria-label="Proceed to checkout"
        className="checkoutButton"
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};
