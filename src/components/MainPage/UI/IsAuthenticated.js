import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route
          path="/addcustomer"
          element={<NewClientForm fetchCustomerData={fetchCustomerData} />}
        />
        <Route
          path="/customerlist"
          element={<CustomerList customerData={customerData} />}
        />
        <Route
          path="/addcar"
          element={<NewCarForm fetchCarData={fetchCarData} />}
        />
        <Route path="/carlist" element={<CarList carData={carData} />} />
      </Routes>
    </>
  );
};

export default IsAuthenticated;
