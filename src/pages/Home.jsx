import React from "react";
import { Button, Card, DatePicker, Space } from "antd";
import { FaUserGroup } from "react-icons/fa6";
import Charts from "../Chart/Charts";
import Charts2 from "../Chart/Charts2";
import Table_Pagination from "../Component/Table_Pagination";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Heading from "../Component/Heading";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const { RangePicker } = DatePicker;
const getYearMonth = (date) => date.year() * 12 + date.month();
const disabled6MonthsDate = (current, { from, type }) => {
  if (from) {
    const minDate = from.add(-5, "months");
    const maxDate = from.add(5, "months");
    switch (type) {
      case "year":
        return (
          current.year() < minDate.year() || current.year() > maxDate.year()
        );
      default:
        return (
          getYearMonth(current) < getYearMonth(minDate) ||
          getYearMonth(current) > getYearMonth(maxDate)
        );
    }
  }
  return false;
};
const Home = () => {

  const cardData = [
    {
      id: 1,
      name: "Today Mobile Recharges",
      icon: <FaUserGroup className="text-3xl" />,
      number: "15,45,94,225",
    },
    {
      id: 2,
      name: "Total Impressions",
      icon: <FaUserGroup className="text-3xl" />,
      number: "15,45,94,225",
    },
    {
      id: 3,
      name: "Active Users",
      icon: <FaUserGroup className="text-3xl" />,
      number: "15,45,94,225",
    },
    {
      id: 4,
      name: "Active Users",
      icon: <FaUserGroup className="text-3xl" />,
      number: "15,45,94,225",
    },
  ];

  return (
    <>
      <div className=" md:p-4">
        <div className="flex justify-between items-center mx-4 ">
          <Heading title={"User Analytics"} />
          <Space direction="vertical">
            <RangePicker
              className="sm:w-full w-32"
              disabledDate={disabled6MonthsDate}
            // picker="month"
            />
          </Space>
        </div>

        {/* cards  */}
        <div className=" flex flex-wrap sm:mx-0">
          {cardData.map((item) => {
            return (
              <>
                <Space className="lg:mx-2 lg:my-4 mx-2" direction="">
                  <Card
                    // activeTabKey="home"
                    className={` ${item.id == 1
                      ? "bg-[#221ecf] text-white "
                      : "bg-white text-black"
                      } w-[250px] md:w-[300px]  border border-gray-200 font-semibold my-4 rounded-2xl shadow-xl`}

                  >
                    <div className="flex items-center justify-between">
                      <p className="md:text-base py-1">{item.name}</p>
                      <FaUserGroup className="text-2xl mx-2" />
                    </div>
                    <h1 className="md:text-2xl text-base">15,45,94,225</h1>
                  </Card>
                </Space>
              </>
            );
          })}
        </div>

        <div className="border w-full rounded-xl mx-2 sm:my-0 my-4">
          <div className="border-b px-2 py-2 flex items-center justify-between ">
            <h1 className="font-bold md:text-lg text-base mx-4">User Onboarding</h1>
            <div className="">
              <Button className="bg-gray-100 py-5">
                <Dropdown
                  className=""
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <h1 className="mr-5 text-black font-semibold">Today</h1>
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap rounded-lg my-5 mx-2 lg:gap-2 gap-5 ">
            <div className="border lg:w-[64%] w-[100%] shadow-lg rounded-lg">
              <Charts />
            </div>
            <div className="border shadow-lg rounded-xl py-2 lg:w-[35%] w-full">
              <Charts2 />
            </div>
          </div>
        </div>

        <div className="my-4 mx-2 ">
          <Card className="rounded-2xl border border-gray-300 mb-14 shadow-md">
            <div className="flex justify-between items-center">
              <h1 className="sm:text-xl font-bold">Recent Customers</h1>
            </div>
            <Table_Pagination />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
