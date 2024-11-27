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
const { RangePicker } = DatePicker;

// Disabled 7 days from the selected date

const BBPSReports = () => {
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState("");
  const [selectSearch, setselectSearch] = useState("username");
  const [selectOption, setselectOption] = useState("All");
  console.log(selectSearch, "ssss");
  const handelSelectChange = (e) => {
    setselectOption(e.target.value);
  };

  const getYearMonth = (date) => date.year() * 12 + date.month();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

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

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
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

        <h1 className="lg:text-3xl text-xl font-bold text-[#221ECF] my-2">
          UpDate Recharge / BBPS Transactions
        </h1>
        <div className="my-5">
          <Card className="rounded-2xl border border-gray-300 mb-14 shadow-md ">
            <div className="flex flex-wrap justify-between">
              <div className="flex items-center bg-gray-50 border py-[4px] px-2 rounded-md mb-4">
                {/* <Button className=" py-5"> */}
                <Select
                  bordered={false}
                  defaultValue="Username"
                  onChange={(value) => setselectSearch(value)}
                >
                  <Option value="username">Username</Option>
                  <Option value="number">Number</Option>
                  <Option value="operator">Operator</Option>
                </Select>
                {/* </Button> */}

                {/* <Space direction="vertical"> */}

                {/* Reuse_Component  */}
                <InputSearchComp
                  handelchange={(e) => {
                    setSearched(e.target.value);
                  }}
                />
                {/* </Space> */}
                <FiSearch className="mx-2 md:text-xl text-5xl" />
              </div>

              <div className="flex flex-wrap items-center gap-5">

                <StatusCheckFilter
                  value={selectOption}
                  handelSelectChange={(value) => setselectOption(value)}
                />


                <Button className="bg-gray-50 py-5">
                  <RangePicker
                    bordered={false}
                    disabledDate={disabled7DaysDate}
                  />
                </Button>

                <Button
                  onClick={ExportBBPSReportTable}
                  className="bg-green-50 py-5 px-4 border border-green-500"
                >
                  <CiExport className="text-green-600 text-2xl" />
                  <span className="text-green-600 text-base font-semibold">
                    Export
                  </span>
                </Button>
              </div>
            </div>
            <Table
              className="overflow-x-scroll no-scrollbar bg-white  rounded-lg my-5"
              rowSelection={rowSelection}
              columns={columns}
              dataSource={filterSelectData}
              pagination={{
                pageSize: 10,
              }}
            ></Table>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BBPSReports;
