import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import Button from "../Button/Button";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const status = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartLength = useSelector((state) => state.cart.items.length);

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
          <li className="px-2">
            <Link to="/cart">Cart({cartLength})</Link>
          </li>
          <li>
            {loginStatus ? (
              <Button
                classNames="!m-0 !py-0 hover:!bg-red-900 pointer"
                name="Logout"
                type="primary"
                onClick={() => {
                  setLoginStatus(false);
                }}
              />
            ) : (
              <Button
                classNames="!m-0 !py-0 hover:!bg-red-900 pointer"
                name="Login"
                type="primary"
                onClick={() => {
                  setLoginStatus(true);
                }}
              />
            )}
          </li>
          {/* <li>
            <span>{loggedInUser}</span>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
