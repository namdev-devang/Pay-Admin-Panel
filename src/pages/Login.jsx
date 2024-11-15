import React, { useState } from "react";
import { Button, Input, Form, Typography, message, Checkbox } from "antd";
const { Title } = Typography;
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [dropdown, setDropdown] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  // email Id features 
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [formVal, setFormVal] = useState({
    emaill: "",
    password: "",
  });
  
  
    const handelChange = (e) => {
      setFormVal({ ...formVal, [e.target.name]: e.target.value });
    };
  

  const handelLogin = (values) => {
    const { email, password } = values;

    if (email === "admin@gmail.com" && password === "12345") {
      localStorage.setItem("token", "Token");
      navigate("/home");
      message.success("Login successfully!");
    } else {
      message.error("Invalid email or password!");
    }
  };
  
    const handleEmailChange = (e) => {
      const inputEmail = e.target.value;
      setEmail(inputEmail);
  
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(inputEmail);
  
      setIsValid(isValidEmail);
    };
    

  // Otp Features 
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const validatePhoneNumber = () => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
  };

  const handleSendOtp = () => {
    if (!validatePhoneNumber()) {
      message.error("Please enter a valid 10-digit phone number.");
      return;
    }

    message.success("OTP sent successfully!");
    setDropdown(true);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (!otp) {
      message.error("Please enter the OTP.");
    } else {
      message.success("OTP verified successfully!");
    }
  };

  return (
    <>
    <div className="md:block hidden bgImage  h-screen">
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
              Welcome to{" "}
              <span className="font-bold text-[15px]">Razorpay Payments</span>
            </h1>
            <h1 className="text-black xl:text-3xl text-xl font-semibold">
              Get started with your email or phone number
            </h1>
            {/* form  */}
  {/* <Form
    name="basic"
    // onFinish={onFinish || handelLogin}
    // onClick={handelLogin}
    autoComplete="off"
  >
    <Form.Item
      name="email"
      value={formVal?.emaill}
      onChange={handelChange || handleEmailChange}
      className="mt-12  py-2 bordertext-base"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input placeholder="Entre your email "/>
    </Form.Item>

    <Form.Item
      name="password"
      className="my-4 py-2 text-base"
      value={formVal?.password}
      onChange={handelChange}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password placeholder="Entre your password" />
    </Form.Item>

    <Form.Item label={null}>
      <Button onSubmit={handelLogin} block type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form> */}

    <Form
      // name="loginForm"
      onFinish={handelLogin}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        // label="Email"
        name="email"
      className="mt-12  py-2 bordertext-base"

        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item  
        // label="Password"
        name="password"
    className="my-4 py-2 text-base"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
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


        {/* <div className="lg:absolute bottom-24 lg:left-[68px] text-white w-[35%] md:text-4xl  font-semibold">
          <h1>
            Join <span className="text-[#49d08c]">8 Million</span> Businesses
            that Trust Razorpay to Supercharge their Business
          </h1>
          <div className="flex gap-4 mt-6">
            <h1 className="text-lg">100+ Payment Methods</h1>
            <h1 className="text-lg">Easy Integration</h1>
            <h1 className="text-lg">Powerful Dashboard</h1>
          </div>
        </div> */}
      </div>
    </div>

 {/* 2 Position  */}
    <div className="md:hidden block bg-white p-4 md:rounded-lg">
          <div className="my-4 px-4">
            <img
              className=""
              src="https://accounts.razorpay.com/assets/common/logo-icon.svg"
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
      onFinish={handelLogin}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        // label="Email"
        name="email"
      className="mt-12  py-2 bordertext-base"

        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        // label="Password"
        name="password"
    className="my-4 py-2 text-base"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
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

            <div className="absolute bottom-0 left-auto px-4 text-[14px] my-3 font-semibold text-gray-400">
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


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { TfiEmail, TfiLock } from "react-icons/tfi";
// import {ToastContainer,toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [isValid, setIsValid] = useState(true);
//   const [formVal, setFormVal] = useState({
//     emaill: "",
//     password: "",
//   });

//   const handelChange = (e) => {
//     setFormVal({ ...formVal, [e.target.name]: e.target.value });
//   };
  
//   const handelLogin = (e) => {
//     e.preventDefault();
//     if (formVal.emaill && formVal.password) {
//       if (
//         formVal.emaill === "admin@gmail.com" &&
//         formVal.password === "12345"
//       ) {
//         localStorage.setItem("token", "Token");
//         navigate("/home");
//       } else {
//         toast("Wrong User Validate");
//       }
//     } else {
//       document.getElementById("emaill").style.border = "1px solid red";
//       document.getElementById("password").style.border = "1px solid red";
//     }
//   };

//   const handleEmailChange = (e) => {
//     const inputEmail = e.target.value;
//     setEmail(inputEmail);

//     // Regular expression for basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const isValidEmail = emailRegex.test(inputEmail);

//     setIsValid(isValidEmail);
//   };

//   return (
//     <> 
//     <ToastContainer />
//       <div className="flex h-screen absolute bg-white w-full lg:bg-gray-50 lg:gap-5 items-center">
//         <div className="left h-full lg:w-1/3 lg:flex hidden">
//           <figure className="">
//             <img
//               src="https://ik.imagekit.io/a069uoh9k/login-bg.jpg"
//               className="h-full"
//               alt=""
//             />
//           </figure>
//         </div>
//         <section className="lg:w-2/3 w-full lg: sm:w-4/5 md:w-3/4 mx-auto lg:px-20">
//           <div className="mb-5">
//             <span className="flex text-center text-blue-500 text-3xl font-bold gap-2">
//               <img
//                 src="https://ik.imagekit.io/a069uoh9k/favicon.png"
//                 className="w-8 2xl:"
//                 alt=""
//               />{" "}
//               Sociala.
//             </span>
//           </div>

//           <div className="right flex flex-col mx-auto lg:p-10 p-5 bg-white rounded lg:shadow">
//             <h1 className="text-xl mb-5 uppercase font-bold gap-10">
//               LOGIN TO YOUR ACCOUNT
//             </h1>

//             <form onSubmit={handelLogin}>
//               <div
//                 id="emaill"
//                 className=" mb-4 border rounded flex items-center gap-3 w-full "
//               >
//                 <label>
//                   {" "}
//                   <TfiEmail className="text-gray-500 text-xl mx-2" />
//                 </label>
//                 <input
//                   type="email"
//                   name="emaill"
//                   className="p-1 outline-none rounded flex items-center  w-full "
//                   placeholder="Email"
//                   value={formVal?.emaill}
//                   onChange={handelChange || handleEmailChange}
//                   // required
//                 />
//               </div>

//               {!isValid && (
//                 <p className="text-red-300 mb-2">Invalid email address</p>
//               )}

//               <div
//                 id="password"
//                 className=" mb-4 border rounded flex items-center gap-3 w-full "
//               >
//                 <label>
//                   {" "}
//                   <TfiLock className="text-gray-500 text-xl mx-2" />
//                 </label>
//                 <input
//                   name="password"
//                   value={formVal?.password}
//                   onChange={handelChange}
//                   type="password"
//                   className="p-1 outline-none rounded flex items-center  w-full "
//                   placeholder="Password"
//                 />
//               </div>

//               <span className="px-3 mb-5 flex justify-end items-center gap-3 font-medium cursor-pointer hover:underline">
//                 Forgot Your Password ?
//               </span>
//               <div className="mb-5 border hover:bg-transparent hover:text-blue-500 bg-blue-500 text-white cursor-pointer border-blue-500 text-center rounded flex items-center gap-3">
//                 <input
//                   type="submit"
//                   className="w-full p-2 uppercase cursor-pointer text-center"
//                   value="LOGIN"
//                 />
//               </div>
//             </form>

//             <div className="flex items-center gap-1.5">
//               <span className="text-gray-500">Don't have an account? </span>

//               <Link to="/register">
//                 <span className="text-blue-500 font-bold cursor-pointer hover:underline ">
//                   REGISTER
//                 </span>
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Login;
