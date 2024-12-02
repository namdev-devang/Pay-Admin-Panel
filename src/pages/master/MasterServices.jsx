import { Button, Card, Drawer, Form, message, Select, Space, Table, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Dropdown } from "antd";
import { CopyOutlined, DownOutlined } from "@ant-design/icons";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { BiCross } from "react-icons/bi";
import { BsCrosshair } from "react-icons/bs";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { Option } from "antd/es/mentions";
import { FaUserEdit } from "react-icons/fa";
import { GrRefresh, GrUpdate } from "react-icons/gr";
import CryptoJS from "crypto-js";
import InputSearchComp from "../../Component/InputSearchComp";
import StatusCheckFilter from "../../Component/StatusCheckFilter";
import TableComp from "../../Component/TableComp";
import axios from "axios";
import { render } from "@react-pdf/renderer";
import { IoAddCircleSharp } from "react-icons/io5";

const MasterServices = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const [AddServicesDrawer, setAddServicesDrawer] = useState(false)
  const [searched, setSearched] = useState("");
  const [selectOption, setselectOption] = useState("All");
  console.log(selectOption, "selectOption")
  const [selectField, setselectField] = useState("service");
  const [loading, setloading] = useState(false);
  const [SelectUpdateStatus] = useState("")
  console.log(SelectUpdateStatus, 'sksksk',)
  const [SelectedUser, setSelectedUser] = useState(null)
  console.log(SelectedUser, "SelectedUser")
  const [user, setUser] = useState([])
  console.log(user, 'users')
  console.log(SelectedUser, "SelectedUser")


  useEffect(() => {
    fetchData();
  }, []);

  const handelSelectChange = (e) => {
    setselectOption(e.target.value);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handelSave = () => {
    const lsStoreData = JSON.parse(localStorage.getItem("datasource")) || []

    const updateUser = lsStoreData.map((item) => item?._id === SelectedUser?._id ? SelectedUser : item)
    localStorage.setItem("datasource", JSON.stringify(updateUser))
    // setUser(updateUser)
    setOpen(false)

  }

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };

  const handelSumbit = (values) => {
    try {
      const existingData = JSON.parse(localStorage.getItem('datasource')) || [];
      const updatedData = [...existingData, values];

      localStorage.setItem('datasource', JSON.stringify(updatedData));
      message.success('Data submitted successfully!');
      form.resetFields();
    } catch (error) {
      message.error('Failed to save data!');
      console.log(error, 'error')
    }
    // navigate('/users-list')
    setAddServicesDrawer(false)
  };

  const handleClear = () => {
    form.resetFields();
  };

  const columns = [
    {
      title: <h1 className="text-[#323197] text-lg font-bold">ID</h1>,
      dataIndex: "_id",
      filteredValue: [searched],
      onFilter: (value, record) => {
        return String(record[selectField])
          .toLowerCase()
          .includes(value.toLowerCase());
        // String(record.email).toLowerCase().includes(value.toLowerCase()) ||
        // String(record.phone).toLowerCase().includes(value.toLowerCase())
      },
      render: (text) => (
        <div>
          {text}
          <Tooltip title="Copy_Id">
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
      title: <h1 className="text-[#323197] text-lg font-bold">Image</h1>,
      dataIndex: `icons`,
      render: (img) => (
        <div>
          {img}
          <img className="w-14" src={`https://ik.imagekit.io/a069uoh9k/download%20(2).png?updatedAt=1725534824049`} alt="" />
        </div>
      ),
    },
    {
      title: (
        <h1 className="text-[#323197] text-lg font-bold">
          Name
        </h1>
      ),
      dataIndex: "name",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Section</h1>,
      dataIndex: "section",
    },
    {
      title: (
        <h1 className="text-[#323197] text-lg font-bold">
          Route
        </h1>
      ),
      dataIndex: "route",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Offer</h1>,
      dataIndex: "type",
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
                            setSelectedUser(record)
                            setOpen(true)
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

  const savedData = JSON.parse(localStorage.getItem("datasource"))


  const dataSource = savedData?.map((i) => ({
    _id: i._id,
    name: i.name,
    section: i.section,
    route: i.route,
    type: i.type,
    action: true,
  }));

  const dataArr = [
    {
      srno: 1,
      service: "Digital Marketing",
      debit: "10.00",
      repurchase: "5",
      credit: "12.50",
      primepoint: 3.50,
      status: "Active",
    },
    {
      srno: 2,
      service: "Web Hosting",
      debit: 20.00,
      repurchase: 8,
      credit: 25.00,
      primepoint: 45.00,
      status: "Pending",
    },
    {
      srno: 3,
      service: "SEO Optimization",
      debit: 15.00,
      repurchase: 2,
      credit: 18.00,
      primepoint: 15.00,
      status: "Blocked",
    },
    {
      srno: 4,
      service: "Cloud Services",
      debit: 5.00,
      repurchase: 1,
      credit: 7.00,
      primepoint: 20.00,
      status: "Active",
    },
  ];

  const decryptFunc = (data) => {
    const decryptData = CryptoJS.AES.decrypt(data.Data, "kanhape");
    return JSON.parse(decryptData.toString(CryptoJS.enc.Utf8));
  };

  const fetchData = async () => {
    try {
      setloading(true)
      const response = await axios.get(
        "https://development-api.payzo.in/api/service/list"
      );
      const dec = decryptFunc(response.data);
      setData(dec);
      setloading(false);
    } catch (error) {
      // setError(error);
      setloading(false);
      console.log(error, "eror")
    }
  };
  console.log(data, "data");

  // localStorage.setItem("datasource", JSON.stringify(data)); // Add Data in LS -> ⭐
  const displayData = selectOption && selectOption !== "All" ? dataSource.filter((item) => item.type === selectOption) : dataSource;

  console.log("Selected Option:", selectOption);
  // console.log("Filtered Data:", filterSelectData);


  return (
    <>
      <div>
        {/* Edit Services */}
        <Drawer width={420} closable={false} onClose={onClose} open={open}>
          {
            SelectedUser && (
              <>
                <div className="flex items-center justify-between my-3">
                  <h1 className="text-2xl font-bold text-[#5a58eb]">Edit Services</h1>
                  <RxCross1 onClick={onClose} className="cursor-pointer text-xl" />
                </div>

                <Form
                  autoComplete="off"
                  onFinish={handelSave}
                >
                  <div className="mt-10">
                    <div className="my-5">
                      <Input
                        value={SelectedUser?.name}
                        onChange={(e) => setSelectedUser({
                          ...SelectedUser,
                          name: e.target.value
                        })
                        }
                        className="py-3 border border-gray-300 text-black  text-xl"
                        placeholder="Entre services..."
                      />
                    </div>

                    <div className="my-5">
                      <h1 className="text-black text-base my-1 font-semibold">
                        Status
                      </h1>
                      <Input
                        value={SelectedUser?.type}
                        onChange={(e) => setSelectedUser({
                          ...SelectedUser,
                          type: e.target.value
                        })
                        }
                        className="py-3 border border-gray-300 text-black  text-xl"
                        placeholder="Affiliate Shopping"
                      />
                      {/* <Select
                    style={{
                      height: 52,
                    }}
                    className="w-full  border-gray-300 text-black rounded-md"
                    // bordered={false}
                    value={SelectUpdateStatus.length === 0 ? SelectedUser?.offer : SelectUpdateStatus}
                    onChange={(val) => setSelectedUser({
                      ...SelectedUser,
                      status: val
                    })}
                  // onChange={(e) => setSelectedUser({
                  //   ...SelectedUser,
                  //   status: e.target.value
                  // })}
                  >
                    <Option
                      value="Active">Active</Option>
                    <Option
                      value="Pending">Pending</Option>
                    <Option
                      value="Blocked">Blocked</Option>
                  </Select> */}
                    </div>

                  </div>
                  <div className="">
                    <Button
                      htmlType="submit"
                      className="bg-[#CA3160] text-lg px-7 py-5 text-white font-semibold">UPDATE</Button>
                    <Button onClick={() => setOpen(false)} className="text-lg px-7 py-5 mx-4 uppercase ">
                      Cancel
                    </Button>
                  </div>
                </Form>
              </>
            )}
        </Drawer>

        {/* Add Services */}
        <Drawer width={520} closable={false} onClose={() => setAddServicesDrawer(false)} open={AddServicesDrawer} >
          <div className="mx-4">
            <div className="flex items-center justify-between my-3">
              <h1 className="text-2xl font-bold text-[#5a58eb]">Add_Services</h1>
              <Button onClick={() => setAddServicesDrawer(false)} type="text" className="cursor-pointer text-xl">
                <RxCross2 />
              </Button>
            </div>

            <Form
              className="my-10"
              form={form}
              onFinish={handelSumbit}
            >
              <Form.Item
                name="_id"
                rules={[
                  { type: 'string', required: true, message: 'Please input your id!' },
                ]}
              >
                <Input
                  className="py-3 border border-gray-300 text-black text-lg font-bold"
                  placeholder="Enter id..."
                />
              </Form.Item>

              <Form.Item
                name="image"
                rules={[
                  { type: 'string', required: true, message: 'Please input your image url!' },
                ]}
              >
                <Input
                  className="py-3 border border-gray-300 text-black text-lg font-bold"
                  placeholder="Enter image url..."
                />
              </Form.Item>

              <Form.Item
                name="name"
                rules={[
                  { required: true, message: 'Please input your name!' },
                  // {
                  //   validator: (_, value) => {
                  //     if (!value || (value.length >= 4 && value.length <= 10)) {
                  //       return Promise.resolve();
                  //     }
                  //     return Promise.reject(new Error('Phone number must be between 4 and 10 characters!'));
                  //   },
                  // },
                ]}
              >
                <Input
                  className="py-3 border border-gray-300 text-black text-lg font-bold"
                  placeholder="Enter name..."
                />
              </Form.Item>


              <div className="my-5">
                <Form.Item
                  name="section"
                  rules={[
                    { type: 'section', required: true, message: 'Please enter a valid section!' },
                  ]}
                >
                  <Input
                    className="py-3 border border-gray-300 text-black text-lg font-bold"
                    placeholder="Enter your section..."
                  />
                </Form.Item>

                <Form.Item
                  name="route"
                  rules={[
                    { required: true, message: 'Please input your route!' },
                  ]}
                >
                  <Input
                    className="py-3 border border-gray-300 text-black text-lg font-bold"
                    placeholder="Enter route..."
                  />
                </Form.Item>

                <Form.Item
                  name="type"
                  rules={[
                    { required: true, message: 'Please input your offer!' },
                  ]}
                >
                  <Input
                    className="py-3 border border-gray-300 text-black text-lg font-bold"
                    placeholder="Enter your offer..."
                  />
                </Form.Item>

              </div>

              <div className="flex">
                <Button
                  htmlType="submit"
                  className="uppercase bg-[#CA3160] text-lg px-7 py-6 rounded-lg font-semibold text-white"
                >
                  Submit
                </Button>
                <Button
                  className="uppercase text-lg px-7 py-6 rounded-lg font-semibold mx-5 border border-gray-600"
                  onClick={handleClear}
                >
                  Clear
                </Button>
              </div>
            </Form>
          </div>
        </Drawer>

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#221ECF] my-4 ">Services</h1>
          <Button onClick={() => setAddServicesDrawer(true)} className="py-5 lg:text-base font-bold uppercase"><IoAddCircleSharp className="text-xl" /> Add_Services</Button>
        </div>
        <div className="my-5">
          <Card className="rounded-2xl border border-gray-300 mb-20 shadow-md ">
            <div className="flex items-center flex-wrap justify-between">

              <div className="flex items-center bg-gray-50 border lg:py-[4px] lg:px-2 rounded-md mb-4 lg:mb-0">
                {/* <Button className=" py-5"> */}
                <Select
                  bordered={false}
                  defaultValue="service"
                  className=" bg-gray-50 rounded-lg focus:border-none"
                >
                  <Option value="service">service</Option>
                  <Option value="status">Status</Option>
                  {/* <option value="email">Email Id</option> */}
                </Select>

                <InputSearchComp
                  handelchange={(e) => setSearched(e.target.value)}
                />
                {/* </Space> */}
                <FiSearch className="mx-2 lg:text-xl text-4xl  " />
              </div>

              <div className="sm:mt-0 flex items-center ">
                <Select
                  style={{
                    width: 100,
                    height: 45,
                  }}
                  defaultValue="All"
                  className="w-1/2 border mx-4  font-semibold text-gray-600 rounded-lg focus:border bg-gray-50 "
                  placeholder="Search Status..."
                  value={selectOption}
                  onChange={(value) => setselectOption(value)}
                >
                  <Option value="All">All</Option>
                  <Option value="Cashback">Cashback</Option>
                  <Option value="GCB">GCB</Option>
                  {/* <Option value="Blocked">Blocked</Option> */}
                </Select>
                <Button onClick={() => fetchData()} className="bg-blue-50 py-5 px-4 border border-blue-500">
                  <GrRefresh className="text-blue-600 text-2xl" />
                  <span className="text-blue-600 text-base font-semibold">
                    Refresh
                  </span>
                </Button>
              </div>
            </div>

            {/* Component Reuse in the Component folder */}
            <TableComp
              loading={loading}
              columns={columns}
              dataSource={displayData}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default MasterServices;
