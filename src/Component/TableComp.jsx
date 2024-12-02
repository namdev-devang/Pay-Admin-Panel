import { Table } from 'antd'
import React from 'react'

const TableComp = (props) => {
    const { columns, dataSource, loading } = props
    return (
        <>

            <Table
                id="user-table"
                name=""
                className="overflow-x-scroll no-scrollbar bg-white  rounded-lg my-5"
                loading={loading}
                columns={columns}
                dataSource={dataSource}
                pagination={{
                    pageSize: 10,
                    // total: TotalPages,
                }}
            ></Table>
        </>
    )
}

export default TableComp
