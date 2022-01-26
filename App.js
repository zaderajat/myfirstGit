import { useSelector } from "react-redux";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginWithOtp from "./Components/LoginWithOtp";
import VerifyOtp from "./Components/VerifyOtp";
import Home from "./pages/Home";
function App() {
  const users = useSelector((state) => state.UsersReducer.users);
  const LoggedIn = users.slice(-1)[0]
  const token = LoggedIn.token
  console.log(token);
  return (
    <div>
  
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/existing" element={<Login />} />
          <Route exact path="/forgot" element={<LoginWithOtp />}/>
          <Route exact path="/verify" element={<VerifyOtp />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
