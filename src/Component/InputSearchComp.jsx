import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const InputSearchComp = ({ value, handelchange, }) => {

  // const columns = [
  //   {
  //     title: <h1 className="text-[#323197] text-lg font-bold">#id</h1>,
  //     dataIndex: "id",
  //     filteredValue: [searched],
  //     onFilter: (value, record) => {
  //       return String(record[selectField])
  //         .toLowerCase()
  //         .includes(value.toLowerCase());
  //       // String(record.email).toLowerCase().includes(value.toLowerCase()) ||
  //       // String(record.phone).toLowerCase().includes(value.toLowerCase())
  //     },
  //   },
  // ];
  return (
    <>
      <div className="">
        <Input
          className="border-l-2 mx-2 text-black text-lg font-semibold lg:w-52 "
          bordered={false}
          allowClear
          value={value}
          onChange={handelchange}
          placeholder={`Search here...`}
        />
        {/* <FiSearch className="mx-2 lg:text-xl text-4xl  " /> */}
      </div>
    </>
  );
};

export default InputSearchComp;
