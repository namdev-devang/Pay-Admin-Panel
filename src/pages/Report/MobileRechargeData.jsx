import {
  Button,
  Card,
  Drawer,
  message,
  Select,
  Space,
  Table,
  Tooltip,
} from "antd";
import React, { useState } from "react";
import { Dropdown } from "antd";
import { CopyOutlined, DownOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { RxCross1 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { DatePicker } from "antd";
import { CiExport, CiFilter } from "react-icons/ci";
import FilterDrawer from "../ManageUser/Drawer/FilterDrawer";
import { MdContentCopy } from "react-icons/md";
const { RangePicker } = DatePicker;

// Disabled 7 days from the selected date

const MobileRechargeData = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
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
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Username</h1>,
      dataIndex: "username",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Owner Name</h1>,
      dataIndex: "ownername",
      render: (text) => (
        <div className="flex items-center">
          {text}
          <Tooltip title="Copy Username">
            <Button
              icon={<CopyOutlined />}
              type="link"
              onClick={() => {
                navigator.clipboard.writeText(text);
                message.success("User_Name copied!");
              }}
            />
          </Tooltip>
        </div>
      ),
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Operator</h1>,
      dataIndex: "operator",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Number</h1>,
      dataIndex: "number",
      render: (text) => (
        <div className="flex items-center">
          {text}
          <Tooltip title="Copy Number">
            <Button
              icon={<CopyOutlined />}
              type="link"
              onClick={() => {
                navigator.clipboard.writeText(text);
                message.success("Phone_Number copied!");
              }}
            />
          </Tooltip>
        </div>
      ),
    },
    {
      title: (
        <h1 className="text-[#323197] text-lg font-bold">Transaction Id</h1>
      ),
      dataIndex: "transactionid",
      render: (text) => (
        <div className="flex items-center">
          {text}
          <Tooltip title="Copy Transaction_Id">
            <Button
              icon={<CopyOutlined />}
              type="link"
              onClick={() => {
                navigator.clipboard.writeText(text);
                message.success("Transaction_Id copied!");
              }}
            />
          </Tooltip>
        </div>
      ),
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Amount</h1>,
      dataIndex: "amount",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Status</h1>,
      dataIndex: "status",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Req.Time</h1>,
      dataIndex: "reqtime",
    },
  ];

  const dataSource = [
    {
      srno: "1",
      username: "1206197006",
      ownername: "Shelik jilekha",
      operator: "Airtel",
      number: "7047856974",
      transactionid: "7047856974",
      amount: "15000",
      status: "Success",
    },
  ];

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
        <h1 className="md:text-3xl text-2xl  font-bold text-[#221ECF] my-4">
          Today's Live / Recharges Reports
        </h1>
        <div className="my-5">
          <Card className="rounded-xl border border-gray-300 mb-14 shadow-md ">
            <div className="flex flex-wrap gap-5">
              <Card className="md:w-64 w-full  text-base border border-gray-300 text-black font-semibold pr-5 rounded-3xl">
                <h1 className="text-left">Today's Total Amount</h1>
                <h1 className="text-xl text-[#3331af] mt-[2px]">
                  15,45,25,899S
                </h1>
              </Card>
              <Card className="md:w-72 w-full  text-base border border-gray-300 text-black font-semibold pr-2 rounded-3xl">
                <h1 className="text-left">Today's Success Transactions</h1>
                <h1 className="text-xl text-[#3331af] mt-[2px]">
                  15,45,25,899S
                </h1>
              </Card>
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

export default MobileRechargeData;
