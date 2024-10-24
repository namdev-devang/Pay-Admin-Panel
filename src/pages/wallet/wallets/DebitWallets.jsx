import { Button, Card, Checkbox, Drawer, Select, Space, Table } from "antd";
import React, { useState } from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { RxCross1 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { DatePicker } from "antd";
import { CiExport, CiFilter } from "react-icons/ci";
// import FilterDrawer from "../ManageUser/FilterDrawer";
// import UpdateUserDrawer from "./UpdateUserDrawer";
import { MdContentCopy } from "react-icons/md";
import { Link, Outlet, useLocation } from "react-router-dom";
import { GrRefresh } from "react-icons/gr";
const { RangePicker } = DatePicker;

// Disabled 7 days from the selected date

const DebitWallets = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const getYearMonth = (date) => date.year() * 12 + date.month();

  const disabled7DaysDate = (current, { from, type }) => {
    if (from) {
      const minDate = from.add(-6, "days");
      const maxDate = from.add(6, "days");
      switch (type) {
        case "year":
          return (
            current.year() < minDate.year() || current.year() > maxDate.year()
          );
        case "month":
          return (
            getYearMonth(current) < getYearMonth(minDate) ||
            getYearMonth(current) > getYearMonth(maxDate)
          );
        default:
          return Math.abs(current.diff(from, "days")) >= 7;
      }
    }
    return false;
  };
  const showDrawer = () => {
    setOpen(true);
  };

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

  const columns = [
    {
      title: <h1 className="text-[#323197] text-lg font-bold"> Sr.No.</h1>,
      dataIndex: "srno",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Debit User</h1>,
      dataIndex: "username",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Type</h1>,
      dataIndex: "number",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Amount</h1>,
      dataIndex: "operator",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Date</h1>,
      dataIndex: "api",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Remarks</h1>,
      dataIndex: "transactionid",
    },
  ];

  const dataSource = [
    {
      srno: <h1 className="text-base ">1</h1>,
      username: (
        <h1 className="text-[#323197] font-semibold text-base">1206197006</h1>
      ),
      api: <h1 className="text-base text-gray-600">Shelik jilekha</h1>,
      operator: (
        <div className="flex items-center  gap-2">
          <Button className="w-12" type="dashed">
            <MdContentCopy className="text-3xl" />
          </Button>
          <h1 className="text-base text-gray-600">Airtel</h1>
        </div>
      ),
      number: (
        <>
          <div className="flex items-center gap-2 ">
            <Button className="w-12" type="dashed">
              <MdContentCopy className="text-3xl" />
            </Button>
            <h1 className="text-base text-gray-600">7047856974</h1>
          </div>
        </>
      ),
      transactionid: (
        <div className="flex items-center gap-2 ">
          <h1 className="text-base text-gray-600">7047856974</h1>
        </div>
      ),
      amount: (
        <h1
          onClick={showDrawer}
          className="cursor-pointer text-basefont-semibold"
        >
          15000
        </h1>
      ),
      status: (
        <>
          <h1 className="text-base font-semibold text-green-500">Success</h1>
        </>
      ),
    },
  ];

  return (
    <>
      <div>
        <div>
          <Card className="rounded-2xl shadow-md">
            <div className="my5">
              <h1 className="text-black text-base my-1 font-semibold">
                Username
              </h1>
              <Input
                className="md:w-1/4 py-3 border border-gray-300 text-black  text-xl"
                placeholder="Username"
              />
            </div>

            <div className="my-5">
              <h1 className="text-black text-base my-1 font-semibold">
                Credit Amount
              </h1>
              <Input
                className="md:w-1/4 py-3 border border-gray-300 text-black  text-xl"
                placeholder="Entre Amount"
              />
            </div>

            <div className="my-5">
              <h1 className="text-black text-base my-1 font-semibold">
                Remark
              </h1>
              <Input.TextArea
                className="md:w-1/4 py-3 border border-gray-300 text-black  text-xl"
                placeholder="Entre Comment"
              />
            </div>

            <div className="flex">
              <Button className="uppercase bg-[#CA3160] text-lg px-7 py-6 rounded-lg font-semibold text-white ">
                Credit
              </Button>
              <Button className="uppercase text-lg px-7 py-6 rounded-lg font-semibold mx-5 border border-gray-600">
                Clear
              </Button>
            </div>
          </Card>
        </div>

        <div className="my-5">
          <h1 className="text-[#221ECF] md:text-left text-center underline text-3xl font-bold my-2">
            Recent Transactions
          </h1>
          <Card className="rounded-2xl border border-gray-300 mb-20 shadow-md ">
            <div className="flex flex-wrap justify-between ">
              <div className="flex items-center bg-gray-50 border py-[4px] px-2 rounded-full mb-4">
                {/* <Button className=" py-5"> */}

                {/* </Button> */}

                {/* <Space direction="vertical"> */}

                <Input
                  className="border-l-2 mx-2 text-black text-lg font-semibold w-52"
                  bordered={false}
                  placeholder="Search username"
                  allowClear
                  //   onSearch={onSearch}
                  style={{
                    // width: 270,
                    color: "black",
                  }}
                />
                {/* </Space> */}
                <FiSearch className="mx-2 text-xl" />
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <Button className="bg-gray-50 py-5">
                  <RangePicker
                    bordered={false}
                    disabledDate={disabled7DaysDate}
                  />
                </Button>

                {/* <Button className="bg-gray-100 py-5">
                  <Dropdown
                    className=""
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <h1 className="mr-8 text-[#4845eb] font-semibold text-base">
                          <span className="text-gray-600">Type:</span> All
                        </h1>
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </Button> */}
                {/* Filter_Drawer  ⭐*/}

                <Button className="bg-green-50 py-5 px-4 border border-green-500">
                  <CiExport className="text-green-600 text-2xl" />
                  <span className="text-green-600 text-base font-semibold">
                    Export
                  </span>
                </Button>
                <Button className="bg-blue-50 py-5 px-4 border border-blue-500">
                  <GrRefresh className="text-blue-600 text-2xl" />
                  <span className="text-blue-600 text-base font-semibold">
                    Refresh
                  </span>
                </Button>
              </div>
            </div>

            <Table
              className="overflow-x-scroll no-scrollbar bg-white  rounded-lg my-5"
              columns={columns}
              dataSource={dataSource}
              pagination={{
                pageSize: 10,
                // total: TotalPages,
              }}
            ></Table>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DebitWallets;
