import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";
import NewClientForm from "../ClientForm/NewClientForm";
import CustomerList from "./CustomerList";
import CarList from "./CarList";
import NoMatch from "../../../NoMatch";

const IsAuthenticated = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/addcustomer" element={<NewClientForm />} />
        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="/carlist" element={<CarList />} />
      </Routes>
    </>
  );
};

export default IsAuthenticated;
