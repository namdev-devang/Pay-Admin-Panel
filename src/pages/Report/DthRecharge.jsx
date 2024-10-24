import { Button, Card, Drawer, Select, Space, Table } from "antd";
import React, { useState } from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { RxCross1 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { DatePicker } from "antd";
import { CiExport, CiFilter } from "react-icons/ci";
import FilterDrawer from "../ManageUser/Drawer/FilterDrawer";
import { MdContentCopy } from "react-icons/md";
import { Option } from "antd/es/mentions";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { data } from "autoprefixer";
import { GrUpdate } from "react-icons/gr";
import UpdateUserDrawer from "./UpdateUserDrawer";
const { RangePicker } = DatePicker;
// Disabled 7 days from the selected date

const DthRecharge = () => {
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState("");
  const [searchedSelect, setSearchedSelect] = useState("userid");

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

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const columns = [
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Sr.No.</h1>,
      dataIndex: "srno",
      filteredValue: [searched],
      onFilter: (value, record) => {
        return String(record[searchedSelect])
          .toLowerCase()
          .includes(value.toLowerCase());
      },
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">User Id</h1>,
      dataIndex: "userid",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Number</h1>,
      dataIndex: "number",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Services</h1>,
      dataIndex: "services",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Operator</h1>,
      dataIndex: "operator",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Old Balance</h1>,
      dataIndex: "oldbalance",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Amount</h1>,
      dataIndex: "amount",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">New Balance</h1>,
      dataIndex: "newbalance",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Api</h1>,
      dataIndex: "api",
    },
  ];

  const dataSource = [
    {
      srno: "1",
      number: "141207456197006",
      userid: "9632607798",
      services: "DTH",
      operator: "Tata Play",
      oldbalance: "1,500.69",
      amount: "1,699.51",
      newbalance: "1,244.14",
      api: "Nothing",
    },
  ];

  const ExportDthReport = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });

    autoTable(doc, {
      head: [
        [
          "SR.NO",
          "USER_ID",
          "NUMBER",
          "SERVICES",
          "OPERATOR",
          "OLD_BALANCE",
          "AMOUNT",
          "NEW_BALANCE",
          "API",
        ],
      ],

      body: dataSource.map((items) => [
        items.srno,
        items.userid,
        items.number,
        items.services,
        items.operator,
        items.amount,
        items.newbalance,
        items.oldbalance,
        items.api,
      ]),
    });

    doc.save("Dth_Recharge_Reports");
  };
  return (
    <>
      <div>
        <Drawer width={420} closable={false} onClose={onClose} open={open}>
          <div>
            <div className="flex items-center justify-between my-3">
              <h1 className="text-2xl font-bold text-[#5a58eb]">
                Edit Services
              </h1>
              <RxCross1 onClick={onClose} className="cursor-pointer text-xl" />
            </div>
            <div className="mt-10">
              <div className="my-5">
                <h1 className="text-black text-base my-1 font-semibold">
                  Service
                </h1>
                <Input
                  className="py-3 border border-gray-300 text-black  text-xl"
                  placeholder="Affiliate Shopping"
                />
              </div>

              <div className="my-5">
                <h1 className="text-black text-base my-1 font-semibold">
                  Shopping Percentage
                </h1>
                <Input
                  className="py-3 border border-gray-300 text-black  text-xl"
                  placeholder="Affiliate Shopping"
                />
              </div>

              <div className="my-5">
                <h1 className="text-black text-base my-1 font-semibold">
                  Prime Percentage
                </h1>
                <Input
                  className="py-3 border border-gray-300 text-black  text-xl"
                  placeholder="Affiliate Shopping"
                />
              </div>

              <div className="my-5">
                <h1 className="text-black text-base my-1 font-semibold">
                  Repurchase Percentage
                </h1>
                <Input
                  className="py-3 border border-gray-300 text-black  text-xl"
                  placeholder="Affiliate Shopping"
                />
              </div>

              <div className="my-5">
                <h1 className="text-black text-base my-1 font-semibold">
                  Status
                </h1>
                {/* <Input className="py-3 border border-gray-300 text-black  text-xl" placeholder="Affiliate Shopping" /> */}
                <Select
                  className="w-full"
                  defaultValue="lucy"
                  onChange={handleChange}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: <span className="py-5">Lucy</span>,
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
              </div>

              <div className="my-5">
                <h1 className="text-black text-base my-1 font-semibold">
                  Cupon Enable Status
                </h1>
                <Input
                  className="py-3 border border-gray-300 text-black  text-xl"
                  placeholder="Affiliate Shopping"
                />
              </div>
            </div>
            <div className="">
              <Button className="bg-[#CA3160] text-lg px-7 py-5">UPDATE</Button>
              <Button className="text-lg px-7 py-5 mx-4 uppercase ">
                Cancel
              </Button>
            </div>
          </div>
        </Drawer>
        <h1 className="text-3xl font-bold text-[#221ECF] my-4">
          Services Reports
        </h1>
        <div className="my-5">
          <Card className="rounded-xl border border-gray-300 mb-14 shadow-md ">
            <div className="flex flex-wrap gap-5">
              <Card className="text-base border border-gray-300 text-black font-semibold pr-5 rounded-3xl">
                <h1 className="text-left">Today's Total Amount</h1>
                <h1 className="text-xl text-[#3331af] mt-[2px]">
                  15,45,25,899S
                </h1>
              </Card>
              <Card className="text-base border border-gray-300 text-black font-semibold pr-2 rounded-3xl">
                <h1 className="text-left">Today's Success Transactions</h1>
                <h1 className="text-xl text-[#3331af] mt-[2px]">
                  15,45,25,899S
                </h1>
              </Card>
            </div>

            <div className="flex flex-wrap justify-between my-5">
              <div className="flex items-center bg-gray-50 border py-[4px] px-2 rounded-md">
                <Select
                  bordered={false}
                  defaultValue="userid"
                  onChange={(value) => setSearchedSelect(value)}
                >
                  <Option value="userid">User_Id</Option>
                  <Option value="number">Number</Option>
                  <Option value="operator">Operator</Option>
                </Select>
                {/* <Space direction="vertical"> */}

                <Input
                  className="  text-black text-lg font-semibold w-32 md:w-52 "
                  bordered={false}
                  placeholder="Search user Id"
                  onChange={(e) => setSearched(e.target.value)}
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

                {/* Filter_Drawer  ⭐*/}
                {/* <FilterDrawer /> */}

                <UpdateUserDrawer />

                <Button
                  onClick={ExportDthReport}
                  className="bg-green-50 py-5 px-4 border border-green-500"
                >
                  <CiExport className="text-green-600 text-2xl" />
                  <span className="text-green-600 text-base font-semibold">
                    Export
                  </span>
                </Button>

                {/* <Button className="bg-gray-100 py-5 w-32 invisible">
                  <Dropdown
                    className=""
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <h1 className="mr-2 text-[#323197] font-semibold text-base">
                          <span className="text-gray-600 text-center">Satus:</span> All
                        </h1>
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </Button> */}
              </div>
            </div>
            <Table
              className="overflow-x-scroll no-scrollbar bg-white  rounded-lg my-5 border border-gray-200"
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

export default DthRecharge;
