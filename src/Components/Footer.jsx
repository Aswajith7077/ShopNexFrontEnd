import React from 'react';
import { motion } from 'framer-motion';
import { logo } from '../assets';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const footerLinks = [
  "About Us",
  "Privacy policy",
  "Terms and Conditions",
  "Contact Us",
  "Career"
];


const Footer = () => {
  return (
    <div className="flex flex-col h-[30rem] w-full bg-[#29FFD8] items-center pt-[2%]">
      <img src={logo} alt="" className="w-[20%]  my-10" />

      <h1 className="font-[lato] font-semibold">Follow us on</h1>
      <div className='flex flex-row gap-8 my-9'>
        <FaFacebook size={48}/>
        <FaSquareXTwitter size={48}/>
				<FaLinkedin size={48}/>
      </div>

      <div className="flex flex-row w-[50%] justify-evenly">
        {footerLinks.map((value, key) => (
          <motion.button
            key={key}
            initial={{
              color: "black",
              y: 0
            }}
            whileHover={{
              color: "#006EF0",
              y: -5,
              height: +10
            }}
            whileTap={{
              scale: 0.95,
              transitionDuration: 0.2
            }}
            onHoverStart={(event) => {}}
            onHoverEnd={(event) => {}}
            className="cursor-pointer font-[lato] text-[18px] px-3 py-5 font-semibold"
          >
            {" "}
            {value}
          </motion.button>
        ))}
      </div>
      <p className="w-[75%] mt-5 font-[lato] text-[18px] text-center border-t-2 border-black px-3 py-5 font-semibold text-black">
        ShopNex copyright 2024 - All Rights Reserved
      </p>
    </div>
  );
}

export default Footer