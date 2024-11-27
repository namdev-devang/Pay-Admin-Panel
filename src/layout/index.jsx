import React, { useEffect, useState } from "react";
// import Header from "./Header";
import { Layout, Menu } from "antd";
import "../App.css";
import {
  BulbFilled,
  HomeFilled,
  IeOutlined,
  GiftFilled,
  SettingFilled,
  WalletFilled,
  TransactionOutlined,
  FileSearchOutlined,
  GlobalOutlined,
  BellFilled,
  DeploymentUnitOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { FaRegCommentDots } from "react-icons/fa";
import { TbBellRinging } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    "Dashboard",
    "1",
    <Link to="/home">
      <HomeFilled />
    </Link>
  ),
  getItem(
    "Services",
    "2",
    <Link to="/services/mobile-recharges">
      <HomeFilled />
    </Link>
  ),

  getItem("Master", "sub1", <BulbFilled />, [
    getItem("- Services", "3", <Link to="/master-services"></Link>),
    getItem("- Banners", "4", <Link to="/master-banners"></Link>),
    getItem(
      "- Affilliate Banners",
      "5",
      <Link to="/master-affilliate-banners"></Link>
    ),
    getItem("- OTP's", "6", <Link to="/master-otps"></Link>),
  ]),

  getItem("Manage User", "sub2", <TeamOutlined />, [
    getItem("- List", "7", <Link to="/users-list"></Link>),
    getItem("- Kyc Request", "8", <Link to="/user-list-kyc-request"></Link>),
    getItem("- Sub Category", "9", <Link to="/user-list-sub-category"></Link>),
    getItem(
      "- New Kyc Request",
      "10",
      <Link to="/user-list-new-kyc-request"></Link>
    ),
    getItem(
      "- Withdraw Request",
      "11",
      <Link to="/user-list-withdraw-request"></Link>
    ),
  ]),

  getItem(
    "Wallets",
    "12",
    <Link to="/wallet/credit">
      {" "}
      <WalletFilled />
    </Link>
  ),

  getItem("Reports", "sub3", <FileSearchOutlined />, [
    getItem("- BBPS Reports", "13", <Link to="/bbps-reports"></Link>),
    getItem("- Dth Recharge", "14", <Link to="/dth-recharge"></Link>),
    getItem("- Mobile Recharge", "15", <Link to="/mobile-recharge"></Link>),
  ]),

  getItem(
    "Refound Request",
    "16",
    <Link to="/refound-request">
      {" "}
      <GlobalOutlined />
    </Link>
  ),

  getItem("Transactions", "sub4", <TransactionOutlined />, [
    getItem("- Transactions", "17", <Link to="/transaction"></Link>),
    getItem(
      "- Admin Transactions",
      "18",
      <Link to="/admin-transaction"></Link>
    ),
  ]),

  getItem(
    "Nortification",
    "19",
    <Link to="/nortification">
      {" "}
      <BellFilled />
    </Link>
  ),

  getItem(
    "Affiliate Store",
    "20",
    <Link to="/affiliate-store">
      {" "}
      <DeploymentUnitOutlined />
    </Link>
  ),

  getItem(
    "IP Address",
    "21",
    <Link to="/ip-address">
      {" "}
      <IeOutlined />
    </Link>
  ),

  getItem(
    "Gift Cards",
    "23",
    <Link to="/gift-card">
      {" "}
      <GiftFilled />
    </Link>
  ),

  getItem(
    "Settings",
    "24",
    <Link to="/setting">
      {" "}
      <SettingFilled />
    </Link>
  ),
];

const Index = (ChildComponent) => () => {
  const navigate = useNavigate();
  const [toggle, settoggle] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed(!collapsed);

  const handeltoggle = () => {
    settoggle(!toggle);
  };

  const handelLogOut = () => {
    localStorage.clear("token");
    navigate("/");
  };
  return (
    <div className="h-screen overflow-hidden bg-[#fafcff]">
      <div className="flex justify-between px-4 py-4 z-0 bg-white shadow-md">
        <div className=" flex gap-2 items-center">
          <div className="border-[#e4e4e4] sm:ml-14 flex md:gap-5 gap-4 items-center">
            <img
              className="md:w-28 w-[100px]"
              src="https://upload.wikimedia.org/wikipedia/commons/7/77/Razorpay_logo.png"
              alt=""
            />
            <div
              onClick={handleToggle}
              className=" text-xl font-semibold  text-[#19191C] cursor-pointer"
            >
              <GiHamburgerMenu className=" rounded-sm" />
            </div>
          </div>
        </div>

        <div className="cursor-pointer items-center w gap-1 flex justify-end px-1 py-1 -[#fcffdf] rounded-md ">
          <div className="sm:block hidden">
            <div className="flex gap-3 mx-6 ">
              <span className="bg-[#F8F8FC] text-[#221ECF] rounded-full text-2xl p-3">
                <LuSearch className=" " />
              </span>
              <span className="bg-[#F8F8FC] text-[#221ECF] rounded-full text-2xl p-3">
                <TbBellRinging className=" " />
              </span>
              <span className="bg-[#F8F8FC] text-[#221ECF] rounded-full text-2xl p-3">
                <FaRegCommentDots className=" " />
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <img
                className="md:w-10 w-7 rounded-full object-cover"
                src="https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png "
                alt=""
                srcset=""
              />
            </div>

            <div onClick={handeltoggle} className="flex items-center md:gap-6 gap-2">
              <div>
                <h1 className="text-[#221ECF] font-bold md:text-base text-xs ">Super Admin</h1>
                <h1 className="text-sm text-gray-600 md:text-base text-xs">vipswallet@gm.com</h1>
              </div>
              {toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          {toggle ? (
            <div className="absolute top-20 right-5 bg-white shadow-lg rounded-lg px-5 py-2 z-20">
              {/* <Card> */}
              <h1 className="text-center text-sky-500 font-semibold text-lg border-b ">
                Profile
              </h1>
              <h1
                onClick={handelLogOut}
                className="text-center text-red-500 font-semibold text-lg "
              >
                Signout
              </h1>
              {/* </Card> */}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flex relative h-full">
        <div id="sidebardScroll" className="z-10 ">
          <div className="absolute md:static transition-all duration-100 ease-linear">
            <Sider
              collapsed={collapsed}
              onCollapse={handleToggle}
              className="bg-white"
            >
              <Menu
                mode="inline"
                className="bg-white h-screen outline-none  text-gray-600 w-72 p-2 mb-52 font-semibold overflow-y-scroll no-scrollbar mx-auto "
                items={items}
              />
            </Sider>
          </div>
        </div>

        <div
          className={` ${collapsed ? "w-full ml-20 md:ml-0 " : "w-full  ml-24"
            } p-4 overflow-scroll scrollbar-webkit scrollbar-thin  h-full `}
        >
          <ChildComponent />
        </div>
      </div>
    </div>
  );
};
export default Index;
