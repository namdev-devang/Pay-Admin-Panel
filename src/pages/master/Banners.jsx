import { Button, Card, message, Select, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import Heading from "../../Component/Heading";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerData } from "../../redux/actions/bannerAct/bannerAct";
import TableComp from "../../Component/TableComp";
import RefreshBtn from "../../Component/RefreshBtn";
import ExportPdfBtn from "../../Component/ExportPdfBtn";
import DatePickerComp from "../../Component/DatePickerComp";
import InputSearchComp from "../../Component/InputSearchComp";
import { FiSearch } from "react-icons/fi";
import { Option } from "antd/es/mentions";
import { CopyOutlined } from "@ant-design/icons";

const Banners = () => {
  const [selectField, setselectField] = useState("Id");
  const [searched, setSearched] = useState("")

  const dispatch = useDispatch()
  const BannerData = useSelector((state) => state?.rootreducer?.bannerReducer?.data);
  const loading = useSelector((state) => state?.rootreducer?.bannerReducer?.loading)
  console.log(BannerData, "BannerData")

  useEffect(() => {
    dispatch(fetchBannerData())
  }, [dispatch]);

  const columns = [
    {
      title: <h1 className="text-[#323197] text-lg font-bold capitalize">#Id</h1>,
      dataIndex: "_id",
      filteredValue: [searched],
      onFilter: (value, record) => {
        return String(record[selectField])
          .toLowerCase()
          .includes(value.toLowerCase());
        // String(record.email).toLowerCase().includes(value.toLowerCase()) ||
        // String(record.phone).toLowerCase().includes(value.toLowerCase())
      },
      render: (text) => (
        <div>
          {text}
          <Tooltip title="Copy_Id">
            <Button
              icon={<CopyOutlined />}
              type="link"
              onClick={() => {
                navigator.clipboard.writeText(text);
                message.success("Id copied!");
              }}
            />
          </Tooltip>
        </div>
      ),
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold capitalize">section</h1>,
      dataIndex: "section",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold capitalize">image</h1>,
      dataIndex: "image",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold capitalize">type</h1>,
      dataIndex: "type",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold capitalize">link</h1>,
      dataIndex: "link",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold capitalize">createdAt</h1>,
      dataIndex: "createdAt",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold capitalize">updatedAt</h1>,
      dataIndex: "updatedAt",
    },
  ];


  return (
    <>
      <div className="flex items-center justify-between my-4">
        <Heading title={"Banner"} />
      </div>

      <Card>
        <div className="flex flex-wrap justify-between">
          <div className="flex items-center bg-gray-50 border lg:py-[4px] lg:px-2 rounded-md mb-4 lg:mb-0">
            {/* <Button className=" py-5"> */}
            <Select
              style={{
                width: 70
              }}
              bordered={false}
              onChange={(val) => setselectField(val)}
              defaultValue="Id"
              className=" bg-gray-50 rounded-lg focus:border-none"
            >
              <Option value="_id">Id</Option>
              <Option value="link">Link</Option>
            </Select>
            {/* </Button> */}

            <InputSearchComp
              handelchange={(e) => setSearched(e.target.value)}
              placeholder={selectField}
            />
            <FiSearch className="mx-2 lg:text-xl text-4xl  " />
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <span className="">
              <DatePickerComp />
            </span>

            <RefreshBtn title={"Refresh"} onClick={() => dispatch(fetchBannerData())} />
          </div>
        </div>

        <TableComp
          loading={loading}
          columns={columns}
          dataSource={BannerData || {}}
        />
      </Card>
    </>
  );
};

export default Banners;
