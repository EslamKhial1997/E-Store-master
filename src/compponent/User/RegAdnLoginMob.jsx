import React, { useState } from "react";
import Styles from "./Styles.module.css";

const RegAdnLoginMob = () => {
  const [phoneNumber, setphoneNumber] = useState("");

  const [OTPHide, setOTPHide] = useState("Send Code");



 

  return (
    <div className=" text-center">
      <input
        className={Styles.form}
        type="text"
        placeholder="E-mail / Mobile number"
        aria-label="default input example"
       
        value={phoneNumber}
      />
      <div className={Styles.InputCode}>
        <input
          className={Styles.code}
          placeholder="OTP Code"
          
        />
        <button
          type="submit"
          className={Styles.submitcode}
          
       
      
        >
          {OTPHide}
        </button>
      </div>
      
       
    
      <div
        className={`${Styles.loginbtn} d-flex justify-content-center`}
       
      >
        <button>Register</button>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default RegAdnLoginMob;
