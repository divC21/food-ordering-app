import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/Button";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1>Cart</h1>
      <Button
        type="secondary"
        onClick={() => {
          dispatch(clearCart());
        }}
        name="Clear Cart"
      />
      {cartItems.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default Cart;
