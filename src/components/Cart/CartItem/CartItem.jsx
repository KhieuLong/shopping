import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/Context";
const CartItem = () => {
  const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <div className="name">{item.attributes.title}</div>
            <MdClose
              className="btn-close"
              onClick={() => {
                handleRemoveFromCart(item);
              }}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("desc", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                &#8377;{item.attributes.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
