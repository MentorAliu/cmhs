import React, { useState } from "react";

import NavBar from "./NavBar";
import NewClientForm from "../ClientForm/NewClientForm";
import CustomerList from "../ClientForm/CustomerList";
import NewCarForm from "../CarForm/NewCarForm";
import CarList from "../CarForm/CarList";

const IsAuthenticated = () => {
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
      <NewClientForm fetchCustomerData={fetchCustomerData} />
      <CustomerList customerData={customerData} />
      <NewCarForm fetchCarData={fetchCarData} />
      <CarList carData={carData} />
    </>
  );
};

export default IsAuthenticated;
