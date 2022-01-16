import React, { useState } from "react";
import IsAuthenticated from "./components/MainPage/UI/IsAuthenticated";
import Authentication from "./components/LandingPage/Authentication";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const navigate = useNavigate();

  const nav = () => {
    setisAuthenticated(!isAuthenticated);
    navigate("/login");
  };

  return (
    <>
      <button onClick={nav}>Click</button>
      {isAuthenticated ? <IsAuthenticated /> : <Authentication />}
    </>
  );
};

export default App;
