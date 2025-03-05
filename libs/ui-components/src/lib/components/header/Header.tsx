'use client';

import './Header.css';
import { FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';
import { useTheme } from '@ecommerce-nx/theme';

interface HeaderProps {
  title: string;
  actions?: React.ReactNode; // Allows custom buttons/actions on the right
}

export const Header: React.FC<HeaderProps> = ({ title, actions }) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className={`header ${theme === 'dark' ? 'dark' : ''}`}>
      <Link href="/" className="logo">
        {title}
      </Link>

      <div className="actions">
        {actions}
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="themeToggle"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
};
