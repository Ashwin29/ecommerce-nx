// libs/ui-components/src/components/Stepper.tsx
'use client';

import React from 'react';
import './Stepper.css';
import { Typography } from '../typography/Typography';

interface StepperProps {
  steps: string[];
  currentStep: number; // 0-based index
  onStepChange?: (stepIndex: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onStepChange,
}) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === currentStep ? 'active' : ''}`}
          onClick={() => onStepChange && onStepChange(index)}
        >
          <Typography variant="p">{step}</Typography>
        </div>
      ))}
    </div>
  );
};
