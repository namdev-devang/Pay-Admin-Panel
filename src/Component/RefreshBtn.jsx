import { Button } from 'antd'
import React from 'react'
import { GrRefresh } from 'react-icons/gr'

const RefreshBtn = ({ onClick, title }) => {
    return (
        <>
            <Button onClick={onClick} className="bg-blue-50 py-5 px-4 border border-blue-500">
                <GrRefresh className="text-blue-600 text-2xl" />
                <span className="text-blue-600 text-base font-semibold">{title}</span>
            </Button>
        </>
    )
}

export default RefreshBtn;