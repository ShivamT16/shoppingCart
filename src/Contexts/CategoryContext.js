import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [state, setState] = useState();

  const handleCategory = (item) => {
    setState((state) => item.toLowerCase());
  };

  return (
    <CategoryContext.Provider value={{ state, handleCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
