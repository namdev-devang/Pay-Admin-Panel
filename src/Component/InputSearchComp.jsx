import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const InputSearchComp = () => {
  const [searched, setSearched] = useState("");
  const [selectField, setselectField] = useState("name");

  const columns = [
    {
      title: <h1 className="text-[#323197] text-lg font-bold">#id</h1>,
      dataIndex: "id",
      filteredValue: [searched],
      onFilter: (value, record) => {
        return String(record[selectField])
          .toLowerCase()
          .includes(value.toLowerCase());
        // String(record.email).toLowerCase().includes(value.toLowerCase()) ||
        // String(record.phone).toLowerCase().includes(value.toLowerCase())
      },
    },
  ];
  return (
    <>
      <div className="flex items-center bg-gray-50 border lg:py-[4px] lg:px-2 rounded-md mb-4 lg:mb-0">
        {/* <Button className=" py-5"> */}
        <Select
          bordered={false}
          defaultValue="name"
          style={{ width: 100 }}
          onChange={(value) => setselectField(value)}
          className=" bg-gray-50 rounded-lg"
        >
          <Option value="name">Name</Option>
          <Option value="phone">Phone</Option>
          <Option value="email">Email Id</Option>
        </Select>
        {/* </Button> */}

        <Input
          className="border-l-2 mx-2 text-black text-lg font-semibold lg:w-52 "
          bordered={false}
          placeholder="Search here..."
          allowClear
          onChange={(e) => {
            setSearched(e.target.value);
          }}
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
