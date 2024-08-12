import "./styles.css";
import { NavLink, Link } from "react-router-dom";
import { useState, useContext } from "react";

import { DataBase} from "./Data/productsDB";
import { ProductContext, AuthContext } from "./index";

export const Navbar = () => {

  const [search, setSearch] = useState("");
  const { handleProduct } = useContext(ProductContext);
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
          <NavLink className="navLink" to="/product">
            Explore
          </NavLink>
          <NavLink className="navLink" to="/cart">
            Cart
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
        {DataBase.filter(
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
            <div
              key={id}
              onClick={() => {
                handleProduct(id);
                setSearch("");
              }}
            >
              <Link className="link2" to="/productDetail">
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