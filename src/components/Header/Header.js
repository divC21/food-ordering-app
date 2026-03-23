import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <h1>FoodOrder</h1>
      </div>
      <div className="right-container">
        <nav className="nav-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="cart-icon">
          <span>🛒</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
