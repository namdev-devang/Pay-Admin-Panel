import { Card, Table } from 'antd'
import React, { useEffect } from 'react'
import Heading from '../Component/Heading';
import TableComp from '../Component/TableComp';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAffilateStoreData } from '../redux/actions/AffilateStoreAct/AffilateStoreAct';
// const loading = useSelector((state) => state?.rootreducer?.bannerReducer?.loading)

const columns = [

  {
    title: <h1 className="text-[#323197] text-lg font-bold capitalize">image</h1>,
    dataIndex: "image",
  },
  {
    title: <h1 className="text-[#323197] text-lg font-bold capitalize">name</h1>,
    dataIndex: "name",
  },
  {
    title: <h1 className="text-[#323197] text-lg font-bold capitalize">description</h1>,
    dataIndex: "description",
  },
  {
    title: <h1 className="text-[#323197] text-lg font-bold capitalize">link</h1>,
    dataIndex: "link",
  },
  {
    title: <h1 className="text-[#323197] text-lg font-bold capitalize">Action</h1>,
    dataIndex: "Action",
  },
];

const AffiliateStore = () => {
  const dispatch = useDispatch()
  const affilatestoreData = useSelector((state) => state?.rootreducer?.affilateStoreReducer?.data);
  const loading = useSelector((state) => state?.rootreducer?.affilateStoreReducer?.loading);

  console.log(affilatestoreData, "affilatestoreData")


  useEffect(() => {
    dispatch(fetchAffilateStoreData())
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center justify-between my-4">
        <Heading title={"AffiliateStore"} />
      </div>

      <Card >
        <TableComp
          loading={loading}
          columns={columns}
          dataSource={affilatestoreData}
        />
      </Card>
    </>
  )
}

export default AffiliateStore