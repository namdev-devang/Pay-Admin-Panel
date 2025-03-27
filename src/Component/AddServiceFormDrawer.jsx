import { ToTopOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, message } from "antd";
import React, { useState } from "react";

const AddServiceFormDrawer = ({ form, onFinish, onClick }) => {
    const [fileList, setFileList] = useState([]);
    console.log(fileList, "fileList")
    const handleUploadChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const beforeUpload = (file) => {
        const isImage = file.type.startsWith("image/");
        if (!isImage) {
            message.error("You can only upload image files!");
        }
        const isSmallEnough = file.size / 1024 / 1024 < 2; // 2 MB limit
        if (!isSmallEnough) {
            message.error("Image must be smaller than 2MB!");
        }
        return isImage && isSmallEnough;
    };

    return (
        <Form className="my-10" form={form} onFinish={onFinish}>
            <Form.Item
                name="icon"
                valuePropName="fileList"
                getValueFromEvent={(e) => e && e.fileList}
                rules={[{ required: true, message: "Please upload an icon!" }]}
            >
                <Upload
                    // listType="picture"
                    fileList={fileList}
                    beforeUpload={beforeUpload}
                    onChange={handleUploadChange}
                    maxCount={1} // Limit to one file
                >
                    {fileList.length < 1 && (
                        <Button
                            type="dashed"
                            className="py-3 border border-gray-300 text-black text-lg font-bold"
                            icon={<ToTopOutlined />}
                        >
                            <span className="text-xs">Click to Upload</span>
                        </Button>
                    )}
                </Upload>
            </Form.Item>

            <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input the name!" }]}
            >
                <Input
                    className="py-3 border border-gray-300 text-black text-lg font-bold"
                    placeholder="Enter name..."
                />
            </Form.Item>

            <Form.Item
                name="section"
                rules={[{ required: true, message: "Please input the section!" }]}
            >
                <Input
                    className="py-3 border border-gray-300 text-black text-lg font-bold"
                    placeholder="Enter section..."
                />
            </Form.Item>

            <Form.Item
                name="route"
                rules={[{ required: true, message: "Please input the route!" }]}
            >
                <Input
                    className="py-3 border border-gray-300 text-black text-lg font-bold"
                    placeholder="Enter route..."
                />
            </Form.Item>

            <Form.Item
                name="type"
                rules={[{ required: true, message: "Please input the type!" }]}
            >
                <Input
                    className="py-3 border border-gray-300 text-black text-lg font-bold"
                    placeholder="Enter type..."
                />
            </Form.Item>

            <Form.Item
                name="percent"
                rules={[{ required: true, message: "Please input the percent!" }]}
            >
                <Input
                    className="py-3 border border-gray-300 text-black text-lg font-bold"
                    placeholder="Enter percent..."
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
                    onClick={onClick}
                >
                    Clear
                </Button>
            </div>
        </Form>
    );
};

export default AddServiceFormDrawer;