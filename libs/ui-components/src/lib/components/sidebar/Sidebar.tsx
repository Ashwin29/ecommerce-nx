'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@ecommerce-nx/theme';
import './Sidebar.css';

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  items: SidebarItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const { theme } = useTheme();

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`sidebar ${theme === 'dark' ? 'dark' : ''} ${
        isCollapsed ? 'collapsed' : ''
      }`}
    >
      <button
        className="toggleButton"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      <nav className="nav">
        {items.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="navItem"
            aria-label={item.name}
          >
            <span className="icon">{item.icon}</span>
            {!isCollapsed && <span className="label">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
