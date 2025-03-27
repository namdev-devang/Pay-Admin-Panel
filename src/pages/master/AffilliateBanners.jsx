import { Card, Select, Table } from 'antd'
import React, { useEffect } from 'react'
import Heading from '../../Component/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBannerData } from '../../redux/actions/bannerAct/bannerAct';
import TableComp from '../../Component/TableComp';
import { Option } from 'antd/es/mentions';
import InputSearchComp from '../../Component/InputSearchComp';
import { FiSearch } from 'react-icons/fi';
import RefreshBtn from '../../Component/RefreshBtn';

const AffilliateBanners = () => {
  const dispatch = useDispatch()
  const affilateBannerData = useSelector((state) => state?.rootreducer?.bannerReducer?.data);
  const loading = useSelector((state) => state?.rootreducer?.bannerReducer?.loading);
  console.log(affilateBannerData, "affilateBannerData")

  useEffect(() => {
    dispatch(fetchBannerData())
  }, [dispatch]);

  const columns = [

    {
      title: <h1 className="text-[#323197] text-lg font-bold capitalize">image</h1>,
      dataIndex: "image",
    },
    {
      title: <h1 className="text-[#323197] text-lg font-bold capitalize">section</h1>,
      dataIndex: "section",
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
        <Heading title={"AffilliateBanners"} />
      </div>

      <Card>
        <div className="flex items-center flex-wrap justify-between">
          <div className="flex items-center bg-gray-50 border lg:py-[4px] lg:px-2 rounded-md mb-4 lg:mb-0">
            {/* <Button className=" py-5"> */}
            <Select
              bordered={false}
              // onChange={(val) => setselectField(val)}
              defaultValue="service"
              className=" bg-gray-50 rounded-lg focus:border-none"
            >
              <Option value="service">Service</Option>
              <Option value="status">Status</Option>
              {/* <option value="email">Email Id</option> */}
            </Select>

            <InputSearchComp
            // handelchange={(e) => setSearched(e.target.value)}
            // placeholder={selectField}
            />

            {/* </Space> */}
            <FiSearch className="mx-2 lg:text-xl text-4xl  " />
          </div>

          <div className="sm:mt-0 flex items-center ">
            <Select
              style={{
                width: 100,
                height: 45,
              }}
              defaultValue="All"
              className="w-1/2 border mx-4  font-semibold text-gray-600 rounded-lg focus:border bg-gray-50 "
              placeholder="Search Status..."
            // value={selectOption}
            // onChange={(value) => setselectOption(value)}
            >
              <Option value="All">All</Option>
              <Option value="Cashback">Cashback</Option>
              <Option value="GCB">GCB</Option>
            </Select>

            {/* Component Reuse */}
            <RefreshBtn title={"Refresh"} />
          </div>
        </div>

        <TableComp
          loading={loading}
          columns={columns}
          dataSource={affilateBannerData}
        />
      </Card>
    </>

  )
}

export default AffilliateBanners
