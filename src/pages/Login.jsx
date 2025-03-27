import React, { useState } from "react";
import { Button, Input, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogin } from "../redux/actions/auth/authAction";
import ToastComp from "../Component/ToastComp";

const Login = () => {
  const [OTP_SHOW, setOTP_SHOW] = useState(false);
  const [formVal, setFormVal] = useState({
    phone: "",
    email: ''
  })
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(phoneNumber, "phoneNumber")
  const [otp, setOtp] = useState("");
  console.log(otp, "otp")
  const dispatch = useDispatch()
  const navigate = useNavigate()


  // Otp Features 
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // const validatePhoneNumber = () => {
  //   const phonePattern = /^[0-9]{10}$/;
  //   return phonePattern.test(formVal.phone);
  // };

  const handleSendOtp = async (values) => {
    console.log(values, "values")
    const resultAction = await dispatch(authLogin(values));
    console.log(resultAction.payload.ResponseStatus, "resultAction")
    if (resultAction.payload.ResponseStatus === 3) {
      message.success(resultAction.payload.Remarks)
      setOTP_SHOW(true);
    } else {
      message.error(resultAction.payload.Remarks)
    }

    // if (!validatePhoneNumber()) {
    //   message.error("Please enter a valid 10-digit phone number.");
    //   return;
    // }

    // if (values.phone === "8269710784") {
    //   message.success("otp sent sms Through")
    //   setOTP_SHOW(true);
    // } else {
    //   message.error('Invalid credentials')
    // }

  };

  const handleVerifyOtp = async (val) => {
    console.log(val)
    const resultAction = await dispatch(authLogin(val));
    console.log(resultAction.payload.ResponseStatus, "resultAction")
    if (resultAction.payload.ResponseStatus === 2) {
      message.success("OTP verified successfully!");
      message.success(resultAction.payload.Remarks)
      localStorage.setItem("token", resultAction.payload.AccessToken)
      navigate("/home");
    } else {
      message.error(resultAction.payload.Remarks)
    }
  };

  return (
    <>
      <div className="md:block hidden bg-[url('https://media.razorpay.com/file/platform/frontend-auth/razorpay/razorpay-bg-visual-1.3x.jpeg')] bg-no-repeat bg-cover  h-screen">
        <div className="flex justify-between py-3 px-5">
          <div className="mt-14 mx-7 ">
            <img
              className="w-32"
              src="https://accounts.razorpay.com/assets/razorpay/logo-dark.svg"
              alt="Razorpay Logo"
            />
          </div>

          <div className="bg-white md:w-[40%]  xl:w-1/4 h-[97vh]  md:rounded-lg">
            <div className="xl:my-36 xl:px-10 md:my-20 md:px-5">
              <img
                className=""
                src="https://accounts.razorpay.com/assets/common/logo-icon.svg"
                alt="Razorpay Icon"
              />
              <h1 className="text-gray-400 md:text-[14px] my-4 font-semibold">
                Welcome to {" "}
                <span className="font-bold text-[15px]">Razorpay Payments</span>
              </h1>
              <h1 className="text-black xl:text-3xl text-xl font-semibold">
                Get started with your email or phone number
              </h1>
              {/* form  */}

              <Form
                // name="loginForm"
                onFinish={OTP_SHOW ? handleVerifyOtp : handleSendOtp}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  // label="Email"
                  name="phone"

                  rules={[
                    { required: true, message: 'Please input your phone!' },
                    {
                      validator: (_, value) => {
                        if (!value || (value.length >= 4 && value.length <= 10)) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Phone number must be between 10 characters!'));
                      },
                    },
                  ]}
                >
                  {
                    <Input maxLength={10} disabled={OTP_SHOW ? true : false}
                      onChange={handlePhoneChange}
                      className="mt-12  py-2 border border-gray-200 text-base"
                      placeholder="Enter mobile number..." />
                  }

                </Form.Item>

                {
                  OTP_SHOW ?
                    <Form.Item
                      name="otp"
                      rules={[{ required: true }]}
                    >

                      <Input
                        maxLength={6}
                        onChange={handleOtpChange}
                        className=" py-2 border border-gray-200 text-base"
                        placeholder="Enter Otp..."
                      />
                    </Form.Item> : null
                }

                <Form.Item>
                  {
                    <Button type="primary" className={`${OTP_SHOW ? "my-4 py-5" : "my-4 py-5 bg-green-600 text-white text-lg font-semibold"}`}
                      block htmlType="submit">
                      {OTP_SHOW ? "Submit" : "OTP_Sent"}
                    </Button>
                  }
                </Form.Item>
              </Form>

              <h1 className="text-center border-b">or</h1>

              <div className="flex items-center justify-between border border-gray-300 rounded-md p-2 my-4">
                <div className="">
                  <h1 className="font-semibold text-gray-800 text-[12px]">
                    Continue as Devang
                  </h1>
                  <h1 className="text-[11px]">devangnamdev917@gmail.com</h1>
                </div>

                <div>
                  <img className="w-5" src="https://ik.imagekit.io/a069uoh9k/download.png" alt="" />
                </div>
              </div>

              {/* <h1 className=" text-[14px] sm:absolute bottom-[40px] font-semibold text-gray-400">
                By continuing you agree to our{" "}
                <span className="text-blue-500 font-semibold hover:underline">
                  privacy policy
                </span>{" "}
                and
                <span className="text-blue-500 font-semibold hover:underline">
                  {" "}
                  terms of use
                </span>
              </h1> */}
            </div>
          </div>

          <div className="lg:absolute lg:block hidden bottom-24 lg:left-[68px] text-white w-[35%] md:text-4xl  font-semibold">
            <h1>
              Join <span className="text-[#49d08c]">8 Million</span> Businesses
              that Trust Razorpay to Supercharge their Business
            </h1>
            <div className="flex gap-4 mt-6">
              <h1 className="text-lg">100+ Payment Methods</h1>
              <h1 className="text-lg">Easy Integration</h1>
              <h1 className="text-lg">Powerful Dashboard</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 2 Position  */}
      <div className="md:hidden block bg-white p-4 md:rounded-lg">
        <div className="my-4 px-4">
          <img
            className=""
            src="https://accounts.razorpay.com/asEsets/common/logo-icon.svg"
            alt="Razorpay Icon"
          />
          <h1 className="text-gray-400 md:text-[14px] my-3 font-semibold">
            Welcome to{" "}
            <span className="font-bold text-[15px]">Razorpay </span>
          </h1>
          <h1 className="text-black text-2xl font-semibold">
            Get started with your email or phone number
          </h1>

          <Form
            // name="loginForm"
            onFinish={OTP_SHOW ? handleVerifyOtp : handleSendOtp}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              // label="Email"
              name="phone"

              rules={[
                { required: true, message: 'Please input your phone!' },
                {
                  validator: (_, value) => {
                    if (!value || (value.length >= 4 && value.length <= 10)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Phone number must be between 10 characters!'));
                  },
                },
              ]}

            >
              {
                OTP_SHOW ?
                  <Input disabled
                    onChange={handlePhoneChange}
                    className="mt-12  py-2 border border-gray-200 text-base"
                    placeholder="Enter mobile number..." />
                  :
                  <Input
                    maxLength={10}
                    onChange={handlePhoneChange}
                    className="mt-12  py-2 border border-gray-200 text-base"
                    placeholder="Enter mobile number..." />
              }

            </Form.Item>

            {
              OTP_SHOW ?
                <Form.Item
                  // className="ml-20"
                  // label="Password"
                  name="otp"
                  rules={[{ required: true }]}
                >

                  <Input
                    maxLength={6}
                    onChange={handleOtpChange}
                    className=" py-2 border border-gray-200 text-base"
                    placeholder="Enter Otp..."
                  />

                </Form.Item> : null
            }

            <Form.Item>
              {
                OTP_SHOW ?
                  <Button type="primary" className="my-4 py-5 " block htmlType="submit">
                    Submit
                  </Button>

                  : <Button className="my-4 py-5 bg-green-600 text-white text-lg font-semibold " block type="default" htmlType="submit">
                    Otp_sent
                  </Button>
              }
            </Form.Item>
          </Form>

          <h1 className="text-center my-10 ">or</h1>

          <div className="flex items-center justify-between border border-gray-300 rounded-md p-2">
            <div className="">
              <h1 className="font-semibold text-gray-800 text-[12px]">
                Continue as Devang
              </h1>
              <h1 className="text-[11px]">devangnamdev917@gmail.com</h1>
            </div>

            <div>
              <img className="w-5" src="https://ik.imagekit.io/a069uoh9k/download.png" alt="" />
            </div>
          </div>

          <div className="absolute bottom-0 left-auto px- text-[13px] my-3 font-semibold text-gray-400">
            By continuing you agree to our{" "}
            <span className="text-blue-700 font-semibold hover:underline">
              privacy policy
            </span>{" "}
            and
            <span className="text-blue-700 font-semibold hover:underline">
              {" "}
              terms of use
            </span>
          </div>
        </div>
      </div>
    </>

  );
};

export default Login;

