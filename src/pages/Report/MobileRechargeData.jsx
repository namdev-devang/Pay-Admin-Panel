import {
  Button,
  Card,
  message,
  Select,
  Table,
  Tooltip,
} from "antd";
import React, { useState } from "react";
import { CopyOutlined } from "@ant-design/icons";
import { FiSearch } from "react-icons/fi";
import { Option } from "antd/es/mentions";
import InputSearchComp from "../../Component/InputSearchComp";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Heading from "../../Component/Heading";
import RefreshBtn from "../../Component/RefreshBtn";
import ExportPdfBtn from "../../Component/ExportPdfBtn";
import TableComp from "../../Component/TableComp";


const MobileRechargeData = () => {
  const [searched, setSearched] = useState("");
  const [selectField, setselectField] = useState("username");


  const ExportReport = () => {
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
      filteredValue: [searched],
      onFilter: (value, record) => {
        return String(record[selectField])
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
        <Heading title={"Today's Live / Recharges Reports"} />
        <div className="my-10">
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
                  defaultValue="username"
                  onChange={(value) => setselectField(value)}
                >
                  <Option value="username">Username</Option>
                  <Option value="number">Number</Option>
                  <Option value="operator">Operator</Option>
                </Select>
                {/* <Space direction="vertical"> */}

                <InputSearchComp
                  handelchange={(e) => setSearched(e.target.value)}
                  placeholder={selectField}
                />
                {/* </Space> */}
                <FiSearch className="mx-2 text-xl" />
              </div>

              <div className="flex flex-wrap items-center gap-5">

                <RefreshBtn title={"Refresh"} />

                <ExportPdfBtn onClick={ExportReport} />

              </div>
            </div>

            <TableComp
              columns={columns}
              dataSource={dataSource}
              pagination={{
                pageSize: 10,
                // total: TotalPages,
              }}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default MobileRechargeData;
