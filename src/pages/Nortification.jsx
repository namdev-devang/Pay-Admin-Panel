import { Button, Card, Drawer, Form, Input, message, Table } from "antd";
import React, { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import TableComp from "../Component/TableComp";

const Nortification = () => {
  const [form] = Form.useForm();
  const [input, setinput] = useState("")
  const [nortificationDrawer, setnortificationDrawer] = useState(false)

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

  const handleClear = () => {
    form.resetFields();
  }

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
                onClick={handleClear}
              >
                Clear
              </Button>
            </div>
          </Form>
        </div>
      </Drawer>

      <Table
        columns={columns}
        dataSource={dataSource}
      />
      {/* <Card className="rounded-2xl shadow-md mb-20">
        <Form
          onFinish={handelSumbit}
        >
          <Form.Item
            name={"title"}
            rules={[
              { type: 'string', required: true, message: 'Please input your title!' }
            ]}
          >
            <div className="">
              <h1 className="text-black text-base my-1 font-semibold">
                Entre Title
              </h1>
              <Input
                onChange={(e) => setinput(e.target.value)}
                className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
                placeholder="Entre title"
              />
            </div>
          </Form.Item>

          <div className="my-5">
            <h1 className="text-black text-base my-1 font-semibold">
              Select Nortification Topic
            </h1>
            <Form.Item
              name={"nortification topic"}
              rules={[
                { required: true, message: 'this field is required!' }
              ]}>
              <Input
                onChange={(e) => setinput(e.target.value)}
                className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
                placeholder="Affiliate Shopping"
              />
            </Form.Item>
          </div>

          <div className="my-5">
            <h1 className="text-black text-base my-1 font-semibold">Message</h1>
            <Form.Item
              name={"message"}
              rules={[
                { required: true, message: 'this field is required!' }
              ]}>
              <Input.TextArea
                onChange={(e) => setinput(e.target.value)}
                className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
                placeholder="Affiliate Shopping"
              />
            </Form.Item>

            <div className="my-5">
              <h1 className="text-black text-base my-1 font-semibold">
                Link
              </h1>
              <Form.Item
                name={"link"}
                rules={[
                  { required: true, message: 'this field is required!' }
                ]}>
                <Input
                  onChange={(e) => setinput(e.target.value)}
                  className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
                  placeholder="Entre link"
                />
              </Form.Item>
            </div>

            <h1 className="text-xl font-semibold text-[#221ECF]">OR</h1>

            <div className="my-5">
              <h1 className="text-black text-base my-1 font-semibold">
                Select Service
              </h1>
              <Form.Item
                name={"services"}
                rules={[
                  { required: true, message: 'this field is required!' }
                ]}>
                <Input
                  onChange={(e) => setinput(e.target.value)}
                  className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
                  placeholder="Select service"
                />
              </Form.Item>
            </div>

            <div className="my-5">
              <h1 className="text-black text-base my-1 font-semibold">
                File
              </h1>
              <Form.Item
                name={"file"}
                rules={[
                  { required: true, message: 'this field is required!' }
                ]}>
                <Input
                  onChange={(e) => setinput(e.target.value)}
                  className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
                  placeholder="Select service"
                />
              </Form.Item>
            </div>
          </div>

          <div className="flex">
            <Button htmlType="submit" className="uppercase bg-[#CA3160] text-lg px-7 py-6 rounded-lg font-semibold text-white ">
              Sumbit
            </Button>
            <Button className="uppercase text-lg px-7 py-6 rounded-lg font-semibold mx-5 border border-gray-600">
              Clear
            </Button>
          </div>
        </Form>
      </Card> */}
    </>
  );
};

export default Nortification;
