import React, { useState } from "react";

import NavBar from "./NavBar";


const Home = () => {
  const [customerData, setCustomerData] = useState([]);
  const [carData, setCarData] = useState([]);

  // this is a function to get the customer data from form
  const fetchCustomerData = (data) => {
    setCustomerData((prevData) => [data, ...prevData]);
  };

  //This is a function to get the car data from the form
  const fetchCarData = (data) => {
    setCarData((prevData) => [data, ...prevData]);
  };

  return (
    <>
      <NavBar />
    </>
  );
};

export default Home;
