import React from 'react';
import './CartActions.css';
import { Button } from '@ecommerce-nx/ui-components';

interface CartActionsProps {
  onUpdateCart: () => void;
  onProceedToCheckout: () => void;
}

export const CartActions: React.FC<CartActionsProps> = ({
  onUpdateCart,
  onProceedToCheckout,
}) => {
  return (
    <div className="cartActions">
      <Button onClick={onUpdateCart} variant="secondary">
        Update Cart
      </Button>
      <Button onClick={onProceedToCheckout} variant="primary">
        Proceed to Checkout
      </Button>
    </div>
  );
};
