import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TfiEmail, TfiLock } from "react-icons/tfi";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
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
  
  const handelLogin = (e) => {
    e.preventDefault();
    if (formVal.emaill && formVal.password) {
      if (
        formVal.emaill === "admin@gmail.com" &&
        formVal.password === "12345"
      ) {
        localStorage.setItem("token", "Token");
        navigate("/home");
      } else {
        toast("Wrong User Validate");
      }
    } else {
      document.getElementById("emaill").style.border = "1px solid red";
      document.getElementById("password").style.border = "1px solid red";
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

  return (
    <> 
    <ToastContainer />
      <div className="flex h-screen absolute bg-white w-full lg:bg-gray-50 lg:gap-5 items-center">
        <div className="left h-full lg:w-1/3 lg:flex hidden">
          <figure className="">
            <img
              src="https://ik.imagekit.io/a069uoh9k/login-bg.jpg"
              className="h-full"
              alt=""
            />
          </figure>
        </div>
        <section className="lg:w-2/3 w-full lg: sm:w-4/5 md:w-3/4 mx-auto lg:px-20">
          <div className="mb-5">
            <span className="flex text-center text-blue-500 text-3xl font-bold gap-2">
              <img
                src="https://ik.imagekit.io/a069uoh9k/favicon.png"
                className="w-8 2xl:"
                alt=""
              />{" "}
              Sociala.
            </span>
          </div>

          <div className="right flex flex-col mx-auto lg:p-10 p-5 bg-white rounded lg:shadow">
            <h1 className="text-xl mb-5 uppercase font-bold gap-10">
              LOGIN TO YOUR ACCOUNT
            </h1>

            <form onSubmit={handelLogin}>
              <div
                id="emaill"
                className=" mb-4 border rounded flex items-center gap-3 w-full "
              >
                <label>
                  {" "}
                  <TfiEmail className="text-gray-500 text-xl mx-2" />
                </label>
                <input
                  type="email"
                  name="emaill"
                  className="p-1 outline-none rounded flex items-center  w-full "
                  placeholder="Email"
                  value={formVal?.emaill}
                  onChange={handelChange || handleEmailChange}
                  // required
                />
              </div>

              {!isValid && (
                <p className="text-red-300 mb-2">Invalid email address</p>
              )}

              <div
                id="password"
                className=" mb-4 border rounded flex items-center gap-3 w-full "
              >
                <label>
                  {" "}
                  <TfiLock className="text-gray-500 text-xl mx-2" />
                </label>
                <input
                  name="password"
                  value={formVal?.password}
                  onChange={handelChange}
                  type="password"
                  className="p-1 outline-none rounded flex items-center  w-full "
                  placeholder="Password"
                />
              </div>

              <span className="px-3 mb-5 flex justify-end items-center gap-3 font-medium cursor-pointer hover:underline">
                Forgot Your Password ?
              </span>
              <div className="mb-5 border hover:bg-transparent hover:text-blue-500 bg-blue-500 text-white cursor-pointer border-blue-500 text-center rounded flex items-center gap-3">
                <input
                  type="submit"
                  className="w-full p-2 uppercase cursor-pointer text-center"
                  value="LOGIN"
                />
              </div>
            </form>

            <div className="flex items-center gap-1.5">
              <span className="text-gray-500">Don't have an account? </span>

              <Link to="/register">
                <span className="text-blue-500 font-bold cursor-pointer hover:underline ">
                  REGISTER
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
