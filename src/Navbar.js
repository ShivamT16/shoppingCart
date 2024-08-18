import "./styles.css";
import { NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";

import DataBase from "./Data/test.json";
import { AuthContext, CartContext } from "./index";

export const Navbar = () => {

  const [search, setSearch] = useState("");
  const {cart} = useContext(CartContext);
  const { isLoggedIn, handleLogin } = useContext(AuthContext);

    return (
      <div>
        <nav>
        <NavLink className="nav1" to="/">
          Shopping Cart
        </NavLink>
        <div>
          <input
            className="nav2"
            type="text"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && <span className="dismiss" onClick={() => setSearch("")} >❌</span> }
        </div>

        <div className="nav3">
          <NavLink className="navLink" to="/">
            Explore
          </NavLink>
          <NavLink className="navLink" style={{marginTop: "-.2rem"}} to="/cart">
            Cart({cart.length > 0 ? "🛒" + cart.length : "🛒"})
          </NavLink>
          {isLoggedIn ? (
            <NavLink className="navLink" onClick={handleLogin}>
              Logout
            </NavLink>
          ) : (
            <NavLink className="navLink" to="login">
              Login
            </NavLink>
          )}
        </div>
      </nav>

      {search &&
      <div className="search-tab">
        {DataBase.data.filter(
          ({ name, category }) =>
            name
              .toUpperCase()
              .toLowerCase()
              .includes(search.toUpperCase().toLowerCase()) ||
            category
              .toUpperCase()
              .toLowerCase()
              .includes(search.toUpperCase().toLowerCase())
        ).map((item) => {
          const { id, name, category, image } = item;
          return (
            <div key={id} >
              <Link className="link2" to="">
                <img
                  style={{ height: "2rem", width: "2rem", border: "none" }}
                  alt="voice"
                  src={image}
                />
                {name} || ({category})
              </Link>
            </div>
          );
        }) } 
        </div>}

    </div>
    )
}