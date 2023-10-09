import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import CreateUser from "../components/CreateUser";
import GetUser from "../components/GetUser";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="createuser" element={<CreateUser />} />
          <Route path="getuser" element={<GetUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
