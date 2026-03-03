import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <h1>FoodOrder</h1>
      </div>
      <nav className="nav-container">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="cart-icon">
        <button>🛒 Cart</button>
      </div>
    </header>
  );
};

export default Header;
