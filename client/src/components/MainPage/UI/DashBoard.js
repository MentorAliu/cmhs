import React, { useState } from "react";
import NewCarForm from "../CarForm/NewCarForm";
import NewClientForm from "../ClientForm/NewClientForm";
import CarList from "./CarList";
import Pagination from "./Pagination";
import CustomerList from "./CustomerList";

// const DUMMY_CAR_DATA = [{ manufacturer: "" }];

const DashBoard = () => {
  // const [carData, setCarData] = useState(DUMMY_CAR_DATA);
  const [customerData, setCustomerData] = useState([]);

  // const fetchCarData = (data) => {
  //   setCarData((prevData) => [data, ...prevData]);
  // };

  const fetchCustomerData = (data) => {
    setCustomerData((prevData) => [data, ...prevData]);
  };
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Add New Customer
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-52">
          {/* <NewCarForm getCarData={fetchCarData} /> */}
          <NewClientForm getCustomerData={fetchCustomerData} />
        </div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-52">
          {/* <CarList carData={carData} /> */}
          <CustomerList customerData={customerData} />
        </div>
      </main>
    </>
  );
};

export default DashBoard;
