import React from "react";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/MainPage/UI/NavBar";
import NewCarForm from "./components/MainPage/CarForm/NewCarForm";
import CustomerList from "./components/MainPage/UI/CustomerList";

import CarList from "./components/MainPage/UI/CarList";
import NewClientForm from "./components/MainPage/ClientForm/NewClientForm";
import Login from "./components/LandingPage/Login";

import Register from "./components/LandingPage/Register";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/addcar" element={<NewCarForm />} />
        <Route path="/addcustomer" element={<NewClientForm />} />
        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="/carlist" element={<CarList />} />
      </Routes>
    </>
  );
};

export default App;
