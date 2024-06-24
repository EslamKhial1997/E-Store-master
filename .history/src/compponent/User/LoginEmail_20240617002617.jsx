import React, { useState } from "react";
import Styles from "./Styles.module.css";
// import { IoEyeSharp } from "react-icons/io5";

import { useNavigate, NavLink } from "react-router-dom";

import facebook from "./image/facebook.svg";
import gmail from "./image/gmail.png";
import apple from "./image/apple.svg";
import axios from "axios";
import { IosShare } from "@mui/icons-material";
import { useEffect } from "react";
import Cookies from "cookies-js";
import { useDispatch ,useSelector } from "react-redux";
import { login } from "../Store/authController";
const LoginEmail = () => {
  const [ShowPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state);
  console.log(selector);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Login = async (e) => {
    e.preventDefault();
    console.log(user);
    await dispatch(login(user))
    // await axios
    //   .post("http://localhost:3000/api/v1/auth/login", user)
    //   .then(function (response) {
        
    //     Cookies.set('token', response.data.token);
    //     Cookies.set('userID', response.data._id);
    //     navigate("/dashboard")
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
//   useEffect(() => {
//     if (token === null || token === "undefined") {
//      return
//     }else{
// navigate("/")
//     }
//   }, [token]);
//   const TogglePassword = () => {
//     setShowPassword(!ShowPassword);
//   };
  return (
    <form onSubmit={Login} className={Styles.pusodo}>
      <input
        className={Styles.form}
        type="text"
        placeholder="E-Mail / UseName"
        aria-label="default input example"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <div className={Styles.pusodo}>
        <input
          className={Styles.form}
          type={ShowPassword ? "password" : "text"}
          placeholder="Password"
          aria-label="default input example"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <IosShare
          onClick={() => {
            
          }}
        />
      </div>

      <div className={`${Styles.loginbtn} d-flex justify-content-center`}>
        <button type="submit" className="btn btn-primary btn-sm">Login</button>
      </div>
      <NavLink to={"/ForgetPassword"} className={Styles.forgetpassword}>
        Forget Password ?
      </NavLink>
      <footer>
        <div className="Continue text-center">
          <span>Or Continue with</span>
        </div>
        <div
          className={`${Styles.footerdiv} container  d-flex justify-content-between col-xxl-12`}
        >
          <div className="d-flex justify-content-center align-items-center">
            <img src={facebook} alt="" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={apple} alt="" />
          </div>

          <div className="d-flex justify-content-center align-items-center">
          <a href="http://localhost:3000/auth/google/callback" target="_blank"> <img src={gmail} alt="" /></a>
           
          </div>
        </div>
      </footer>
    </form>
  );
};

export default LoginEmail;
