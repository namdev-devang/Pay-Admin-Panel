import { Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";

const StatusCheckFilter = () => {
  const [selectOption, setselectOption] = useState("All");

  return (
    <div>
      <Select
        style={{
          width: 100,
          height: 45,
        }}
        defaultValue="All"
        className="text- border  font-semibold text-gray-600 rounded-lg focus:border bg-gray-50 "
        value={selectOption}
        onChange={(value) => setselectOption(value)}
        placeholder="Search Status..."
      >
        <Option value="All">All</Option>
        <Option value="Active">Active</Option>
        <Option value="DeActive">DeActive</Option>
        <Option value="Blocked">Blocked</Option>
      </Select>
    </div>
  );
};

export default StatusCheckFilter;
