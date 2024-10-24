import React from "react";
import { DatePicker, Space, Typography } from "antd";
const { RangePicker } = DatePicker;
const getYearMonth = (date) => date.year() * 12 + date.month();
// Disabled 6 months from the selected date
const disabled7DaysDate = (current, { from, type }) => {
  if (from) {
    const minDate = from.add(-6, "days");
    const maxDate = from.add(6, "days");
    switch (type) {
      case "year":
        return (
          current.year() < minDate.year() || current.year() > maxDate.year()
        );
      case "month":
        return (
          getYearMonth(current) < getYearMonth(minDate) ||
          getYearMonth(current) > getYearMonth(maxDate)
        );
      default:
        return Math.abs(current.diff(from, "days")) >= 7;
    }
  }
  return false;
};
const App = () => (
  <Space direction="vertical">
    {/* <Typography.Title level={5}>6 months range</Typography.Title> */}
    <RangePicker disabledDate={disabled7DaysDate}  className="p-2" />
  </Space>
);
export default App;
