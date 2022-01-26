import React from "react";
import axios from "axios";
export const UserLogin = (EnteredData) => async (dispatch) => {
  // console.log(data);

  let Userdata;

  try {
    let res = await axios.post("http://localhost:5000/api/user/login", {
      email: EnteredData.LoginEmail,
      password: EnteredData.LoginPassword,
    });

    Userdata = res.data;
    console.log(Userdata);
  } catch (error) {
    console.log(error);
  }

  dispatch({
    type: "LOGIN",
    payload: {
      Loginemail: EnteredData.LoginEmail,
      Loginpassword: EnteredData.LoginPassword,
      Logintoken: Userdata.token,
      LoginuserId: Userdata.userId,
    },
  });
};

export default UserLogin;
