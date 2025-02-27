import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--text)]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="mt-1 p-2 w-full border border-[var(--border)] rounded-md bg-[var(--card)] text-[var(--text)]"
      />
    </div>
  );
};
