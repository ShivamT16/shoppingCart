import { createContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const dummyData = [
    { email: "dummy@234", password: "2345" },
    { email: "TestUser@voice.com", password: "password" }
  ];

  const [userRegistration, setUserRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [records, setRecords] = useState(dummyData);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });
  const [allEntry, setAllEntry] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setTimeout(() => {
      navigate("/login", { replace: true }); emptyForm();
    }, 1000);
  };

  const emptyForm = () => {
    setUserRegistration({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setUserLogin({ email: "", password: "" });
  };

  const handleSigninInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();
    if (
      userRegistration.firstName !== "" &&
      userRegistration.lastName !== "" &&
      userRegistration.email !== "" &&
      userRegistration.password !== "" &&
      userRegistration.confirmPassword !== ""
    ) {
      if (userRegistration.password === userRegistration.confirmPassword) {
        const newRecord = {
          ...userRegistration,
          id: new Date().getTime().toString()
        };
        setRecords([...records, newRecord]);
        setTimeout(() => {
          navigate("/", { replace: true }); emptyForm();
        }, 1800);
        setIsLoggedIn(true);
        toast.success("Welcome " + userRegistration.firstName);
      } else {
        toast.error("Passwords do not match");
      }
    } else {
      toast.warning("Please fill all the fields");
    }
  };

  const handleLoginInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const newEntry = { ...userLogin };
    setAllEntry([...allEntry, newEntry]);
    if (newEntry.email !== "" && newEntry.password !== "") {
      if (
        records.find(
          ({ email, password }) =>
            email === newEntry.email && password === newEntry.password
        )
      ) {
        setIsLoggedIn(true);
        setTimeout(() => {
          navigate(
            location?.state?.from?.pathname
              ? location?.state?.from?.pathname
              : "/"
          );
            emptyForm();
        }, 1500);
        toast.success("Welcome");
      } else {
        toast.error("Invalid Email or Password");
      }
    } else {
      toast.warning("Please fill all the details");
    }
  };

  const handleTestUser = () => {
    setUserLogin({ email: "TestUser@voice.com", password: "password" });
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        handleLogin,
        records,
        handleSigninSubmit,
        handleSigninInput,
        userRegistration,
        setUserRegistration,
        userLogin,
        handleLoginInput,
        handleLoginSubmit,
        handleTestUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
