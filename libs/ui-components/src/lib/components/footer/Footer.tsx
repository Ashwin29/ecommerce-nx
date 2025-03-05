import { useTheme } from '@ecommerce-nx/theme';
import './footer.css';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}`}>
      <div className="container">
        <div className="column">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="column">
          <h4>Help</h4>
          <ul>
            <li>Support</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="column">
          <h4>Follow Us</h4>
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
