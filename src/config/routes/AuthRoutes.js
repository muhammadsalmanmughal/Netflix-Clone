import React from "react";
import { Switch, Route, Routes } from "react-router-dom";
import { LoginHome, Login } from "../../containers";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginHome />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default AuthRoutes;
