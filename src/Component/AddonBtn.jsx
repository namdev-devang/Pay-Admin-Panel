import { Button } from 'antd'
import React from 'react'
import { IoAddCircleSharp } from 'react-icons/io5'

const AddonBtn = ({ onClick, title }) => {
    return (
        <>
            <Button onClick={onClick} className="py-5 lg:text-base font-bold uppercase"><IoAddCircleSharp className="text-xl" />{title}</Button>
        </>
    )
}

export default AddonBtn;