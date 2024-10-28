import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";

const Chart2 = () => {
  const Data = [
    {
      loginuser: "22/10/2022",
      logoutuser: "01/02/2025",
    },
    { loginuser: "03/15/2022", logoutuser: "05/21/2025" },
    { loginuser: "08/09/2021", logoutuser: "12/30/2024" },
    { loginuser: "11/23/2023", logoutuser: "04/07/2026" },
    { loginuser: "05/05/2022", logoutuser: "09/15/2025" },
    { loginuser: "07/13/2020", logoutuser: "10/31/2023" },
    { loginuser: "02/28/2023", logoutuser: "06/20/2026" },
    { loginuser: "09/01/2019", logoutuser: "11/12/2023" },
    { loginuser: "04/10/2024", logoutuser: "08/25/2027" },
    { loginuser: "06/15/2021", logoutuser: "03/18/2024" },
    { loginuser: "01/10/2022", logoutuser: "09/27/2025" },
    {
      loginuser: "22/10/2022",
      logoutuser: "01/02/2025",
    },
    {
      loginuser: "03/15/2022",
      logoutuser: "05/21/2025",
    },
    {
      loginuser: "08/09/2021",
      logoutuser: "12/30/2024",
    },
    {
      loginuser: "11/23/2023",
      logoutuser: "04/07/2026",
    },
    {
      loginuser: "05/05/2022",
      logoutuser: "09/15/2025",
    },
    {
      loginuser: "07/13/2020",
      logoutuser: "10/31/2023",
    },
    {
      loginuser: "02/28/2023",
      logoutuser: "06/20/2026",
    },
    {
      loginuser: "02/28/2023",
      logoutuser: "06/20/2026",
    },
    {
      loginuser: "04/10/2024",
      logoutuser: "08/25/2027",
    },
    {
      loginuser: "06/15/2021",
      logoutuser: "03/18/2024",
    },
    {
      loginuser: "01/10/2022",
      logoutuser: "09/27/2025",
    },
  ];

  const chartRef = useRef();
  useEffect(() => {
    console.log({ chartRef });
  }, []);

  const config = {
    data: {
      type: "fetch",
      value:
        "https://gw.alipayobjects.com/os/bmw-prod/c48dbbb1-fccf-4a46-b68f-a3ddb4908b68.json",
    },
    xField: "date",
    yField: "value",
    slider: {
      x: {
        values: [0.1, 0.2],
      },
      y: {
        // type: 'linear',
        // range: [0.2, 0.8],
        /* 其他配置项 */
      },
    },
  };
  return <Column {...config} ref={chartRef} />;
};
export default Chart2;
