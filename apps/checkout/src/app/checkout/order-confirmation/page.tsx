'use client';

import { Typography } from '@ecommerce-nx/ui-components';

export default function ConfirmationPage() {
  return (
    <div
      style={{
        padding: '24px',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1">Thank You!</Typography>
      <Typography variant="p">
        Your order has been placed successfully.
      </Typography>
    </div>
  );
}
