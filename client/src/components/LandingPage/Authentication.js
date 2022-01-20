import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

const Authentications = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/passwordreset/:resetToken" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default Authentications;
