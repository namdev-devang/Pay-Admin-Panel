import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const InputSearchComp = ({ value, handelchange, placeholder }) => {
  const [searched, setSearched] = useState("");
  const [selectField, setselectField] = useState("name");

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
      <div className="flex items-center bg-gray-50 border lg:py-[4px] lg:px-2 rounded-md mb-4 lg:mb-0">
        <Input
          className="border-l-2 mx-2 text-black text-lg font-semibold lg:w-52 "
          bordered={false}
          allowClear
          value={value}
          onChange={handelchange}
          placeholder={placeholder}
          style={{
            color: "black",
          }}
        />
        <FiSearch className="mx-2 lg:text-xl text-4xl  " />
      </div>
    </>
  );
};

export default InputSearchComp;
