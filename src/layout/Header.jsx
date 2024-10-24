import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = (props) => {
  const [name, setName] = useState();
  const { handleToggle } = props;

  return (
    <>
      <div className="flex justify-between shadow-sm px-4 py-4 z-0 bg-[#e2dcd5] ">
        <div className=" flex gap-2 items-center">
          <div
            onClick={handleToggle}
            className=" text-xl font-semibold  text-[#19191C] cursor-pointer gao"
          >
            <RxHamburgerMenu className="bg-[#e8e1d8] rounded-sm" />
          </div>
          <div className=" border-[#e4e4e4] ml-4">
            <img
              className="w-[5rem]"
              src="https://uploads-ssl.webflow.com/5e7a465cfe669f130650234b/60a294369af0b00a099b8ee6_Equify2.svg"
              alt=""
            />
          </div>
        </div>

        <div className="cursor-pointer items-center w gap-1 flex justify-end px-1 py-1 -[#fcffdf] rounded-md ">
          <img
            className="w-11 object-cover h-11 rounded-full "
            src={
              "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Header;
