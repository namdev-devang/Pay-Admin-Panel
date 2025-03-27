import { Button, Card, Drawer, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import TableComp from "../Component/TableComp";
import axios from "axios";
import { fetchNotifications } from "../redux/actions/nortificationAct/nortifictionAct";
import { useDispatch, useSelector } from "react-redux";

const Nortification = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [nortificationDrawer, setnortificationDrawer] = useState(false)

  const fetchNotificationsData = useSelector((state) => state?.rootreducer?.notificationReducer)
  console.log(fetchNotificationsData, "jsjsjs")

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);


  const columns = [

    {
      title: <h1 className="text-[#323197] text-lg font-bold">Title</h1>,
      dataIndex: "title",
    },

    {
      title: <h1 className="text-[#323197] text-lg font-bold">Content</h1>,
      dataIndex: "content",
    },
  ];

  const savedData = JSON.parse(localStorage.getItem("nortification_data"));

  const dataSource = savedData?.map((i) => ({
    title: i.title,
    content: i.content,
  }));

  const handelSumbit = (values) => {
    try {
      const existingData = JSON.parse(localStorage.getItem('nortification_data')) || [];
      const updatedData = [...existingData, values];

      localStorage.setItem('nortification_data', JSON.stringify(updatedData));
      message.success("Send nortification all user")
      form.resetFields();
    } catch (error) {
      message.error('Failed to save data!');
      console.log(error, 'error')
    }
    setnortificationDrawer(false)
  };


  return (
    <>
      <div className="flex items-center justify-between my-5">
        <h1 className="md:text-3xl text-2xl text-[#221ECF] font-bold my-2">
          Android Nortification
        </h1>
        <Button onClick={() => setnortificationDrawer(true)} type="" className="py-5 lg:text-base font-bold bg-[#221ECF] text-white"><IoAddCircleSharp className="text-xl" />Push_Nortification </Button>
      </div>

      <Drawer width={520} closable={false} onClose={() => setnortificationDrawer(false)} open={nortificationDrawer} >
        <div className="mx-4">
          <div className="flex items-center justify-between my-3">
            <h1 className="text-2xl font-bold text-[#5a58eb]">Push_Nortification</h1>
            <Button onClick={() => setnortificationDrawer(false)} type="text" className="cursor-pointer text-xl">
              <RxCross2 />
            </Button>
          </div>
          <Form
            className="my-10"
            form={form}
            onFinish={handelSumbit}
          >
            <Form.Item
              name="title"
              rules={[
                { type: 'string', required: true, message: 'Please input your title!' },
              ]}
            >
              <Input
                className="py-3 border border-gray-300 text-black text-lg font-bold"
                placeholder="Enter your title..."
              />
            </Form.Item>

            <Form.Item
              name="content"
              rules={[
                { type: 'string', required: true, message: 'Please input your content!' },
              ]}
            >
              <Input
                className="py-3 border border-gray-300 text-black text-lg font-bold"
                placeholder="Enter your content..."
              />
            </Form.Item>

            <div className="flex">
              <Button
                htmlType="submit"
                className="uppercase bg-[#CA3160] text-lg px-7 py-6 rounded-lg font-semibold text-white"
              >
                Submit
              </Button>
              <Button
                className="uppercase text-lg px-7 py-6 rounded-lg font-semibold mx-5 border border-gray-600"
                onClick={() => { form.resetFields() }}
              >
                Clear
              </Button>
            </div>
          </Form>
        </div>
      </Drawer>

      <Card>
        <TableComp
          columns={columns}
        // dataSource={fetchNotificationsData}
        />
      </Card>

    </>
  );
};

export default Nortification;
