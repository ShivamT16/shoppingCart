import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./login.css";

import { AuthContext } from "..";

export const Login = () => {
  const {
    userLogin,
    handleLoginInput,
    handleLoginSubmit,
    handleTestUser
  } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="email"> </label>
          <input
            type="email"
            className="loginInput"
            autoComplete="off"
            value={userLogin.email}
            onChange={handleLoginInput}
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="password"> </label>
          <input
            type={showPassword ? "text" : "password"}
            className="loginInput"
            autoComplete="off"
            value={userLogin.password}
            onChange={handleLoginInput}
            name="password"
            id="password"
            placeholder="Password"
          />

          <button
            className="showBtn"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? " Hide." : "Show"}
          </button>
        </div>
        <button type="submit"> Login </button>
        <button onClick={handleTestUser}> Login as Test User</button>
      </form>

      <p>
        Don't have an account?
        <Link className="link1" to="/signup">
          SignUp here
        </Link>
      </p>
      <ToastContainer autoClose={2000} />
      
    </div>
  );
};
