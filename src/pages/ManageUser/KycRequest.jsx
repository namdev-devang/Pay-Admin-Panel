import { Table } from 'antd'
import React from 'react'

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

const KycRequest = () => {
  return (
    <>
      <div className="flex items-center justify-between my-5">
        <h1 className="md:text-3xl text-2xl text-[#221ECF] font-bold my-2">
          KycRequest  
        </h1>
      </div>

      <Table
        columns={columns}
      // dataSource={dataSource}
      />
    </>
  )
}

export default KycRequest

