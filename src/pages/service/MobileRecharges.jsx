import { Card, Space } from "antd";
import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { Link, Outlet, useLocation } from "react-router-dom";

const MobileRecharges = () => {
  const { pathname } = useLocation();
  const location = useLocation();

  console.log(location);
  return (
    <div>
      <div className=" flex flex-wrap">
        <Space className="lg:mx-2 lg:my-4" direction="">
          <Link to="/services/mobile-recharges">
            <Card
              // activeTabKey="home"
              className={` ${pathname == "/services/mobile-recharges"
                ? "bg-[#221ecf] text-white "
                : "bg-white text-black"
                }  border border-gray-200 font-semibold my-4 rounded-2xl shadow-xl`}
              style={{
                width: 300,
              }}
            >
              <div className="flex items-center justify-between">
                <p className="text-base py-1">Mobile-Recharges</p>
                <FaUserGroup className="text-2xl mx-2" />
              </div>
              <h1 className="text-2xl">15,45,94,225</h1>
            </Card>
          </Link>
        </Space>

        <Space className="lg:mx-2 lg:my-4" direction="">
          <Link to="/services/mobile-recharges/bbps-services">
            <Card
              // activeTabKey="home"
              className={` ${pathname == "/services/mobile-recharges/bbps-services" ||
                pathname ==
                "/services/mobile-recharges/bbps-services/electricity" ||
                pathname == "/services/mobile-recharges/bbps-services/lpg-gas"
                ? // pathname == "/services/Mobile-Recharges/BBPS-Services/electricity/adani-electricity"
                "bg-[#221ecf] text-white "
                : "bg-white text-black"
                }  border border-gray-200 font-semibold my-4 rounded-2xl shadow-xl`}
              style={{
                width: 300,
              }}
            >
              <div className="flex items-center justify-between">
                <p className="text-base py-1">BBPS-Services</p>
                <FaUserGroup className="text-2xl mx-2" />
              </div>
              <h1 className="text-2xl">15,45,94,225</h1>
            </Card>
          </Link>
        </Space>
      </div>
      {pathname == "/services/mobile-recharges" ? (
        <>
          <h1 className="text-center font-bold text-3xl">MobileRecharges</h1>
        </>
      ) : null}

      <Outlet />
    </div>
  );
};

export default MobileRecharges;
