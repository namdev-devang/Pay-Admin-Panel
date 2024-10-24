import React from "react";
import Credit from "./Credit";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Card, Space } from "antd";

const PrimePoint = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className=" flex flex-wrap">
        <Space className="lg:mx-2 lg:my-4" direction="">
          <Link to="/prime-point/credit">
            <Card
              // activeTabKey="home"
              className={` ${
                pathname == "/prime-point/credit"
                  ? "bg-[#221ecf] text-white "
                  : "bg-white text-black"
              } w-10 border border-gray-200 font-semibold my-4 rounded-2xl shadow-xl`}
              style={{
                width: 300,
              }}
            >
              <h1 className="text-2xl text-center">Credit Prime Point</h1>
            </Card>
          </Link>
        </Space>

        <Space className="lg:mx-2 lg:my-4" direction="">
          <Link to="/prime-point/debit">
            <Card
              // activeTabKey="home"
              className={` ${
                pathname == "/prime-point/debit"
                  ? "bg-[#221ecf] text-white "
                  : "bg-white text-[#221ECF]"
              }  border border-gray-200 font-semibold my-4 rounded-xl py- shadow-xl`}
              style={{
                width: 300,
              }}
            >
              <h1 className="text-2xl text-center">Debit Prime Point</h1>
            </Card>
          </Link>
        </Space>
      </div>
      <Outlet />
    </>
  );
};

export default PrimePoint;
