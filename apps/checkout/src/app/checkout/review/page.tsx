'use client';

import { Button, OrderSummary, Typography } from '@ecommerce-nx/ui-components';

export default function ReviewPage() {
  // Dummy data for review
  const subtotal = 100;
  const shipping = 10;
  const tax = 8;
  const total = 118;

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h1">Review Your Order</Typography>
      <OrderSummary
        subtotal={subtotal}
        shipping={shipping}
        tax={tax}
        total={total}
      />
      <Button onClick={() => alert('Order Placed')} variant="primary">
        Place Order
      </Button>
    </div>
  );
}
