import { Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";

const StatusCheckFilter = (props) => {
  const { handelSelectChange, value } = props
  return (
    <div>
      <Select
        style={{
          width: 100,
          height: 45,
        }}
        defaultValue="All"
        className="w-1/2 border mx-4  font-semibold text-gray-600 rounded-lg focus:border bg-gray-50 "
        placeholder="Search Status..."
        value={value}
        onChange={handelSelectChange}
      >
        <Option value="All">All</Option>
        <Option value="Active">Active</Option>
        <Option value="Pending">Pending</Option>
        <Option value="Blocked">Blocked</Option>
      </Select>
    </div>
  );
};

export default StatusCheckFilter;
