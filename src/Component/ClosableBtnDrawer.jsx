import { Button } from 'antd'
import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const ClosableBtnDrawer = ({ onClick }) => {
    return (
        <>
            <Button onClick={onClick} type="text" className="cursor-pointer text-xl">
                <RxCross2 />
            </Button>
        </>
    )
}

export default ClosableBtnDrawer