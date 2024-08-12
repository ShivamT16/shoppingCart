import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./signup.css";

import { AuthContext } from "..";

export const SignUp = () => {
  const {
    handleSigninSubmit,
    handleSigninInput,
    userRegistration
  } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup">
      <form action="submit" onSubmit={handleSigninSubmit}>
        <div>
          <label htmlFor="firstName"> </label>
          <input
            type="text"
            className="signupInput"
            autoComplete="off"
            value={userRegistration.firstName}
            onChange={handleSigninInput}
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
        </div>

        <div>
          <label htmlFor="lastName"> </label>
          <input
            type="text"
            className="signupInput"
            autoComplete="off"
            value={userRegistration.lastName}
            onChange={handleSigninInput}
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
        </div>

        <div>
          <label htmlFor="email"> </label>
          <input
            type="email"
            className="signupInput"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleSigninInput}
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="password"> </label>
          <input
            type="text"
            className="signupInput"
            autoComplete="off"
            value={userRegistration.password}
            onChange={handleSigninInput}
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword"> </label>
          <input
            type={showPassword ? "text" : "password"}
            className="signupInput"
            autoComplete="off"
            value={userRegistration.confirmPassword}
            onChange={handleSigninInput}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
          <button
            className="showBtn"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? " Hide." : "Show"}
          </button>
        </div>
        <button type="submit"> SignUp </button>
      </form>
      <p>
        Already have an account?
        <Link className="link1" to="/login">
          Login Here
        </Link>
      </p>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
