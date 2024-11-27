import { Button, Card, Form, Input, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserAddform = ({ userAdd }) => {
    console.log(userAdd)
    const navigate = useNavigate()
    const [form] = Form.useForm();

    const handelSumbit = (values) => {
        try {
            const existingData = JSON.parse(localStorage.getItem('dataSource')) || [];
            const updatedData = [...existingData, values];

            localStorage.setItem('dataSource', JSON.stringify(updatedData));
            message.success('Data submitted successfully!');
            form.resetFields();
        } catch (error) {
            message.error('Failed to save data!');
            console.log(error, 'error')
        }
        navigate('/users-list')
    };

    const handleClear = () => {
        form.resetFields();
    };

    return (
        <>
            <Card className="rounded-2xl shadow-md mb-20">
                <Form
                    form={form}
                    onFinish={handelSumbit}
                >
                    <Form.Item
                        name="id"
                        rules={[
                            { type: 'string', required: true, message: 'Please input your id!' },
                        ]}
                    >
                        <Input
                            className="md:w-1/2 py-3 border border-gray-300 text-black text-lg font-bold"
                            placeholder="Enter id..."
                        />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        rules={[
                            { type: 'string', required: true, message: 'Please input your name!' },
                        ]}
                    >
                        <Input
                            className="md:w-1/2 py-3 border border-gray-300 text-black text-lg font-bold"
                            placeholder="Enter name..."
                        />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[
                            { required: true, message: 'Please input your phone!' },
                            {
                                validator: (_, value) => {
                                    if (!value || (value.length >= 4 && value.length <= 10)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Phone number must be between 4 and 10 characters!'));
                                },
                            },
                        ]}
                    >
                        <Input
                            className="md:w-1/2 py-3 border border-gray-300 text-black text-lg font-bold"
                            placeholder="Enter phone..."
                        />
                    </Form.Item>


                    <div className="my-5">
                        <Form.Item
                            name="email"
                            rules={[
                                { type: 'email', required: true, message: 'Please enter a valid email!' },
                            ]}
                        >
                            <Input
                                className="md:w-1/2 py-3 border border-gray-300 text-black text-lg font-bold"
                                placeholder="Enter your email..."
                            />
                        </Form.Item>

                        <Form.Item
                            name="registration"
                            rules={[
                                { required: true, message: 'Please input your registration!' },
                            ]}
                        >
                            <Input
                                className="md:w-1/2 py-3 border border-gray-300 text-black text-lg font-bold"
                                placeholder="Enter registration..."
                            />
                        </Form.Item>

                        <Form.Item
                            name="ip"
                            rules={[
                                { required: true, message: 'Please input your ip!' },
                            ]}
                        >
                            <Input
                                className="md:w-1/2 py-3 border border-gray-300 text-black text-lg font-bold"
                                placeholder="Enter your ip..."
                            />
                        </Form.Item>

                        <Form.Item
                            name="address"
                            rules={[
                                { required: true, message: 'Please input your address!' },
                            ]}
                        >
                            <Input
                                className="md:w-1/2 py-3 border border-gray-300 text-black text-lg font-bold"
                                placeholder="Enter your address..."
                            />
                        </Form.Item>

                        <Form.Item
                            name="status"
                            rules={[
                                { required: true, message: 'Please input your status!' },
                            ]}
                        >
                            <Input
                                className="md:w-1/2 py-3 border border-gray-300 text-black text-lg font-bold"
                                placeholder="Enter your status..."
                            />
                        </Form.Item>

                        <Form.Item
                            name="mpin"
                            rules={[
                                { required: true, message: 'Please input your MPIN!' },
                            ]}
                        >
                            <Input
                                className="md:w-1/2 py-3 border border-gray-300 text-black text-lg font-bold"
                                placeholder="Enter your MPIN..."
                            />
                        </Form.Item>

                        <Form.Item
                            name="balance"
                            rules={[
                                { required: true, message: 'Please input your balance!' },
                            ]}
                        >
                            <Input
                                className="md:w-1/2 py-3 border border-gray-300 text-black text-lg font-bold"
                                placeholder="Enter your balance..."
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
            </Card>
        </>
    );
};

export default UserAddform;
