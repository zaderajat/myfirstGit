import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import UserRegister from "../Redux/Actions/UserActions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // console.log(enteredEmail, enteredPassword);
    // const UserData = {
    //   RegisteredEmail: enteredEmail,
    //   Registeredpassword: enteredPassword,
    //   RegisteredIsLoggedIn : true
    // };

    dispatch(UserRegister({
      RegisteredEmail: enteredEmail,
      Registeredpassword: enteredPassword,
      
    }));

  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-5 mx-auto shadow p-5">
          <form onSubmit={FormSubmitHandler}>
            <div>
              <h1 className="text-center mb-5">Register</h1>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                ref={emailInputRef}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                ref={passwordInputRef}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <div className="text-center ">
            <Link to="/existing">if already registered, please login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
