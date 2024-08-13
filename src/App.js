import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { Checkout } from "./Pages/Checkout";
import { RequiresAuth } from "./Components/RequiresAuth";
import { Navbar } from "./Navbar";
import productData from "./Data/test.json"

export default function App() {
  return (
    <div className="App">
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Product products={productData.data} />} />
        <Route path="/cart" element={ <RequiresAuth> <Cart /> </RequiresAuth> } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

    </div>
  );
}