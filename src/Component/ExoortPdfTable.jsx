import { Button } from "antd";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React from "react";
import { CiExport } from "react-icons/ci";

const ExoortPdfTable = () => {
  const savedData = JSON.parse(localStorage.getItem("dataSource"));

  const dataSource = savedData?.map((i) => ({
    id: i.id,
    name: i.name,
    phone: i.phone,
    email: i.email,
    referedby: i.referedby,
    registration: i.registration,
    ip: "106.209.176.177",
    address: "-",
    status: "Active",
    mpin: 1234,
    balance: 100,
    action: true,
  }));

  const ExportPdf = () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
    

    autoTable(doc, {
      head: [
        [
          "ID",
          "Name",
          "Phone",
          "Registration",
          "ip",
          "address",
          "Email",
          "Status",
        ],
      ],

      body: dataSource.map((item) => [
        item.id.props?.children,
        item.name,
        item.phone,
        item.registration,
        item.ip,
        item.address,
        item.email,
        item.status,
      ]),
    });

    doc.save("User_List.pdf");
  };
  return (
    <>
      <Button
        onClick={ExportPdf}
        className="bg-green-50 py-5 px-4 border border-green-500"
      >
        <CiExport className="text-green-600 text-2xl" />
        <span className="text-green-600 text-base font-semibold">Export</span>
      </Button>
    </>
  );
};

export default ExoortPdfTable;
