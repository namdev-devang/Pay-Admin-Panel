import React, { useState } from "react";
import { Button, Drawer, Input, Select } from "antd";
import { CiFilter } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { GrUpdate } from "react-icons/gr";

const UpdateUserDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      
      <Drawer width={520} closable={false} onClose={onClose} open={open}>
        <div className="mx-4">
          <div className="flex items-center justify-between my-3">
            <h1 className="text-2xl font-bold text-[#5a58eb]">
              Reply to Select Pending Recharge
            </h1>
            <RxCross1 onClick={onClose} className="cursor-pointer text-xl" />
          </div>
          <div className="mt-10">
            <div className="my-5">
              <h1 className="text-black text-base my-1 font-semibold">Reply</h1>
              <Input
                className="py-3 border border-gray-300 text-black  text-xl"
                placeholder="Username"
              />
            </div>

            <div className="my-5">
              <h1 className="text-black text-base my-1 font-semibold">
                Status
              </h1>
              {/* <Input className="py-3 border border-gray-300 text-black  text-xl" placeholder="Affiliate Shopping" /> */}
              <Select
                className="w-full"
                defaultValue="lucy"
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: <span className="py-5">Lucy</span>,
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </div>
          </div>
          <div className="gap-4">
            <Button className="bg-[#CA3160] text-lg px-7 py-6 rounded-lg font-semibold text-white ">
              Reply
            </Button>
            <Button className="text-lg px-7 py-6 rounded-lg font-semibold mx-5 border border-gray-600">
              Reset
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default UpdateUserDrawer;
