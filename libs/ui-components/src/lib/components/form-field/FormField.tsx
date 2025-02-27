import React from 'react';
import './FormField.css';
import { Typography } from '../typography/Typography';

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode; // Typically an <input> or similar
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  children,
}) => {
  return (
    <div className="formField">
      <Typography variant="p" className="label">
        {label}
      </Typography>
      {children}
      {error && (
        <Typography variant="small" className="error">
          {error}
        </Typography>
      )}
    </div>
  );
};
