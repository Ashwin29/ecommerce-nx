'use client';

import React, { Suspense } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button, Stepper } from '@ecommerce-nx/ui-components';

// Define steps with their corresponding routes
const steps = [
  { name: 'Shipping', path: '/checkout/shipping' },
  { name: 'Payment', path: '/checkout/payment' },
  { name: 'Review', path: '/checkout/review' },
  { name: 'Confirmation', path: '/checkout/order-confirmation' },
];

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Determine current step based on the current URL
  const currentStepIndex =
    steps.findIndex((step) => pathname.includes(step.path)) !== -1
      ? steps.findIndex((step) => pathname.includes(step.path))
      : 0;

  const handleStepChange = (index: number) => {
    router.push(steps[index].path);
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      router.push(steps[currentStepIndex + 1].path);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      router.push(steps[currentStepIndex - 1].path);
    }
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Persistent Stepper */}
      <Suspense fallback={<div>Loading Stepper...</div>}>
        <Stepper
          steps={steps.map((step) => step.name)}
          currentStep={currentStepIndex}
          onStepChange={handleStepChange}
        />
      </Suspense>
      {/* Render current page content */}
      <div style={{ marginTop: '32px', minHeight: '300px' }}>{children}</div>
      {/* Navigation Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '24px',
        }}
      >
        {currentStepIndex > 0 && (
          <Button onClick={handleBack} variant="secondary">
            Back
          </Button>
        )}
        {currentStepIndex < steps.length - 1 && (
          <Button onClick={handleNext} variant="primary">
            Next
          </Button>
        )}
        {currentStepIndex === steps.length - 1 && (
          <Button onClick={() => alert('Order Placed')} variant="primary">
            Place Order
          </Button>
        )}
      </div>
    </div>
  );
}
