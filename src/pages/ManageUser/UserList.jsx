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
import { FiSearch } from "react-icons/fi";
import { CiExport } from "react-icons/ci";
import FilterDrawer from "../ManageUser/Drawer/FilterDrawer";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Option } from "antd/es/mentions";
import DatePickerComp from "../../Component/DatePickerComp";
import ExportPdfTable from "../../Component/ExoortPdfTable";
import StatusCheckFilter from "../../Component/StatusCheckFilter";
import { FaUserEdit } from "react-icons/fa";
import UpdateUserDrawer from "../Report/UpdateUserDrawer";
// import InputSearchComp from "../../Component/InputSearchComp";

const UserList = () => {
  const [searched, setSearched] = useState("");
  const [selectField, setselectField] = useState("name");
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(selectedUser);
  const [users, setUsers] = useState(null);
  // console.log(users);
  const [showInput, setShowInput] = useState({
    id: "",
    status: false,
  });

  const [referId, setReferId] = useState();
  // console.log(selectedUser);

  const showDrawer = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const handleSave = () => {
    const updatedUsers = users?.map((user) =>
      user?.id === selectedUser?.id ? selectedUser : user
    );
    setUsers(updatedUsers);
    setOpen(false);
  };

  const columns = [
    {
      title: <h1 className="text-[#323197] text-lg font-bold">#id</h1>,
      dataIndex: "id",
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
      title: <h1 className="text-[#323197] text-lg font-bold">Name</h1>,
      dataIndex: "name",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Phone</h1>,
      dataIndex: "phone",
      key: "phone",
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
      title: <h1 className="text-[#323197] text-lg font-bold">Email</h1>,
      dataIndex: "email",
      key: "email",
      render: (text) => (
        <div>
          {text}
          <Tooltip title="Copy Email">
            <Button
              icon={<CopyOutlined />}
              type="link"
              onClick={() => {
                navigator.clipboard.writeText(text);
                message.success("Email copied!");
              }}
            />
          </Tooltip>
        </div>
      ),
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Refered By</h1>,
      dataIndex: "referedby",
      key: "referedby",
      render: (text, record) => (
        <div>
          {record.referedby ? (
            <h2>{record.referedby}</h2>
          ) : showInput && record.id === showInput.id ? (
            <Input
              key={record.id}
              value={referId}
              onChange={(e) => setReferId(e.target.value)}
              placeholder="Enter Refer"
              addonAfter={
                <Button
                  onClick={() => handleAddRefer(record)}
                  type="primary"
                  className="bg-blue-500"
                >
                  Add
                </Button>
              }
            />
          ) : (
            <Button
              onClick={() =>
                setShowInput({
                  status: true,
                  id: record.id,
                })
              }
              className="font-bold text-center text-base text-white bg-blue-600 rounded-lg p-5 "
            >
              Add
            </Button>
          )}
        </div>
      ),
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Registration</h1>,
      dataIndex: "registration",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">IP</h1>,
      dataIndex: "ip",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Address</h1>,
      dataIndex: "address",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Status</h1>,
      dataIndex: "status",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">MPIN</h1>,
      dataIndex: "mpin",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Balance</h1>,
      dataIndex: "balance",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Action</h1>,
      dataIndex: "action",
      key: "action",
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
                          onClick={() => {
                            setSelectedUser(record);
                            setOpen(true);
                          }}
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

  const dataArr = [
    {
      id: "1",
      name: "Devang Namdev",
      phone: "8269710784",
      email: "devangnamdev917gmail.com",
      referedby: true,
      registration: "06 Oct, 2024, 16:18 PM",
      ip: "106.209.176.177",
      address: "-",
      status: "Active",
      mpin: 1234,
      balance: 100,
    },
    {
      id: "2",
      name: "Deepak Rathor",
      phone: "987654567",
      email: "deepak.com",
      referedby: false,
      registration: "04 Oct, 2024, 16:18 PM",
      ip: "106.209.176.177",
      address: "-",
      status: "Active",
      mpin: 1234,
      balance: 100,
    },
  ];

  const dataSource1 = [
    {
      id: "1",
      name: "Devang Namdev",

      phone: "8269710784",
      email: "devangnamdev917gmail.com",
      referedby: true,
      registration: "04 Oct, 2024, 16:18 PM",
      ip: "106.209.176.177",
      address: "-",
      status: "Active",
      mpin: 1234,
      balance: 100,
      action: "",
      // <Button type="primary" className="py-4">
      //   <Dropdown
      //     menu={{
      //       items: [
      //         {
      //           key: "edit",
      //           icon: (
      //             <>
      //               <UserOutlined className="text-[15px] mx-1" />
      //             </>
      //           ),
      //           label: (
      //             <span
      //               className="font-semibold text-base"
      //               onClick={() => showDrawer(dataSource[0])}
      //             >
      //               Edit User
      //             </span>
      //           ), // Use the first user for this example
      //         },
      //       ],
      //     }}
      //     trigger={["click"]}
      //   >
      //     <a onClick={(e) => e.preventDefault()}>
      //       <Space>
      //         <h1 className="font-semibold text-base">Actions</h1>
      //         <DownOutlined className="text-white" />
      //       </Space>
      //     </a>
      //   </Dropdown>
      // </Button>
    },
  ];

  // localStorage.setItem("dataSource", JSON.stringify(dataArr)); // Add Data in LS -> ⭐

  const savedData = JSON.parse(localStorage.getItem("dataSource"));

  const dataSource = savedData.map((i) => ({
    id: i.id,
    name: i.name,
    phone: i.phone,
    email: i.email,
    referedby: i.referedby,
    registration: i.registration,
    ip: "106.209.176.177",
    address: "-",
    status: "Active",
    mpin: 1234,
    balance: 100,
    action: true,
  }));

  const getTextContent = (element) => {
    return element && element.props && element.props.children
      ? element.props.children
      : element;
  };

  const [open, setOpen] = useState(false);
  const [selectOption, setselectOption] = useState("All");

  const doc = new jsPDF();
  const getYearMonth = (date) => date.year() * 12 + date.month();

  // const handelSelectChange = (e) => {
  //   setselectOption(e.target.value);
  // };

  // const filterSelectData =
  //   selectOption && selectOption !== "All"
  //     ? dataSource.filter((item) => item.status === selectOption)
  //     : dataSource;

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

  const handleAddRefer = (record) => {
    if (!referId) {
      alert("Refer Id Mandatory");
    } else {
      const findUser = savedData.find((a) => a.id == record.id);
      const RestUser = savedData.filter((a) => a.id !== record.id);
      findUser.referedby = referId;
      RestUser.push(findUser);
      localStorage.setItem("dataSource", JSON.stringify(RestUser));
      setShowInput(false);
    }
  };

  return (
    <>
      {/* {users?.map((user) => (
        <div key={user.id} className="my-5">
          <h1 className="font-semibold text-lg">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.status}</p>
        </div>
      ))} */}

      <div>
        <Drawer width={520} closable={false} onClose={onClose} open={open}>
          <div className="mx-4">
            <div className="flex items-center justify-between my-3">
              <h1 className="text-2xl font-bold text-[#5a58eb]">Edit</h1>
              <Button onClick={onClose} className="cursor-pointer text-xl">
                Close
              </Button>
            </div>
            {selectedUser && (
              <div className="mt-10">
                <div className="my-5">
                  <h1 className="text-black text-base my-1 font-semibold">
                    Edit Name
                  </h1>
                  <Input
                    className="py-3 border border-gray-300 text-black text-xl"
                    value={selectedUser.name}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="my-5">
                  <h1 className="text-black text-base my-1 font-semibold">
                    Edit Email
                  </h1>
                  <Input
                    className="py-3 border border-gray-300 text-black text-xl"
                    value={selectedUser.email}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="my-5">
                  <h1 className="text-black text-base my-1 font-semibold">
                    Status
                  </h1>
                  <Input
                    className="py-3 border border-gray-300 text-black text-xl"
                    value={selectedUser.status}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        status: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="gap-4">
                  <Button
                    className="bg-[#CA3160] text-lg px-7 py-6 rounded-lg font-semibold text-white"
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                  <Button
                    className="text-lg px-7 py-6 rounded-lg font-semibold mx-5 border border-gray-600"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Drawer>

        <h1 className="text-3xl font-bold text-[#221ECF] my-4">User</h1>
        <div className="my-5">
          <Card className="rounded-2xl border border-gray-300 mb-14 shadow-md">
            <div className="flex flex-wrap justify-between">
              <div className="flex items-center bg-gray-50 border lg:py-[4px] lg:px-2 rounded-md mb-4 lg:mb-0">
                {/* <Button className=" py-5"> */}
                <Select
                  bordered={false}
                  defaultValue="name"
                  style={{ width: 100 }}
                  onChange={(value) => setselectField(value)}
                  className=" bg-gray-50 rounded-lg"
                >
                  <Option value="name">Name</Option>
                  <Option value="phone">Phone</Option>
                  <Option value="email">Email Id</Option>
                </Select>
                {/* </Button> */}

                <Input
                  className="border-l-2 mx-2 text-black text-lg font-semibold lg:w-52 "
                  bordered={false}
                  placeholder="Search here..."
                  allowClear
                  onChange={(e) => {
                    setSearched(e.target.value);
                  }}
                  style={{
                    color: "black",
                  }}
                />
                <FiSearch className="mx-2 lg:text-xl text-4xl  " />
              </div>

              <div className="flex  flex-wrap items-center gap-5">
                <StatusCheckFilter />

                {/* DatePicKerComponent */}
                <span className="">
                  <DatePickerComp />
                </span>

                {/* Filter_Drawer  ⭐*/}
                <UpdateUserDrawer />

                {/* Export TableComponent */}
                <ExportPdfTable />
              </div>
            </div>

            <Table
              id="user-table"
              name=""
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

export default UserList;
