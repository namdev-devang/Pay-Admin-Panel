import { Button, Card, Form, Input, message } from "antd";
import React, { useState } from "react";

const Nortification = () => {
  const [input, setinput] = useState("")
  const handelSumbit = () => {
    message.success("Send nortification all user")
    setinput('')
  }
  return (
    <>
      <h1 className="md:text-3xl text-2xl text-[#221ECF] font-bold my-2">
        Android Nortification
      </h1>
      <Card className="rounded-2xl shadow-md mb-20">
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
      </Card>
    </>
  );
};

export default Nortification;
