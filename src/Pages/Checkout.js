import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./checkout.css";

import {CartContext } from "..";

export const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const notify = () => toast.success("Order Placed");

  return (
    <div>
      <h2> Order Summary </h2>
      <div className="check">
        {cart.map((item) => {
          const { id, name, price, image, quantity } = item;
          return (
            <div key={id} className="checkout">
              <img className="image" alt="product img" src={image} />
              <div className="checkoutProduct">
                <ul>{name}</ul>
                <ul style={{ textAlign: "left" }}>
                  Price:  ₹ {price} X {quantity}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <p className="totalPrice">
        <strong>Total price:  ₹ {totalPrice} </strong>
      </p>
      <button className="checkBtn" onClick={notify}>
        Place Order
      </button>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
