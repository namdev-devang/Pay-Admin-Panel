import { Button } from 'antd'
import React from 'react'
import { CiExport } from 'react-icons/ci'

const ExportPdfBtn = ({ onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        className="bg-green-50 py-5 px-4 border border-green-500  "
      >
        <CiExport className="text-green-600 text-2xl" />
        <span className="text-green-600 text-base font-semibold">Export</span>
      </Button>
    </>
  )
}

export default ExportPdfBtn