import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layout/index";
import axios from "axios";

const PrivateRoutes = () => {
  const token = localStorage.getItem("accessToken");

  return <>{token ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default Layout(PrivateRoutes);
