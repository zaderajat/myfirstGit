import React, { useRef } from "react";
import axios from "axios";
const VerifyOtp = () => {
  const OtpRef = useRef();
  const EmailRef = useRef();

  const VerifyOtpHandler = async (e) => {
    e.preventDefault();
    const enteredOtp = OtpRef.current.value;
    const enteredEmail = EmailRef.current.value;
  };
  return (
    <div>
      <form onSubmit={VerifyOtpHandler}>
        <div>
          <h1>Verify Otp</h1>
        </div>
        <div>
          <label htmlFor="name">Enter OTP</label>
          <br />
          <input type="text" id="name" required ref={OtpRef} />
        </div>
        <div>
          <label htmlFor="name">Enter Email</label>
          <br />
          <input type="text" id="name" required ref={EmailRef} />
        </div>
        <button>Verify</button>
      </form>
    </div>
  );
};

export default VerifyOtp;
