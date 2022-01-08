import React from "react";
import DashBoard from "./DashBoard";
import NavBar from "./NavBar";
import Background from "./Background";

const RenderUI = () => {
  return (
    <>
      <NavBar />
      <Background>
        <DashBoard />
      </Background>
    </>
  );
};

export default RenderUI;
