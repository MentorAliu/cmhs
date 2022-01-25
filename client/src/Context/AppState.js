import React, { useState } from "react";
import Context from "./Context";

const AppState = (props) => {
  const [carData, setCarData] = useState({});
  const [customerData, setCustomerData] = useState({});

  console.log(carData);

  return (
    <Context.Provider
      value={{ customerData, setCustomerData, carData, setCarData }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppState;
