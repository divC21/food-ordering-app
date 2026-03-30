import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {
  const status = useOnlineStatus();
  return (
    <header className="flex justify-between items-center bg-red-900 text-white text-xl p-2">
      <div>
        <h1>FoodOrder</h1>
      </div>
      <div className="flex justify-center gap-5">
        <ul
          className="flex p-4
           m-4"
        >
          <li>Online status: {status ? "🟢" : "🔴"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <span>🛒</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
