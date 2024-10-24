import { Card, Space } from "antd";
import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import OperatorMain from "./Operator/OperatorMain";
import Airtel from "./Operator/Airtel";

const Services = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <div>
        <h1>Services</h1>
      </div>

  

      {/* <OperatorMain /> */}
    </>
  );
};

export default Services;
