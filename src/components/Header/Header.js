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
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
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
