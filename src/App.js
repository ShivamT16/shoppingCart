import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { DataBase, Category } from "./Data/productsDB";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { Checkout } from "./Pages/Checkout";
import { RequiresAuth } from "./Components/RequiresAuth";
import { Navbar } from "./Navbar";

export default function App() {
  return (
    <div className="App">
    
      <Navbar />
    
      <Routes>
        <Route path="/product" element={<Product products={DataBase} categories={Category} />} />
        <Route path="/cart" element={ <RequiresAuth> <Cart /> </RequiresAuth> } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}