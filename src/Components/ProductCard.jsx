import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link }from 'react-router-dom';
import { motion } from "framer-motion";

const ProductCard = ({product}) => {

  if(product === undefined)
    return
  var l = [];
  var r = 3.5;
  for(var i = 0;i < 5;i++)
    l.push(Math.max(r - i,0));

  console.log(l)

  
  return (
    <Link to="/products">
      <motion.div
        className="flex flex-col w-[100%] p-2  rounded-[20px] cursor-pointer  m-5 "
        whileHover={{
          scale: 1.02,
          transitionDuration: 0.2
        }}
      >
        <div className="bg-white rounded-[20px] p-10 shadow-md">
          <img
            src={
              product.image_url ? 
              product.image_url:
              "https://firebasestorage.googleapis.com/v0/b/e-commerce-31af1.appspot.com/o/FleeceBlanket.png?alt=media&token=06fa7532-0b90-4aca-bf43-1cde9d6386df"
            }
            className="w-full h-[10rem]"
          />
        </div>
        <h1 className="text-lg font-[lato] font-bold mx-4 mt-3 ">
          {product.title.slice(0,30) + '...'}
        </h1>
        <p className="text-sm font-[lato] font-gray-600 font-semibold mt-1 mx-4">
          {product.brand}
        </p>
        <div className="flex flex-row justify-between mb-1 items-center">
          <div className="flex flex-row mx-2 ">
            {l.map((value, key) => {
              return l[key] >= 1 ? (
                <FaStar key={key} size={24} className="mx-1" />
              ) : 0 < l[key] < 1 ? (
                <FaRegStar key={key} size={24} className="mx-1" />
              ) : (
                <FaStarHalfAlt key={key} size={24} className="mx-1" />
              );
            })}
          </div>
          <div className="flex flex-col ">
            <h1 className="font-[manrope] text-2xl mr-4 font-bold text-right ">
              {`$${product.final_price}`}
            </h1>
            <h1 className="font-[manrope] mr-4 font-bold text-right line-through ">
              
            </h1>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
