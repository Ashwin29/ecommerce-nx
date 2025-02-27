import React, { JSX } from 'react';
import './Typography.css';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'blockquote' | 'caption' | 'small';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  children,
  className = '',
}) => {
  const Tag =
    variant === 'caption' || variant === 'small'
      ? 'span'
      : (variant as keyof JSX.IntrinsicElements);
  return <Tag className={`typography ${variant} ${className}`}>{children}</Tag>;
};
