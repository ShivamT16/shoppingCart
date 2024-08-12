import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import { CartContext, CartProvider } from "./Contexts/CartContext";
import { ProductContext, ProductProvider } from "./Contexts/ProductContext";
import { AuthContext, AuthProvider } from "./Contexts/AuthContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export { CartContext };
export { ProductContext };
export { AuthContext };

root.render(
  <React.StrictMode>
   <Router>
      <ProductProvider>
        <CartProvider>
              <AuthProvider>
                  <App />
              </AuthProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>
);