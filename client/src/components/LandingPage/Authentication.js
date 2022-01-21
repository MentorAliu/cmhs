import React, { useState } from "react";
// import Login from "./Login";
import Register from "./Register";
import axios from "axios";

const Authentication = () => {
  const [registerData, setRegisterData] = useState({});
  axios
    .post("http://localhost:3001/register", {
      username: registerData.username,
      password: registerData.password,
    })
    .then((response) => console.log(response));

  const getRegisterData = (data) => {
    const { username, password } = data;
    setRegisterData({ username, password });
    console.log(username, password);
  };

  return (
    <>
      <Register getRegisterData={getRegisterData} />
      {/* <Login /> */}
    </>
  );
};

export default Authentication;
