import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (item) => {
    const findProduct = cart.find((element) => element.id === item.id);

    if (findProduct) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return {
              ...cartItem
            };
          }
        })
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleDelete = (element) => {
    setCart(cart.filter(({ id }) => id !== element));
  };

  const handleIncreaseQuantity = (item) => {
    setCart(
      [...cart].map((element) =>
        element.id === item.id
          ? { ...element, quantity: element.quantity + 1 }
          : element
      )
    );
  };

  const handleDecreaseQuantity = (item) => {
    setCart(
      [...cart].map((element) =>
        element.id === item.id
          ? { ...element, quantity: element.quantity - 1 }
          : element
      )
    );
  };

  const totalPrice = cart.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  );

  const cartNotify = () => toast.success("Added to Cart");
  const deleteNotify = () => toast.success("Item removed");

  return (
    <CartContext.Provider
      value={{
        cart,
        handleCartUpdate,
        handleDelete,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        totalPrice,
        cartNotify,
        deleteNotify
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
