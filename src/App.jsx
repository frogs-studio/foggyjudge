import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contest from "./pages/Contest";
import Profile from "./pages/Profile";
import PopupBar from "./components/PopupBar";
import Problems from "./pages/Problems";
function App() {
  return (
    <>
      <Login />
      <Register />
      {/* <Contest /> */}
      {/* <Profile />
      <PopupBar /> */}

      {/* <Problems /> */}
    </>
  );
}

export default App;
