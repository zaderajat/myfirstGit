import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginWithOtp = () => {
  const Navigate = useNavigate();
  const EmailInputref = useRef();

  const otpHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = EmailInputref.current.value;
  };

  return (
    <div>
      <form onSubmit={otpHandler}>
        <div>
          <h1>login with OTP</h1>
        </div>
        <div>
          <label htmlFor="name">Enter Email</label>
          <br />
          <input type="text" id="name" required ref={EmailInputref} />
        </div>
        <button>Send OTP</button>
      </form>
    </div>
  );
};

export default LoginWithOtp;
