import React, { useState } from "react";
import NewCarForm from "../CarForm/NewCarForm";
import NewClientForm from "../ClientForm/NewClientForm";
import CustomerList from "./CustomerList";

import CarList from "./CarList";

const DUMMY_CAR_DATA = [{ manufacturer: "" }];

const DashBoard = () => {
  const [carData, setCarData] = useState(DUMMY_CAR_DATA);
  const [customerData, setCustomerData] = useState([]);

  const fetchCarData = (data) => {
    setCarData((prevData) => [data, ...prevData]);
  };

  const fetchCustomerData = (data) => {
    setCustomerData((prevData) => [data, ...prevData]);
  };
  return (
    <>
      <NewCarForm getCarData={fetchCarData} />
      {/* <NewClientForm getCustomerData={fetchCustomerData} /> */}

      <CarList carData={carData} />
      {/* <CustomerList customerData={customerData} /> */}
    </>
  );
};

export default DashBoard;
