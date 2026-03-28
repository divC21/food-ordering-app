import { Link } from "react-router-dom";
import "./header.css";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus();
  return (
    <header className="header-container">
      <div className="logo">
        <h1>FoodOrder</h1>
      </div>
      <div className="right-container">
        <nav className="nav-container">
          <ul>
            <li>Online status: {status ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
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
