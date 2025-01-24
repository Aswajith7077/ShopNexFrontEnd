import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt, FaArrowLeft } from "react-icons/fa";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

const Products = () => {
  var l = [];
  var r = 3.5;
  for (var i = 0; i < 5; i++) l.push(Math.max(r - i, 0));
  return (
    <div className="flex flex-col bg-[#f4fcf6]">
      <NavBar searchBar={false} className="py-9" />
      <div className="flex flex-row items-right justify-right my-[7%]">
        <div className="flex flex-col w-full justify-center mt-[5%]">
          <h1 className="text-xl text-right font-[montserrat] uppercase font-semibold">
            REPOSE
          </h1>
          <h2 className="pl-[10%] text-[54px] text-[lato] text-right font-bold ">
            Fall Limited Edition Sneakers
          </h2>
          <p className=" pl-[10%] text-base text-[lato] font-semibold text-right my-[5%]">
            Wrap yourself in cozy comfort with this ultra-soft fleece blanket,
            perfect for any season. Crafted from high-quality, lightweight
            fleece, it provides warmth without the weight. Ideal for snuggling
            on the couch, adding a stylish layer to your bed, or taking on
            outdoor adventures. Durable, easy to care for, and available in a
            variety of colors and sizes to suit your needs!
          </p>
          <div className="flex flex-row justify-between ml-[10%]">
            <div className="flex flex-row mx-2 items-center ">
              {l.map((value, key) => {
                return l[key] >= 1 ? (
                  <FaStar key={key} size={36} className="mx-1" />
                ) : 0 < l[key] < 1 ? (
                  <FaRegStar key={key} size={36} className="mx-1" />
                ) : (
                  <FaStarHalfAlt key={key} size={36} className="mx-1" />
                );
              })}
              <h1 className="text-3xl ml-[10%] font-[montserrat] font-semibold">
                {r}
              </h1>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-[manrope] text-5xl mr-4 font-bold text-right">
                $299.00
              </h1>
              <h1 className="font-[manrope] mr-4 font-bold text-right line-through ">
                $299.00
              </h1>
            </div>
          </div>
          <div className="flex flex-row ml-[5%] my-[10%]">
            <motion.button
              whileHover={{
                scale: 1.03,
                transitionDuration: 0.2
              }}
              whileTap={{
                scale: 0.97,
                transitionDuration: 0.2
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="w-full bg-[#29FFD8] rounded-[20px] px-[3%] py-5 font-[lato] font-semibold text-lg"
            >
              Add to Cart
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.03,
                transitionDuration: 0.2
              }}
              whileTap={{
                scale: 0.97,
                transitionDuration: 0.2
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="w-full text-white bg-[#006EF0] rounded-[20px] px-[3%] py-5 font-[lato] font-semibold ml-[3%] text-lg"
            >
              Check Out
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col items-center w-full ">
          <div className="w-[45rem] h-[30rem] bg-white rounded-[20px] px-[5%] py-[5%] m-[2%] shadow-xl">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/e-commerce-31af1.appspot.com/o/FleeceBlanket.png?alt=media&token=06fa7532-0b90-4aca-bf43-1cde9d6386df"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
