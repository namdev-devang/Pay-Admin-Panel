import { Line } from "@ant-design/plots";
import { Line, Line } from "@ant-design/plots/es/core/plots/line";
import React, { useState, useEffect } from "react";

const Charts = () => {
  const [data, setData] = useState([]);
  console.log(data, "data")
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://dummyjson.com/products"
    )
      .then((response) => response.json())
      .then((res) => setData(res.products))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "price",
    yField: "discountPercentage",
    colorField: "type",
    scale: { color: { range: ["#30BF78", "#F4664A", "#FAAD14"] } },
  
  };

  return <Line {...config} />;
};

export default Charts;






