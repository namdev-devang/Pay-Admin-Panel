import { Card } from "antd";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Electricity from "./BBPS/Electricity/Electricity";

const BBPS_Services = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">BBPS_Services</h1>
      <div className="flex ">
        <Link to={"/services/mobile-recharges/bbps-services/electricity"}>
          <Card
            className={` mx-4  ${
              pathname == "/services/mobile-recharges/bbps-services" ||
              pathname ==
                "/services/mobile-recharges/bbps-services/electricity" ||
              pathname ==
                "/services/mobile-recharges/bbps-services/electricity/adani-electricity"
                ? "bg-[#221ecf] text-white "
                : "bg-white text-black"
            }  border border-gray-200 font-semibold my-4 rounded-2xl shadow-xl`}
          >
            <h1 className="font-bold text-lg text-center">Electricity</h1>
          </Card>
        </Link>
        <Link to={"/services/mobile-recharges/bbps-services/lpg-gas"}>
          <Card
            className={` mx-4 ${
              pathname == "/services/mobile-recharges/bbps-services/lpg-gas"
                ? "bg-[#221ecf] text-white "
                : "bg-white text-black"
            }  border border-gray-200 font-semibold my-4 rounded-2xl shadow-xl`}
          >
            <h1 className="font-bold text-xl text-center">LPG Gas</h1>
          </Card>
        </Link>
        <Card
          className={` mx-4 ${
            pathname == "/services/mobile-recharges"
              ? "bg-[#221ecf] text-white "
              : "bg-white text-black"
          }  border border-gray-200 font-semibold my-4 rounded-2xl shadow-xl`}
        >
          <h1 className="font-bold text-xl text-center">Water</h1>
        </Card>
        <Card
          className={`mx-4 ${
            pathname == "/services/mobile-recharges"
              ? "bg-[#221ecf] text-white "
              : "bg-white text-black"
          }  border border-gray-200 font-semibold my-4 rounded-2xl shadow-xl`}
        >
          <h1 className="font-bold text-xl textce">Landline</h1>
        </Card>
      </div>
      {pathname == "/services/mobile-recharges/bbps-services" ? (
        <Electricity />
      ) : (
        ""
      )}

      <Outlet />
    </div>
  );
};

export default BBPS_Services;
