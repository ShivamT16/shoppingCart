import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { CartContext, CartProvider } from "./Contexts/CartContext";
import { AuthContext, AuthProvider } from "./Contexts/AuthContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export { CartContext };
export { AuthContext };

root.render(
  <React.StrictMode>
   <Router>
        <CartProvider>
              <AuthProvider>
                  <App />
              </AuthProvider>
        </CartProvider>
    </Router>
  </React.StrictMode>
);