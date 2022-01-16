import React, { useState } from "react";
import IsAuthenticated from "./components/MainPage/UI/IsAuthenticated";
import Authentication from "./components/LandingPage/Authentication";
import { Route, Routes, useNavigate } from "react-router-dom";
import NoMatch from "./NoMatch";

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(true);
  const navigate = useNavigate();

  return <>{isAuthenticated ? <IsAuthenticated /> : <Authentication />}</>;
};

export default App;
