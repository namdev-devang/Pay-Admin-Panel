import { Card, Table } from 'antd'
import React, { useEffect } from 'react'
import TableComp from '../Component/TableComp';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIpAddressData } from '../redux/actions/IpAddressAct/IpAddressAct';

const columns = [

  {
    title: <h1 className="text-[#323197] text-lg font-bold capitalize">iP</h1>,
    dataIndex: "ip",
  },
  {
    title: <h1 className="text-[#323197] text-lg font-bold capitalize">name</h1>,
    dataIndex: "name",
  },
  {
    title: <h1 className="text-[#323197] text-lg font-bold capitalize">createdAt</h1>,
    dataIndex: "createdAt",
  },
  {
    title: <h1 className="text-[#323197] text-lg font-bold capitalize">updatedAt</h1>,
    dataIndex: "updatedAt",
  },
];

const IPAddress = () => {
  const dispatch = useDispatch()
  const IpAddressData = useSelector((state) => state?.rootreducer?.ipAddressReducer?.data);
  console.log(IpAddressData, "IpAddressData")
  console.log(IpAddressData, "IpAddressData")

  useEffect(() => {
    dispatch(fetchIpAddressData())
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-between my-5">
        <h1 className="md:text-3xl text-2xl text-[#221ECF] font-bold my-2">
          IPAddress
        </h1>
      </div>

      <Card>
        <TableComp
          columns={columns}
          dataSource={IpAddressData}
        />
      </Card>
    </>
  )
}

export default IPAddress
