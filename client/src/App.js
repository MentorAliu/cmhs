import React from "react";
import RenderLandingPage from "./components/LandingPage/RenderLandingPage";
import RenderUI from "./components/MainPage/UI/RenderUI";
import { Routes, Route } from "react-router-dom";
// import Test from "./Test";

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<RenderLandingPage />}></Route> */}
        <Route path="/" element={<RenderUI />}></Route>
      </Routes>
    </>
  );
};

export default App;
