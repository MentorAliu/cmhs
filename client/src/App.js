import React from "react";
import { Routes, Route } from "react-router-dom";
import IsAuthenticated from "./components/MainPage/UI/IsAuthenticated";
import Authentication from "./components/LandingPage/Authentication";
import Login from "./components/LandingPage/Login";
import Register from "./components/LandingPage/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
