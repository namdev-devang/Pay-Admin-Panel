import { Button, Card, Drawer, Form, message, Select, Space, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Dropdown } from "antd";
import { CopyOutlined, DownOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { FiSearch } from "react-icons/fi";
import { Option } from "antd/es/mentions";
import { FaUserEdit } from "react-icons/fa";
import InputSearchComp from "../../Component/InputSearchComp";
import TableComp from "../../Component/TableComp";
import ClosableBtnDrawer from "../../Component/ClosableBtnDrawer";
import RefreshBtn from "../../Component/RefreshBtn";
import Heading from "../../Component/Heading";
import AddonBtn from "../../Component/AddonBtn";
import DrawerHeading from "../../Component/DrawerHeading";
import { useDispatch, useSelector } from "react-redux";
import { addServicelist, fetchServiceData } from "../../redux/actions/masterServiceAct/masterServiceAction";
import AddServiceFormDrawer from "../../Component/AddServiceFormDrawer";

const MasterServices = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [AddServicesDrawer, setAddServicesDrawer] = useState(false)
  const [searched, setSearched] = useState("");
  const [selectOption, setselectOption] = useState("All");
  const [selectField, setselectField] = useState("service");
  const [SelectedUser, setSelectedUser] = useState(null)
  const ServiceData = useSelector((state) => state?.rootreducer?.masterServiceReducer?.data);
  const loading = useSelector((state) => state?.rootreducer?.masterServiceReducer?.loading);
  console.log(loading)


  useEffect(() => {
    dispatch(fetchServiceData())
  }, [dispatch]);


  const onClose = () => {
    setOpen(false);
  };

  const handelSave = () => {
    const lsStoreData = JSON.parse(localStorage.getItem("datasource")) || []
    const updateUser = lsStoreData.map((item) => item?._id === SelectedUser?._id ? SelectedUser : item)
    localStorage.setItem("datasource", JSON.stringify(updateUser))
    setOpen(false)

  }

  const handelSumbit = async (values) => {
    try {
      const resultAction = await dispatch(addServicelist(values));

      if (addServicelist.fulfilled.match(resultAction)) {
        console.log("Service added successfully:", resultAction.payload);

        setAddServicesDrawer(false);
        form.resetFields();

        message.success(resultAction.payload.Remarks);
      } else {
        console.error("Failed to add service:", resultAction.payload);

        message.error(resultAction.payload.Remarks);
      }
    } catch (error) {
      console.error("Unexpected error:", error);

      message.error("An unexpected error occurred. Please try again.");
    }
  };

  // try {
  //   const existingData = JSON.parse(localStorage.getItem('datasource')) || [];
  //   const updatedData = [...existingData, values];

  //   localStorage.setItem('datasource', JSON.stringify(updatedData));
  //   message.success('Data submitted successfully!');
  //   form.resetFields();
  // } catch (error) {
  //   message.error('Failed to save data!');
  //   console.log(error, 'error')
  // }
  // // navigate('/users-list')
  // setAddServicesDrawer(false)


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
                message.success("Id copied!");
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


  // localStorage.setItem("datasource", JSON.stringify(ServiceData)); // Add Data in LS -> ⭐
  const displayData = selectOption && selectOption !== "All" ? dataSource.filter((item) => item.type === selectOption) : ServiceData;


  return (
    <>
      <div>
        {/* Edit Services */}
        <Drawer width={420} closable={false} onClose={onClose} open={open}>
          {
            SelectedUser && (
              <>
                <div className="flex items-center justify-between my-3">
                  <DrawerHeading title={"Edit Services"} />
                  <ClosableBtnDrawer onClick={onClose} />
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
              <DrawerHeading title={"Add_Services"} />
              {/* Reuse Component */}
              <ClosableBtnDrawer onClick={() => setAddServicesDrawer(false)} />
            </div>

            {/* Reuse */}
            <AddServiceFormDrawer
              form={form}
              onFinish={handelSumbit}
              onClick={() => { form.resetFields(); }}
            />
          </div>
        </Drawer>


        <div className="flex items-center justify-between">
          {/* Reuse Component */}
          <Heading title={"Services"} />

          {/* Reuse Component */}
          <AddonBtn onClick={() => setAddServicesDrawer(true)} title={"Add_Services"} />

        </div>

        <div className="my-5">
          <Card className="rounded-2xl border border-gray-300 mb-20 shadow-md ">
            <div className="flex items-center flex-wrap justify-between">
              <div className="flex items-center bg-gray-50 border lg:py-[4px] lg:px-2 rounded-md mb-4 lg:mb-0">
                {/* <Button className=" py-5"> */}
                <Select
                  bordered={false}
                  onChange={(val) => setselectField(val)}
                  defaultValue="service"
                  className=" bg-gray-50 rounded-lg focus:border-none"
                >
                  <Option value="service">Service</Option>
                  <Option value="status">Status</Option>
                  {/* <option value="email">Email Id</option> */}
                </Select>

                <InputSearchComp
                  handelchange={(e) => setSearched(e.target.value)}
                  placeholder={selectField}
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
                </Select>

                {/* Component Reuse */}
                <RefreshBtn title={"Refresh"} onClick={() => dispatch(fetchServiceData())} />
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
