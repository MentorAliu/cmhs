import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const RenderLandingPage = () => {
  const [open, setOpen] = useState(false);

  const onRegisterClick = ({registerData}) => {
    console.log(registerData);
  };
  return <>{open ? <Login fetchRegister={onRegisterClick} /> : <Register />}</>;
};

export default RenderLandingPage;
