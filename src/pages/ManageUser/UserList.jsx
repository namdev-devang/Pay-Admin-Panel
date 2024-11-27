import {
  Button,
  Card,
  Divider,
  Drawer,
  Form,
  message,
  Modal,
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
import jsPDF from "jspdf";
import { Option } from "antd/es/mentions";
import DatePickerComp from "../../Component/DatePickerComp";
import ExportPdfTable from "../../Component/ExoortPdfTable";
import StatusCheckFilter from "../../Component/StatusCheckFilter";
import { FaUserEdit } from "react-icons/fa";
// import UpdateUserDrawer from "../Report/UpdateUserDrawer";
import { RxCross2 } from "react-icons/rx";
import InputSearchComp from "../../Component/InputSearchComp";
import TableComp from "../../Component/TableComp";
import { IoAddCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import UserAddform from "./UserAddform";




const UserList = () => {
  const navigate = useNavigate()
  const [searched, setSearched] = useState("");
  const [selectField, setselectField] = useState("name");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserUpdate] = useState("")
  const [selectOption, setselectOption] = useState("All")
  const [users, setUsers] = useState([]);
  const [showInput, setShowInput] = useState({
    id: "",
    status: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAdd, setuserAdd] = useState('Select')
  console.log(userAdd, "userAdd")
  const [referId, setReferId] = useState();
  // console.log(holdData)
  // console.log(selectedUser, "s");
  // console.log(users, "user");

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
      referedby: false,
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
      ip: "204.177.158.209",
      address: "-",
      status: "Active",
      mpin: 1234,
      balance: 100,
    },
  ];


  const savedData = JSON.parse(localStorage.getItem("dataSource"));

  const dataSource = savedData?.map((i) => ({
    id: i.id,
    name: i.name,
    phone: i.phone,
    email: i.email,
    referedby: i.referedby,
    registration: i.registration,
    ip: i.ip,
    address: i.address,
    status: i?.status,
    mpin: 1234,
    balance: i.balance,
    action: true,
  }));

  // localStorage.setItem("dataSource", JSON.stringify(dataArr)); // Add Data in LS -> ⭐

  const displayData = selectOption && selectOption !== "All" ? dataSource.filter((item) => item.status === selectOption) : dataSource;


  const onClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    const storedData = JSON.parse(localStorage.getItem("dataSource")) || [];

    const updatedUsers = storedData.map((user) =>
      user?.id === selectedUser?.id ? selectedUser : user
    );

    localStorage.setItem("dataSource", JSON.stringify(updatedUsers));
    // setUsers(updatedUsers);
    setOpen(false);
  };

  // const prabhu = "Mahadev"
  const [open, setOpen] = useState(false);

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

  const handelUserAdd = (value) => {
    // if (value.length) {
    //   setIsModalOpen(false)
    // }

    // setuserAdd(value)
    // console.log(userAdd)
  }

  return (
    <>
      {/* <Modal className="" width={400} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="p-3">
          <h1 className="text-2xl font-bold ">Please Select Customer Type</h1>
          <Divider />
          <Select
            onChange={handelUserAdd}
            defaultValue="Select"
            style={{
              width: 326,
              height: 40,
              fontSize: 100,
              fontWeight: 200
            }}
            className="bg-gray-50 rounded-lg mx-auto "
          >
            <Option style={{ fontWeight: 900, fontSize: 15 }} disabled >Select</Option>
            <Option style={{ fontWeight: 900, fontSize: 15 }} value="Master Distributor">Master Distributor</Option>
            <Option style={{ fontWeight: 900, fontSize: 15 }} value="Distributor">Distributor</Option>
            <Option style={{ fontWeight: 900, fontSize: 15 }} value="Retailer">Retailer</Option>
          </Select>
        </div>

      </Modal> */}

      <div>
        <Drawer width={520} closable={false} onClose={onClose} open={open}>
          <div className="mx-4">
            <div className="flex items-center justify-between my-3">
              <h1 className="text-2xl font-bold text-[#5a58eb]">Edit</h1>
              <Button type="text" onClick={onClose} className="cursor-pointer text-xl">
                <RxCross2 />
              </Button>
            </div>
            {selectedUser && (
              <Form
                autoComplete="off"
                onFinish={handleSave}
              >
                <div className="mt-10">
                  <div className="my-5">
                    {/* <h1 className="text-black text-base my-1 font-semibold">
                      Edit Name
                    </h1> */}
                    {/* 
                    <Form.Item
                      name="name"
                      rules={[{ required: true, message: 'this field is required!' }]}
                    > */}
                    <Input
                      className="py-3 border border-gray-300 text-black text-xl"
                      value={selectedUser.name}
                      placeholder="Entre your name..."
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          name: e.target.value,
                        })
                      }
                    />
                    {/* </Form.Item> */}
                  </div>

                  <div className="my-5">
                    {/* <h1 className="text-black text-base my-1 font-semibold">
                      Edit Email
                    </h1> */}
                    {/* <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please input your email!" },
                        { type: "email", message: "Please enter a valid email!" },
                      ]}
                    > */}
                    <Input
                      className="py-3 border border-gray-300 text-black text-xl"
                      value={selectedUser.email}
                      placeholder="Entre your email address..."
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          email: e.target.value,
                        })
                      }
                    />
                    {/* </Form.Item> */}
                  </div>

                  <div className="my-5">
                    {/* <h1 className="text-black text-base my-1 font-semibold">
                      Status
                    </h1> */}
                    <Select
                      className="w-full  border-gray-300 text-black rounded-md"
                      style={{
                        height: 52,
                      }}
                      value={selectedUserUpdate.length === 0 ? selectedUser?.status : selectedUserUpdate}
                      onChange={(val) => setSelectedUser({
                        ...selectedUser,
                        status: val,
                      })
                      }
                    >
                      <Option
                        value="Active">Active</Option>
                      <Option
                        value="Pending">Pending</Option>
                      <Option
                        value="Blocked">Blocked</Option>
                    </Select>
                  </div>

                  <div className="gap-4">
                    <Button
                      htmlType="submit"
                      className="bg-[#CA3160] text-lg px-7 py-6 rounded-lg font-semibold text-white"
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
              </Form>
            )}
          </div>
        </Drawer>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#221ECF] my-4">User</h1>
          <Button onClick={() => navigate('/users-addform')} type="" className="py-5 lg:text-base font-bold">Add_User<IoAddCircleSharp className="text-xl" /></Button>
        </div>
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

                <InputSearchComp
                  handelchange={(e) => setSearched(e.target.value)}
                />
                <FiSearch className="mx-2 lg:text-xl text-4xl  " />
              </div>

              <div className="flex  flex-wrap items-center gap-5">
                <StatusCheckFilter
                  value={selectOption}
                  handelSelectChange={(value) => setselectOption(value)}
                />

                {/* DatePicKerComponent */}

                <span className="">
                  <DatePickerComp />
                </span>


                {/* Export TableComponent */}
                <ExportPdfTable />
              </div>
            </div>

            {/* Component Reuse in the Component folder */}
            <TableComp
              columns={columns}
              dataSource={displayData}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default UserList;
