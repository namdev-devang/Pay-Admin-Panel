import { Button, Card, Input } from "antd";
import React from "react";

const Nortification = () => {
  return (
    <>
        <h1 className="md:text-3xl text-2xl text-[#221ECF] font-bold my-2">
          Android Nortification
        </h1>
        <Card className="rounded-2xl shadow-md mb-20">
          <div className="my5">
            <h1 className="text-black text-base my-1 font-semibold">
              Entre Title
            </h1>
            <Input
              className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
              placeholder="Entre title"
            />
          </div>

          <div className="my-5">
            <h1 className="text-black text-base my-1 font-semibold">
              Select Nortification Topic
            </h1>
            <Input
              className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
              placeholder="Affiliate Shopping"
            />
          </div>

          <div className="my-5">
            <h1 className="text-black text-base my-1 font-semibold">Message</h1>
            <Input.TextArea
              className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
              placeholder="Affiliate Shopping"
            />

            <div className="my-5">
              <h1 className="text-black text-base my-1 font-semibold">
               Link
              </h1>
              <Input
                className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
                placeholder="Entre link"
              />
            </div>

            <h1 className="text-xl font-semibold text-[#221ECF]">OR</h1>

            <div className="my-5">
              <h1 className="text-black text-base my-1 font-semibold">
              Select Service
              </h1>
              <Input
                className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
                placeholder="Select service"
              />
            </div>

            <div className="my-5">
              <h1 className="text-black text-base my-1 font-semibold">
             File
              </h1>
              <Input
                className="md:w-1/2 py-3 border border-gray-300 text-black  text-lg font-bold"
                placeholder="Select service"
              />
            </div>
          </div>

          <div className="flex">
            <Button className="uppercase bg-[#CA3160] text-lg px-7 py-6 rounded-lg font-semibold text-white ">
               Sumbit
            </Button>
            <Button className="uppercase text-lg px-7 py-6 rounded-lg font-semibold mx-5 border border-gray-600">
              Clear
            </Button>
          </div>
        </Card>
    </>
  );
};

export default Nortification;
