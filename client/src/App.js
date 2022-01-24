import React from "react";
import Home from "./components/MainPage/UI/Home";
import Authentication from "./components/LandingPage/Authentication";
import Login from "./components/LandingPage/Login";
import Register from "./components/LandingPage/Register";
import Route from "./components/MainPage/ReusableComponents/Route";
import NewCarForm from "./components/MainPage/Form/NewCarForm";
import NewClientForm from "./components/MainPage/Form/NewClientForm";
import CarList from "./components/MainPage/Form/CarList";
import CustomerList from "./components/MainPage/Form/CustomerList";

const App = () => {
  return (
    <>
      <Route path="/auth">
        <Authentication />
      </Route>
      <Route path="/auth/login">
        <Login />
      </Route>
      <Route path="/auth/register">
        <Register />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/home/newcar">
        <NewCarForm />
      </Route>
      <Route path="/home/newcustomer">
        <NewClientForm />
      </Route>
      <Route path="/home/carlist">
        <CarList />
      </Route>
      <Route path="/home/customerlist">
        <CustomerList />
      </Route>
    </>
  );
};

export default App;
