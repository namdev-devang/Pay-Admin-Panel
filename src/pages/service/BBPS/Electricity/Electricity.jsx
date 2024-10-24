import { Card } from "antd";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import AdaniElectricity from "./AdaniElectricity";

const Electricity = () => {
  const { pathname } = useLocation();
  return (
    <>
      <h1>Electricity Charts Area</h1>

      <div className="flex ">
        <Link
          to={
            "/services/mobile-recharges/bbps-services/electricity/adani-electricity"
          }
        >
          <Card
            className={` ${
              pathname =="/services/mobile-recharges/bbps-services/electricity" ||
              pathname =="/services/mobile-recharges/bbps-services/electricity/adani-electricity"||
              pathname == "/services/mobile-recharges/bbps-services"
                ? "bg-[#221ecf] text-white "
                : "bg-white text-black"
            }  border border-gray-200 font-semibold my-4 rounded-2xl shadow-xl`}
          >
            <h1 className="text-center font-bold text-xl">Adani Electricity</h1>
          </Card>
        </Link>
        <Card className="mx-2 my-4">
          <h1 className="text-center font-bold text-xl">NDX Electricity</h1>
        </Card>
        <Card className="mx-2 my-4">
          <h1 className="text-center font-bold text-xl">
            BhartPur Electricity
          </h1>
        </Card>
        <Card className="mx-2 my-4">
          <h1 className="text-center font-bold text-xl">
            Meghalaya Electricity
          </h1>
        </Card>
      </div>
      {pathname == "/services/mobile-recharges/bbps-services" ? (
        <AdaniElectricity />
      ) : null}

      {pathname == "/services/mobile-recharges/bbps-services/electricity" ? (
        <AdaniElectricity />
      ) : null}
      <Outlet />
    </>
  );
};

export default Electricity;
