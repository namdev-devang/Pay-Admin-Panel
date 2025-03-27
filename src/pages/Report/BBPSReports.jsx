import {
  Button,
  Card,
  Checkbox,
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
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import InputSearchComp from "../../Component/InputSearchComp";
import StatusCheckFilter from "../../Component/StatusCheckFilter";
import { GrRefresh } from "react-icons/gr";
import Heading from "../../Component/Heading";
import RefreshBtn from "../../Component/RefreshBtn";
import DatePickerComp from "../../Component/DatePickerComp";
import ExportPdfBtn from "../../Component/ExportPdfBtn";
import TableComp from "../../Component/TableComp";
const { RangePicker } = DatePicker;

// Disabled 7 days from the selected date

const BBPSReports = () => {
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState("");
  const [selectSearch, setselectSearch] = useState("username");
  const [selectOption, setselectOption] = useState("All");
  console.log(selectSearch, "ssss");



  const columns = [
    {
      title: <h1 className="text-[#323197] text-lg font-bold"> Sr.No.</h1>,
      dataIndex: "srno",
      filteredValue: [searched],
      onFilter: (value, record) => {
        return String(record[selectSearch])
          .toLowerCase()
          .includes(value.toLowerCase());
        // String(record.email).toLowerCase().includes(value.toLowerCase()) ||
        // String(record.phone).toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      title: <h1 className="text-[#323197] text-lg font-bold">Username</h1>,
      dataIndex: "username",
    },

    {
      title: <h1 className="text-[#323197] text-lg font-bold">Number</h1>,
      dataIndex: "number",
      render: (text) => (
        <div>
          {text}
          <Tooltip title="Copy Phone">
            <Button
              icon={<CopyOutlined />}
              type="link"
              onClick={() => {
                navigator.clipboard.writeText(text);
                message.success("Phone number copied!");
              }}
            />
          </Tooltip>
        </div>
      ),
    },

    {
      title: <h1 className="text-[#323197] text-lg font-bold">Operator</h1>,
      dataIndex: "operator",
      render: (text) => (
        <div>
          {text}
          <Tooltip title="Copy Operator">
            <Button
              icon={<CopyOutlined />}
              type="link"
              onClick={() => {
                navigator.clipboard.writeText(text);
                message.success("Operator copied!");
              }}
            />
          </Tooltip>
        </div>
      ),
    },

    {
      title: <h1 className="text-[#323197] text-lg font-bold">Api</h1>,
      dataIndex: "api",
    },
    {
      title: (
        <h1 className="text-[#323197] text-lg font-bold">Transaction Id</h1>
      ),
      dataIndex: "transactionid",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Amount</h1>,
      dataIndex: "amount",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Status</h1>,
      dataIndex: "status",
    },
  ];

  const dataSource = [
    {
      srno: "1",
      username: "Devang",
      // <h1 className="text-[#323197] font-semibold text-base">1206197006</h1>
      api: "Shelik jilekha",
      operator: "Airtel",
      number: "7047856974",

      transactionid: "7047856974",
      amount: "15000",
      status: "Success",
    },

    {
      srno: "2",
      username: "Sambhalika",
      // <h1 className="text-[#323197] font-semibold text-base">1206197006</h1>
      api: "Shelik jilekha",
      operator: "Jio",
      number: "8529637410",
      transactionid: "7047856974",
      amount: "15000",
      status: "Pending",
    },

    {
      srno: "3",
      username: "VrashVanshika",
      // <h1 className="text-[#323197] font-semibold text-base">1206197006</h1>
      api: "Shelik jilekha",
      operator: "Vi",
      number: "9638527412",
      transactionid: "7047856974",
      amount: "15000",
      status: "Cancel",
    },

    {
      srno: "4",
      username: "Avio",
      // <h1 className="text-[#323197] font-semibold text-base">1206197006</h1>
      api: "Laiva",
      operator: "Jio",
      number: "8741524123",
      transactionid: "7047856974",
      amount: "15000",
      status: "Pending",
    },
  ];

  const filterSelectData =
    selectOption && selectOption !== "All"
      ? dataSource.filter((item) => item.status === selectOption)
      : dataSource;

  console.log("Selected Option:", selectOption);
  console.log("Filtered Data:", filterSelectData);

  const ExportBBPSReportTable = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });

    autoTable(doc, {
      head: [
        [
          "SR.NO",
          "USER_NAME",
          "NUMBER",
          "OPERATOR",
          "API",
          "TRANSACTION_ID",
          "AMOUNT",
          "STATUS",
        ],
      ],

      body: dataSource.map((items) => [
        items?.srno,
        items?.username,
        items?.operator,
        items?.number,
        items?.api,
        items?.transactionid,
        items?.status,
        items?.amount,
      ]),
    });

    doc.save("BBPS_Reports");
  };

  return (
    <>
      <div>
        <Heading title={"UpDate Recharge / BBPS Transactions"} />

        <div className="my-5">
          <Card className="rounded-2xl border border-gray-300 mb-14 shadow-md ">
            <div className="flex items-center flex-wrap justify-between">
              <div className="flex items-center bg-gray-50 border py-[4px] px-2 rounded-md ">
                <Select
                  bordered={false}
                  defaultValue="Username"
                  onChange={(value) => setselectSearch(value)}
                >
                  <Option value="username">Username</Option>
                  <Option value="number">Number</Option>
                  <Option value="operator">Operator</Option>
                </Select>

                {/* Reuse_Component  */}
                <InputSearchComp
                  handelchange={(e) => {
                    setSearched(e.target.value);
                  }}
                  placeholder={selectSearch}
                />
                {/* </Space> */}
                <FiSearch className="mx-2 md:text-xl text-5xl" />
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <div className="sm:block hidden">
                  <StatusCheckFilter
                    value={selectOption}
                    handelSelectChange={(value) => setselectOption(value)}
                  />
                </div>


                <DatePickerComp />

                <div className="sm:block hidden">
                  <ExportPdfBtn onClick={ExportBBPSReportTable} />
                </div>

                <RefreshBtn title={"Refresh"} />

                <div className="sm:hidden block">
                  <div className="flex justify-between">
                    <StatusCheckFilter
                      value={selectOption}
                      handelSelectChange={(value) => setselectOption(value)}
                    />
                    {/* Export TableComponent */}
                    <ExportPdfBtn
                      onClick={ExportBBPSReportTable}
                    />

                  </div>
                </div>

              </div>
            </div>


            <TableComp
              columns={columns}
              dataSource={filterSelectData}
              pagination={{
                pageSize: 10,
              }}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default BBPSReports;
