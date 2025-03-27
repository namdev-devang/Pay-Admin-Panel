import { Button, Card, Checkbox, Drawer, Select, Space, Table } from "antd";
import React, { useState } from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { RxCross1 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { DatePicker } from "antd";
import { CiExport, CiFilter } from "react-icons/ci";
import { Link, Outlet, useLocation } from "react-router-dom";
import { GrRefresh } from "react-icons/gr";
import DatePickerComp from "../../../Component/DatePickerComp";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
// const { RangePicker } = DatePicker;

// Disabled 7 days from the selected date

const CreditWallets = () => {
  const { pathname } = useLocation();
  const [searched, setSearched] = useState("");
  const [open, setOpen] = useState(false);
  const getYearMonth = (date) => date.year() * 12 + date.month();

  const showDrawer = () => {
    setOpen(true);
  };

  const columns = [
    {
      title: <h1 className="text-[#323197] text-lg font-bold"> Sr.No.</h1>,
      dataIndex: "srno",
      filteredValue: [searched],
      onFilter: (value, record) => {
        return String(record.credituser)
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Credit User</h1>,
      dataIndex: "credituser",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold"> Type</h1>,
      dataIndex: "type",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Amount</h1>,
      dataIndex: "amount",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Date</h1>,
      dataIndex: "date",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Remarks</h1>,
      dataIndex: "remarks",
    },
  ];

  const dataSource = [
    {
      srno: "1",
      credituser: "Devang",
      // <h1 className="text-[#323197] font-semibold text-base">Devang Namdev</h1>
      type: "Add Money",
      amount: "15000",
      date: "04/29/2023 12:03:59 PM",
      remarks: "AFGl7047TNI856974",
    },
  ];

  const ExportPdfTable = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });

    autoTable(doc, {
      head: [["SR.NO", "CREDIT_USER", "TYPE", "AMOUNT", "DATE", "REMARKS"]],

      body: dataSource.map((item) => [
        item?.srno,
        item?.credituser,
        item?.type,
        item?.amount,
        item?.date,
        item?.remarks,
      ]),
    });

    doc.save("Wallet_list");
  };
  return (
    <>
      <>
        <div className=" flex flex-wrap justify-between items-center mb-5">
          <div className="flex mx-auto sm:mx-0">
            <Space className="lg:mx-2 " direction="">
              <Link to="/wallet/credit">
                <Card
                  // activeTabKey="home"
                  className={` ${
                    pathname == "/wallet/credit"
                      ? "bg-[#221ecf] text-white "
                      : "bg-white text-black"
                  } w-10 border border-gray-200 font-semibold  rounded-lg shadow-xl`}
                  style={{
                    width: 150,
                    height: 70,
                  }}
                >
                  <h1 className="text-base  text-center">Credit Wallet</h1>
                </Card>
              </Link>
            </Space>

            <Space className="lg:mx-2 " direction="">
              <Link to="/wallet/credit/debit">
                <Card
                  // activeTabKey="home"
                  className={` ${
                    pathname == "/wallet/credit/debit"
                      ? "bg-[#221ecf] text-white "
                      : "bg-white text-[#221ECF]"
                  }  border border-gray-200 font-semibold mx-2 rounded-lg py- shadow-xl`}
                  style={{
                    width: 150,
                    height: 70,
                  }}
                >
                  <h1 className="text-base  text-center">Debit Wallet</h1>
                </Card>
              </Link>
            </Space>

            
          </div>
          <div className="md:mt-0 mt-4">
            <h1 className="text-xl text-[#CA3160] font-[700]">
              Total Balance: 0
            </h1>
          </div>
        </div>

        {pathname == "/wallet/credit" ? (
          <>
            {" "}
            <div className="mb-10">
              <Card className="rounded-2xl shadow-md">
                <div className="">
                  <h1 className="text-black text-base my-1 font-semibold">
                    Username
                  </h1>
                  <Input
                    className="sm:w-1/4 py-3 border border-gray-300 text-black  text-xl"
                    placeholder="Username"
                  />
                </div>

                <div className="my-5">
                  <h1 className="text-black text-base my-1 font-semibold">
                    Credit Amount
                  </h1>
                  <Input
                    className="sm:w-1/4 py-3 border border-gray-300 text-black  text-xl"
                    placeholder="Affiliate Shopping"
                  />
                </div>

                <div className="my-5">
                  <h1 className="text-black text-base my-1 font-semibold">
                    Remark
                  </h1>
                  <Input.TextArea
                    className="sm:w-1/4 py-3 border border-gray-300 text-black  text-xl"
                    placeholder="Affiliate Shopping"
                  />
                </div>

                <div className=" flex">
                  <Button className="uppercase bg-[#CA3160] text-lg px-7 py-6 rounded-lg font-semibold text-white ">
                    Credit
                  </Button>
                  <Button className="uppercase text-lg px-7 py-6 rounded-lg font-semibold mx-5 border border-gray-600">
                    Clear
                  </Button>
                </div>
              </Card>
            </div>
            <div className="my-5 mx-auto">
              <h1 className="text-[#221ECF] text-3xl underline my-2 font-bold text-center md:text-left">
                Recent Transactions
              </h1>
              <Card className="rounded-2xl border border-gray-300 mb-20 shadow-md ">
                <div className="lg:flex flex-wrap justify-between items-center">
                  <div className="flex items-center bg-gray-50 border py-[4px] px-2 rounded-full mb-3">
                    {/* <Button className=" py-5"> */}

                    {/* </Button> */}

                    {/* <Space direction="vertical"> */}

                    <Input
                      className=" border-l-2 mx-2 text-black text-lg font-semibold "
                      bordered={false}
                      placeholder="Search username"
                      allowClear
                      onChange={(e) => setSearched(e.target.value)}
                      style={{
                        width: 270,
                        color: "black",
                      }}
                    />
                    {/* </Space> */}
                    <FiSearch className="mx-2 text-xl" />
                  </div>
                  <div className="lg:flex flex-wrap items-center gap-5 ">
                    {/* <Button className="bg-gray-50 py-5 mb-3 lg:mb-0"> */}
                    <DatePickerComp />
                    {/* </Button> */}

                    {/* Filter_Drawer  ⭐*/}
                      <div className="flex lg:my-0 my-2">
                    <Button
                      onClick={ExportPdfTable}
                      className="bg-green-50 py-5 px-4 border border-green-500 mx-3"
                    >
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
                </div>

                <Table
                  className="overflow-x-scroll no-scrollbar bg-white  rounded-lg my-5 mb-10"
                  columns={columns}
                  dataSource={dataSource}
                  pagination={{
                    pageSize: 10,
                    // total: TotalPages,
                  }}
                ></Table>
              </Card>
            </div>
          </>
        ) : null}

        <Outlet />
      </>
    </>
  );
};

export default CreditWallets;
