import { Button, Drawer, Input } from 'antd'
import React from 'react'
import { RxCross1 } from 'react-icons/rx'

const EditUserDrawer = () => {
  const [open, setOpen] = useState(false);
    
    const onClose = () => {
        setOpen(false);
      };
  return (
    <>
         <Drawer width={520} closable={false} onClose={onClose} open={open}>
          <div className="mx-4">
            <div className="flex items-center justify-between my-3">
              <h1 className="text-2xl font-bold text-[#5a58eb]">
                Edit
              </h1>
              <RxCross1 onClick={onClose} className="cursor-pointer text-xl" />
            </div>
            <div className="mt-10">
              <div className="my-5">
                <h1 className="text-black text-base my-1 font-semibold">
                  Edit Name
                </h1>
                <Input
                  className="py-3 border border-gray-300 text-black text-xl"
                />
              </div>

              <div className="my-5">
                <h1 className="text-black text-base my-1 font-semibold">
                  Edit Email
                </h1>

                <Input
                  className="py-3 border border-gray-300 text-black text-xl"
                  placeholder="Email"
                />
              </div>

              <div className="my-5">
                <h1 className="text-black text-base my-1 font-semibold">
                  Status
                </h1>
              </div>
            </div>

            <div className="gap-4">
              <Button className="bg-[#CA3160] text-lg px-7 py-6 rounded-lg font-semibold text-white">
                Save
              </Button>
              <Button className="text-lg px-7 py-6 rounded-lg font-semibold mx-5 border border-gray-600">
                Cancel
              </Button>
            </div>
          </div>
        </Drawer>
    </>
  )
}

export default EditUserDrawer
