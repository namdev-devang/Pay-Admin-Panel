import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const InputSearchComp = ({ value, handelchange, placeholder }) => {

  return (
    <>
      <div className="">
        <Input
          className="border-l-2 mx-2 text-black text-lg font-semibold lg:w-52 "
          bordered={false}
          allowClear
          value={value}
          onChange={handelchange}
          placeholder={`Search by ${placeholder}... `}
        />
        {/* <FiSearch className="mx-2 lg:text-xl text-4xl  " /> */}
      </div>
    </>
  );
};

export default InputSearchComp;
