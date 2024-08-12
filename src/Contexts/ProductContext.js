import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [product, setProduct] = useState();

  const handleProduct = (item) => {
    setProduct((product) => item);
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        handleProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
