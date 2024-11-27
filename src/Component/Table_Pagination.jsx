import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

const Table_Pagination = () => {
  const [dataScoure, setdataScoure] = useState([]);
  const [TotalPages, settotalPages] = useState(1);
  const [loading, setloading] = useState(false);
  console.log(dataScoure);
  
  useEffect(() => {
    fetchrecords();
  }, []);

  const columns = [
    {
      title: <h1 className="text-[#323197] text-lg font-bold">UserName</h1>,
      dataIndex: "id",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Name</h1>,
      dataIndex: "brand",
    },
    {
      title: (
        <h1 className="text-[#323197] text-lg font-bold">Referral Number</h1>
      ),
      dataIndex: "title",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">State</h1>,
      dataIndex: "title",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">City</h1>,
      dataIndex: "title",
    },
    {
      title: (
        <h1 className="text-[#323197] text-lg font-bold">
          Date of Registration
        </h1>
      ),
      dataIndex: ['meta', 'createdAt'], // ⭐⬅️
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Phone Number</h1>,
      dataIndex: "title",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Location</h1>,
      dataIndex: "completed",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold">Action</h1>,
      dataIndex: "completed",
    },
  ];

  const fetchrecords = () => {
    setloading(true);
    axios.get("https://dummyjson.com/products").then((response) => {
      // console.log(...res);
      setdataScoure(response?.data?.products);
      settotalPages(response.TotalPages);
      setloading(false);
      console.log(TotalPages);
    });
  };

  return (
    <>
      <div className="my-4">
        <Table
          className="overflow-x-scroll no-scrollbar bg-white  rounded-lg "
          loading={loading}
          columns={columns}
          dataSource={dataScoure}
          pagination={{
            pageSize: 10,
            total: TotalPages,
          }}
        ></Table>
      </div>
    </>
  );
};

export default Table_Pagination;
