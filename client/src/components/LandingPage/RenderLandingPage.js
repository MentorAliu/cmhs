import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const RenderLandingPage = () => {
  const [open, setOpen] = useState(true);

  const onRegisterClick = (registerCick) => {
    setOpen(() => registerCick);
  };

  return (
    <>{open ? <Login onRegisterClick={onRegisterClick} /> : <Register />}</>
  );
};

export default RenderLandingPage;
