import React, { useState } from "react";
import { motion } from "framer-motion";
import { logo, google, microsoft, apple } from "../assets";

import { MdEmail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";

const toggleItems = ["Login", "Sign In"];

const Toggle = ({ toggle, setToggle }) => {
  return (
    <div className="flex flex-row bg-[#c2f1eb] rounded-[20px] p-2 gap-5 w-[70%]">
      {toggleItems.map((value, key) => {
        return (
          <motion.button
            key={key}
            className={`flex flex-col py-3 w-full text-center items-center font-semibold font-[inter] ${
              toggle === key ? "bg-white" : ""
            } rounded-2xl`}
            onClick={() => setToggle(key)}
          >
            {value}
          </motion.button>
        );
      })}
    </div>
  );
};

const ContinueButtons = () => {
  return (
    <div className="flex flex-row gap-5 w-full items-center justify-center">
      <motion.button className=" rounded-full shadow-lg border p-4">
        <img src={google} alt="" className="w-[30px]" />
      </motion.button>
      <motion.button className=" rounded-full shadow-lg border p-4">
        <img src={microsoft} alt="" className="w-[30px]" />
      </motion.button>

      <motion.button className=" rounded-full shadow-lg border">
        <img
          src={apple}
          alt=""
          className="bg-black rounded-full w-[60px] shadow-lg"
        />
      </motion.button>
    </div>
  );
};

const LoginPage = ({ toggle, setToggle }) => {
  return (
    <>
      <div className="flex flex-row w-full items-center bg-white rounded-2xl border-2 border-[#29ffd8] my-2 mt-10">
        <MdEmail size={24} className="mx-5" />
        <input
          type="email"
          placeholder="Email"
          className="font-[source sans 3] font-semibold text-md w-full pr-5 py-3 bg-transparent outline-none"
        />
      </div>
      {toggle !== 0 && (
        <div className="flex flex-row w-full items-center bg-white rounded-2xl border-2 border-[#29ffd8] my-2">
          <IoLockClosed size={24} className="mx-5" />
          <input
            type="password"
            placeholder="New Password"
            className="font-[source sans 3] font-semibold text-md py-3 w-full pr-5 bg-transparent outline-none"
          />
        </div>
      )}
      <div className="flex flex-row w-full items-center bg-white rounded-2xl border-2 border-[#29ffd8] my-2">
        <IoLockClosed size={24} className="mx-5" />
        <input
          type="password"
          placeholder={toggle === 0 ? "Password" : "Confirm Password"}
          className="font-[source sans 3] font-semibold text-md py-3 w-full pr-5 bg-transparent outline-none"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.97, transition: { duration: 0.2 } }}
        className="font-semibold  w-full font-[lato] text-lg mt-10 mb-5 py-3 rounded-2xl bg-[#29ffd8]"
      >
        {toggle === 0 ? 'Login' : 'Sign In'}
      </motion.button>
      <div className="relative flex fle-row w-full items-center justify-center my-5">
        <div className="flex-grow w-full border "></div>
        <h1 className="text-gray-400 mx-5 bg-white font-[source sans 3] text-sm w-fit whitespace-nowrap">
          Or Continue with
        </h1>
        <div className="flex-grow w-full border "></div>
      </div>

      <ContinueButtons />
    </>
  );
};

const Login = () => {
  const [toggle, setToggle] = useState(0);

  return (
    <div className="flex bg-[#f4fcf6] w-screen h-screen items-center justify-center">
      <div className="flex flex-row bg-[#C0FFE1] w-full mx-[10%] h-[50rem] my-[10%]">
        <div className="flex items-center flex-col justify-center w-[50%] px-[10%] bg-white">
          <img src={logo} alt="" className="mb-[20%] h-[30px]" />
          <Toggle toggle={toggle} setToggle={setToggle} />
          <LoginPage toggle={toggle} setToggle={setToggle} />
        </div>
        <div className="flex flex-col items-center h-full justify-center  mx-[10%]">
          <h1 className="font-semibold text-center font-[montserrat] text-5xl">
            Welcome Back
          </h1>
          <p className="font-[lato] font-semibold text-lg text-center my-10">
            Please fill you email and password to access your account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
