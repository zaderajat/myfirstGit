import React from "react";
import axios from "axios";
export const UserRegister = (EnteredData) => async (dispatch) => {
  // console.log(data);

  let Userdata;

  try {
    let res = await axios.post("http://localhost:5000/api/user/register", {
      email: EnteredData.RegisteredEmail,
      password: EnteredData.Registeredpassword,
    });

    Userdata = res.data;
    console.log(Userdata);
  } catch (error) {
    console.log(error);
  }

  dispatch({
    type: "GET_ALL_USERS",
    payload: {
      Useremail: EnteredData.RegisteredEmail,
      Userpassword: EnteredData.Registeredpassword,
      Usertoken: Userdata.token,
      UseruserId: Userdata.userId,
    },
  });
};

export default UserRegister;
