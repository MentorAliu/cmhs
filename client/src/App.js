import React from "react";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/MainPage/UI/NavBar";
import NewCarForm from "./components/MainPage/CarForm/NewCarForm";
import CustomerList from "./components/MainPage/UI/CustomerList";
import DashBoard from "./components/MainPage/UI/DashBoard";
import CarList from "./components/MainPage/UI/CarList";
import NewClientForm from "./components/MainPage/ClientForm/NewClientForm";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/addcar" element={<NewCarForm />} />
        <Route path="/addcustomer" element={<NewClientForm />} />

        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="/carlist" element={<CarList />} />
      </Routes>
    </>
  );
};

export default App;
