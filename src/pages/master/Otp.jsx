import { Button, Card, Select, Table } from 'antd'
import { Option } from 'antd/es/mentions';
import React, { useEffect } from 'react'
import { FiSearch } from 'react-icons/fi';
import { GrRefresh } from 'react-icons/gr';
import InputSearchComp from '../../Component/InputSearchComp';
import Heading from '../../Component/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOtp } from '../../redux/actions/OtpAct/OtpAct';

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
    const dispatch = useDispatch();
    const fetchNotificationsData = useSelector((state) => state?.rootreducer?.fetchOtpReducer)
    console.log(fetchNotificationsData, "jsjsjs")

    useEffect(() => {
        dispatch(fetchOtp());
    }, [dispatch]);
    return (
        <>
            <div className="flex items-center justify-between my-4">
                <Heading title={"Otp's"} />
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
                // dataSource={}
                />
            </Card>
        </>
    )
}

export default Otp
