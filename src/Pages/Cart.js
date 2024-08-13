import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./cart.css";

import { CartContext } from "..";

export const Cart = () => {
  const {
    cart,
    handleDelete,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    totalPrice,
    deleteNotify
  } = useContext(CartContext);

  return (
    <div>

      <div className="cartHeader">
        <p> Total Item In The Cart - {cart.length} </p>
        <p>Total price-  ₹ {totalPrice}</p>
        <Link className="link" to="/checkout">
          {cart.length > 0 && <button className="nextBtn">Next</button>}
        </Link>
      </div>

      <div className="cart">
        {cart.length > 0 ? (
          cart.map((item) => {
            const { id, name, price, image, quantity } = item;

            return (
              <div key={id} className="cartProduct">
                <img className="cartImage" alt="product img" src={image} />
                <ul>{name}</ul>
                <ul>₹{price}</ul>
                <div>
                  <button
                    onClick={() => handleDecreaseQuantity(item)}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  {quantity}
                  <button
                    type="button"
                    onClick={() => handleIncreaseQuantity(item)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(id);
                    deleteNotify();
                  }}
                >
                  Remove
                </button>
                
              </div>
            );
          })
        ) : (
          <h2>
            Cart is Empty, please 
            <Link className="link" to="/">
               "Explore"
            </Link>{" "}
          </h2>
        )}
      </div>

      <Link className="link" to="/checkout">
        {cart.length > 2 && <button className="nextBtn">Next</button>}
      </Link>
      <ToastContainer autoClose={2000} />

    </div>
  );
};
