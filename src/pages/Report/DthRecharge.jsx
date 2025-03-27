import { Button, Card, Drawer, Select, Space, Table } from "antd";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Option } from "antd/es/mentions";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import InputSearchComp from "../../Component/InputSearchComp";
import { useLocation } from "react-router-dom";
import Heading from "../../Component/Heading";
import DatePickerComp from "../../Component/DatePickerComp";
import RefreshBtn from "../../Component/RefreshBtn";
import ExportPdfBtn from "../../Component/ExportPdfBtn";
import TableComp from "../../Component/TableComp";

const DthRecharge = () => {
  const location = useLocation()
  const { pathname } = location
  console.log(pathname, "pathname")
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState("");
  const [searchedSelect, setSearchedSelect] = useState("userid");


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
        <Heading title={"DTH Services Reports"} />

        <div className="my-5">
          <Card className="rounded-xl border border-gray-300 mb-14 shadow-md ">
            <div className="flex flex-wrap gap-5">
              <Card className="text-base border border-gray-300 text-black font-semibold sm:w-auto w-full rounded-3xl">
                <h1 className="text-left">Today's Total Amount</h1>
                <h1 className="text-xl text-[#3331af] mt-[2px]">
                  15,45,25,899S
                </h1>
              </Card>
              <Card className="text-base border border-gray-300 text-black sm:w-auto w-full font-semibold pr-2 rounded-3xl">
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
                  onChange={(value) => setSearchedSelect(value)}
                >
                  <Option value="userid">User_Id</Option>
                  <Option value="number">Number</Option>
                  <Option value="operator">Operator</Option>
                </Select>
                {/* <Space direction="vertical"> */}

                <InputSearchComp
                  handelchange={(e) => setSearched(e.target.value)}
                  placeholder={searchedSelect}
                />
                {/* </Space> */}
                <FiSearch className="mx-2 text-xl" />
              </div>

              <div className="flex flex-wrap items-center gap-5">
                <DatePickerComp />


                <ExportPdfBtn
                  onClick={ExportDthReport}
                />

                <RefreshBtn title={"Refresh"} />

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

export default DthRecharge;
