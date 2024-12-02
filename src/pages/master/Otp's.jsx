import { Button, Card, Select, Table } from 'antd'
import { Option } from 'antd/es/mentions';
import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { GrRefresh } from 'react-icons/gr';
import InputSearchComp from '../../Component/InputSearchComp';

const columns = [

    {
        title: <h1 className="text-[#323197] text-lg font-bold">Name</h1>,
        dataIndex: "name",
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

];

const Otp = () => {
    return (
        <>
            <div className="flex items-center justify-between my-5">
                <h1 className="md:text-3xl text-2xl text-[#221ECF] font-bold my-2">
                    Otp's
                </h1>
            </div>

            <Card>
                <div className="sm:mt-0 flex items-center justify-between my-5">

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
                        // handelchange={(e) => setSearched(e.target.value)}
                        />
                        <FiSearch className="mx-2 lg:text-xl text-4xl  " />
                    </div>

                    <Button className="bg-blue-50 py-5 px-4 border border-blue-500">
                        <GrRefresh className="text-blue-600 text-2xl" />
                        <span className="text-blue-600 text-base font-semibold">
                            Refresh
                        </span>
                    </Button>
                </div>
                <Table
                    columns={columns}
                // dataSource={dataSource}
                />
            </Card>
        </>
    )
}

export default Otp
