import React from "react";
import Authentication from "./components/LandingPage/Authentication";
import Login from "./components/LandingPage/Login";
import Register from "./components/LandingPage/Register";
import Route from "./components/MainPage/ReusableComponents/Route";
import NewCarForm from "./components/MainPage/Form/NewCarForm";
import NewClientForm from "./components/MainPage/Form/NewClientForm";
import CarList from "./components/MainPage/Form/CarList";
import CustomerList from "./components/MainPage/Form/CustomerList";
import NavBar from "./components/MainPage/UI/NavBar";
import AppState from "./Context/AppState";

const App = () => {
  return (
    <>
      <Route path="/">
        <Authentication />
      </Route>
      <Route path="/auth/login">
        <Login />
      </Route>
      <Route path="/auth/register">
        <Register />
      </Route>
      <AppState>
        <Route path="/home">
          <NavBar />
        </Route>
        <Route path="/home/newcar">
          <NavBar>
            <NewCarForm />
          </NavBar>
        </Route>
        <Route path="/home/newcustomer">
          <NavBar>
            <NewClientForm />
          </NavBar>
        </Route>
        <Route path="/home/carlist">
          <NavBar>
            <CarList />
          </NavBar>
        </Route>
        <Route path="/home/customerlist">
          <NavBar>
            <CustomerList />
          </NavBar>
        </Route>
      </AppState>
    </>
  );
};

export default App;
