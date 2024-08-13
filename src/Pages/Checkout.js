import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./checkout.css";

import {CartContext } from "..";

export const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext);
  const [discount, setDiscount] = useState(0)
  const notify = () => toast.success("Order Placed");

  const handleDiscount = (e) => {
    setDiscount(e.target.value)
    toast.success(`Promo Code CART${e.target.value} Applied`);
  }

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

        <div style={{margin: "0rem 0rem"}} >
          <p>Apply Promo Code</p>
          <button value="10" onClick={handleDiscount} >CART10</button> 
          <button value="15" onClick={handleDiscount}>CART15</button> 
          <button onClick={() => toast.error("Promo Code Expired") } >CART20</button>
          <p>Discount Amount:- ₹{discount}</p>
          <button onClick={() => {setDiscount(0); toast.warn("Promo Code Removed") } } >Remove PromoCode</button>
        </div>
      </div>
      
      <p className="totalPrice">
        <strong>Total price:  ₹ {totalPrice - discount } </strong>
      </p>
      <button className="checkBtn" onClick={notify}>
        Place Order
      </button>
      <ToastContainer autoClose={2000} />

    </div>
  );
};
