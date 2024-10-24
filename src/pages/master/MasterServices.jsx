import { Button, Card, Drawer, Select, Space, Table } from "antd";
import React, { useState } from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { BiCross } from "react-icons/bi";
import { BsCrosshair } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { Option } from "antd/es/mentions";
import { FaUserEdit } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import UpdateUserDrawer from "../Report/UpdateUserDrawer";

const MasterServices = () => {
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState("");
  const [selectOption, setselectOption] = useState("All");
  const [selectField, setselectField] = useState("service");
  console.log(selectField);
  const handelSelectChange = (e) => {
    setselectOption(e.target.value);
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
      title: <h1 className="text-[#323197] text-lg font-bold">Service</h1>,
      dataIndex: "service",
    },
    {
      title: (
        <h1 className="text-[#323197] text-lg font-bold">
          Shopping Point Debit
        </h1>
      ),
      dataIndex: "debit",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Repurchase%</h1>,
      dataIndex: "repurchase",
    },
    {
      title: (
        <h1 className="text-[#323197] text-lg font-bold">
          Shopping Point Credit%
        </h1>
      ),
      dataIndex: "credit",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Prime Point%</h1>,
      dataIndex: "primepoint",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Status</h1>,
      dataIndex: "status",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Action</h1>,
      dataIndex: "action",
      render: (text, record) => (
        <div>
          <Button type="primary" className="py-4">
            <Dropdown
              className=""
              menu={{
                items: [
                  {
                    key: "edit",
                    label: (
                      <>
                        {/* {users.map((user) => ( */}
                        <spna
                          className="flex items-center font-semibold mx-2 gap-1 text-base"
                          // onClick={() => {
                          // setSelectedUser(record);
                          // setOpen(true);
                          // }}
                        >
                          <FaUserEdit className="text-base" />
                          Edit
                        </spna>

                        {/* ))} */}
                      </>
                    ),
                  },
                ],
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <h1 className="font-semibold text-base">Actions</h1>
                  <DownOutlined className="text-white" />
                </Space>
              </a>
            </Dropdown>
          </Button>
          {/* <Button
            icon={<CopyOutlined />}
            type="link"
            onClick={() => {
              message.success("Phone number copied!");
            }}
          /> */}
        </div>
      ),
    },
  ];

  const dataSource = [
    {
      srno: <h1 className="text-base ">1</h1>,
      service: "Digital Marketing",
      debit: <h1 className="text-base text-gray-600">10.00</h1>,
      repurchase: <h1 className="text-base text-gray-600">5</h1>,
      credit: <h1 className="text-base text-gray-600">12.50</h1>,
      primepoint: <h1 className="text-base text-gray-600">30.00</h1>,
      status: "Active",
      // <h1
      //   onClick={showDrawer}
      //   className="cursor-pointer text-base text-green-500 font-semibold"
      // >
      //   Active
      // </h1>
      action: (
        <Button
          defaultHoverBg={false}
          className="py-4 bg-[#323197] hover:text-black "
        >
          <Dropdown
            className=""
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <h1 className="text-white hover:text-black font-semibold text-base">
                  Actions
                </h1>
                <DownOutlined className="text-white " />
              </Space>
            </a>
          </Dropdown>
        </Button>
      ),
    },
    {
      srno: <h1 className="text-base ">2</h1>,
      service: "Web Hosting",
      debit: <h1 className="text-base text-gray-600">20.00</h1>,
      repurchase: <h1 className="text-base text-gray-600">8</h1>,
      credit: <h1 className="text-base text-gray-600">25.00</h1>,
      primepoint: <h1 className="text-base text-gray-600">45.00</h1>,
      status: "Pending",
      // <h1
      //   onClick={showDrawer}
      //   className="cursor-pointer text-base text-yellow-500 font-semibold"
      // >
      //   Pending
      // </h1>
      action: (
        <Button
          defaultHoverBg={false}
          className="py-4 bg-[#323197] hover:text-black "
        >
          <Dropdown
            className=""
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <h1 className="text-white hover:text-black font-semibold text-base">
                  Actions
                </h1>
                <DownOutlined className="text-white " />
              </Space>
            </a>
          </Dropdown>
        </Button>
      ),
    },
    {
      srno: <h1 className="text-base ">3</h1>,
      service: "SEO Optimization",
      debit: <h1 className="text-base text-gray-600">15.00</h1>,
      repurchase: <h1 className="text-base text-gray-600">2</h1>,
      credit: <h1 className="text-base text-gray-600">18.00</h1>,
      primepoint: <h1 className="text-base text-gray-600">35.00</h1>,
      status: "Blocked",
      // <h1
      //   onClick={showDrawer}
      //   className="cursor-pointer text-base text-red-500 font-semibold"
      // >
      //   Blocked
      // </h1>
      action: (
        <Button
          defaultHoverBg={false}
          className="py-4 bg-[#323197] hover:text-black "
        >
          <Dropdown
            className=""
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <h1 className="text-white hover:text-black font-semibold text-base">
                  Actions
                </h1>
                <DownOutlined className="text-white " />
              </Space>
            </a>
          </Dropdown>
        </Button>
      ),
    },
    {
      srno: <h1 className="text-base ">4</h1>,
      service: "Cloud Services",
      debit: <h1 className="text-base text-gray-600">5.00</h1>,
      repurchase: <h1 className="text-base text-gray-600">1</h1>,
      credit: <h1 className="text-base text-gray-600">7.00</h1>,
      primepoint: <h1 className="text-base text-gray-600">20.00</h1>,
      status: "Active",
      // <h1
      //   onClick={showDrawer}
      //   className="cursor-pointer text-base text-green-500 font-semibold"
      // >
      //   Active
      // </h1>
      action: (
        <Button
          defaultHoverBg={false}
          className="py-4 bg-[#323197] hover:text-black "
        >
          <Dropdown
            className=""
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <h1 className="text-white hover:text-black font-semibold text-base">
                  Actions
                </h1>
                <DownOutlined className="text-white " />
              </Space>
            </a>
          </Dropdown>
        </Button>
      ),
    },
  ];

  const filterSelectData =
    selectOption && selectOption !== "All"
      ? dataSource.filter((item) => item.status === selectOption)
      : dataSource;

  console.log("Selected Option:", selectOption);
  console.log("Filtered Data:", filterSelectData);

  return (
    <>
      <div>
        <Drawer width={420} closable={false} onClose={onClose} open={open}>
          <div className="flex items-center justify-between my-3">
            <h1 className="text-2xl font-bold text-[#5a58eb]">Edit Services</h1>
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
        </Drawer>
        <h1 className="text-3xl font-bold text-[#221ECF] my-4">Services</h1>
        <div className="my-5">
          <Card className="rounded-2xl border border-gray-300 mb-14 shadow-md ">
            <div className="flex flex-wrap justify-between">
              <div className="flex items-center bg-gray-50 border lg:py-[4px] lg:px-2 rounded-md mb-4 lg:mb-0">
                {/* <Button className=" py-5"> */}
                <Select
                  bordered={false}
                  defaultValue="service"
                  onChange={(value) => setselectField(value)}
                  className=" bg-gray-50 rounded-lg focus:border-none"
                >
                  <Option value="service">service</Option>
                  <Option value="status">Status</Option>
                  {/* <option value="email">Email Id</option> */}
                </Select>
                {/* </Button> */}

                {/* <Space direction="vertical"> */}

                <Input
                  className="border-l-2 mx-2 text-black text-lg font-semibold lg:w-52 "
                  bordered={false}
                  placeholder="Search here..."
                  allowClear
                  onChange={(e) => {
                    setSearched(e.target.value);
                  }}
                  // value={inputVal}
                  style={{
                    // width: 270,
                    color: "black",
                  }}
                />
                {/* </Space> */}
                <FiSearch className="mx-2 lg:text-xl text-4xl  " />
              </div>

              <div className="sm:mt-0 mt-4 ">
                <Select 
                  className="text- border font-semibold text-gray-600 rounded-lg focus:border bg-gray-50 mx-4"
                  defaultValue="All"
                  value={selectOption}
                  onChange={(value) => setselectOption(value)}
                  placeholder="Select Status..."
                  style={{
                    width: 100,
                    height: 45,
                  }}
                >
                  <Option value="All">All</Option>
                  <Option value="Active">Active</Option>
                  <Option value="Pending">Pending</Option>
                  <Option value="Blocked">Blocked</Option>
                </Select>

                <UpdateUserDrawer />
              </div>
            </div>
            <Table
              className="overflow-x-scroll no-scrollbar bg-white  rounded-lg my-5"
              columns={columns}
              dataSource={filterSelectData}
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

export default MasterServices;
