import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import axios from "axios";

const Cart = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const submitOrderHandler = async (userData) => {
    let res = await axios.post("http://localhost:3005/orders", {
      user: userData,
      orderedItems: cartCtx.items,
    });
    console.log(res);
    setIsSubmit(true);
    cartCtx.clearCart();
  };

  return (
    <Modal onClose={props.onClose}>
      {!isSubmit && (
        <div>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>Rs {totalAmount}</span>
          </div>
          {isCheckout && (
            <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />
          )}
          {!isCheckout && (
            <div className={classes.actions}>
              <button
                className={classes["button--alt"]}
                onClick={props.onClose}
              >
                Close
              </button>
              {hasItems && (
                <button className={classes.button} onClick={orderHandler}>
                  Order
                </button>
              )}
            </div>
          )}
        </div>
      )}
      {isSubmit && <p className={classes.text}>Order has been submitted</p>}
    </Modal>
  );
};

export default Cart;
