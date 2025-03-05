// Uncomment this line to use CSS modules
// import styles from './app.module.css';

import { Header, Sidebar } from '@ecommerce-nx/ui-components';
import { FaHome, FaUsers, FaChartBar } from 'react-icons/fa';

const sidebarItems = [
  { name: 'Dashboard', icon: <FaHome />, path: '/admin' },
  { name: 'Users', icon: <FaUsers />, path: '/admin/users' },
  { name: 'Analytics', icon: <FaChartBar />, path: '/admin/analytics' },
];

export function Admin() {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header title="Admin Panel" />
        <div style={{ display: 'flex', flex: 1 }}>
          <Sidebar items={sidebarItems} />
        </div>
      </div>
    </div>
  );
}

export default Admin;
