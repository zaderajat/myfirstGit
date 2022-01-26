
const initialState = {
  users: [],
};
 const UsersReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_ALL_USERS":
      const { Useremail,Userpassword,Usertoken , UseruserId } = action.payload;
      return {
        ...state,
        users: [
          ...state.users,
          {
            email: Useremail,
            password: Userpassword,
            token : Usertoken,
            userId :UseruserId
          },
        ],
      };

      case "LOGIN" : 
      const { Loginemail, Loginpassword,Logintoken,LoginuserId } = action.payload;
      return {
        ...state,
        users: [
          ...state.users,
          {
            email: Loginemail,
            password: Loginpassword,
            token : Logintoken,
            userId :LoginuserId
          },
        ],
      };


    default:
      return state;
  }
};

export default UsersReducer
