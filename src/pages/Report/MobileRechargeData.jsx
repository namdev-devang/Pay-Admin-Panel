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
import { Option } from "antd/es/mentions";
import InputSearchComp from "../../Component/InputSearchComp";
import { GrRefresh } from "react-icons/gr";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
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

  const ExportDthReport = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });

    autoTable(doc, {
      head: [
        [
          "SR.NO",
          "USERNAME",
          "OWNER_NAME",
          "OPERATOR",
          "NUMBER",
          "TRANSACTION_ID",
          "AMOUNT",
          "STATUS",
          "REQ_TIME",
        ],
      ],

      body: dataSource.map((items) => [
        items.srno,
        items.username,
        items.ownername,
        items.operator,
        items.number,
        items.transactionid,
        items.amount,
        items.status,
      ]),
    });

    doc.save("Mobile_Recharge_Reports");
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

            <div className="flex flex-wrap justify-between my-5">
              <div className="flex items-center bg-gray-50 border py-[4px] px-2 rounded-md my-2">
                <Select
                  bordered={false}
                  defaultValue="userid"
                // onChange={(value) => setSearchedSelect(value)}
                >
                  <Option value="userid">Username</Option>
                  <Option value="number">Number</Option>
                  <Option value="operator">Operator</Option>
                </Select>
                {/* <Space direction="vertical"> */}

                <InputSearchComp
                // handelchange={(e) => setSearched(e.target.value)}
                />
                {/* </Space> */}
                <FiSearch className="mx-2 text-xl" />
              </div>

              <div className="flex flex-wrap items-center gap-5">


                {/* Filter_Drawer  ⭐*/}
                {/* <FilterDrawer /> */}


                <Button className="sm:w-auto w-full bg-blue-50 py-5 px-4 border border-blue-500">
                  <GrRefresh className="text-blue-600 text-2xl" />
                  <span className="text-blue-600 text-base font-semibold">
                    Refresh
                  </span>
                </Button>

                <Button
                  onClick={ExportDthReport}
                  className="bg-green-50 py-5 px-4 border border-green-500 sm:w-auto w-full"
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

export default MobileRechargeData;
