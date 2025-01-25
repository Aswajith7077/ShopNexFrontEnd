import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import Options from "./Options";
import Footer from "./Footer";
import { api } from "../api/api";

const tagNames = [
  "Electronics",
  "Fashion",
  "Cosmetics",
  "Appliances",
  "Utensils"
];

// const getUser = () => {
  
//   api.get("/");
// }


const getItems = (setItems) => {
  api.get('/getitems')
    .then(response => {
      setItems(response.data);
      console.log("Items : ", response.data);
      console.log('Items Retrived!');
    })
    .catch(error => {
      console.log('Error in Items Retrival : ',error);
    })
}


const ShoppingTags = () => {
  const tagSelected = new Set([]);

  return (
    <div className="flex flex-row z-2 mb-10 mx-[3%]">
      {tagNames.map((value, key) => {
        return (
          <motion.button
            key={key}
            whileHover={{
              scale: 1.1,
              transitionDuration: 0.2
            }}
            whileTap={{
              scale: 0.9
            }}
            className={`mx-4 px-7 py-3 border-2 border-[#006EF0] rounded-full bg-[#006EF077] font-semibold text-white`}
            onClick={(event) => {
              if (tagSelected.has(tagNames[key])) {
                tagSelected.delete(tagNames[key]);
                event.target.style.background = "#006EF077";
              } else {
                tagSelected.add(tagNames[key]);
                event.target.style.background = "#006EF0";
              }
            }}
          >
            {value}
          </motion.button>
        );
      })}
    </div>
  );
};

const DashBoard = () => {
  const [items,setItems] = useState([]);

  useEffect(()=>{
    getItems(setItems);
    
  },[]);


  return (
    <div className="bg-gradient-to-b from-[#f4fcf6] to-[#f4fcf6] pt-[5%] px-[5%]">
      <Banner className="px[2%] " />
      {/* <ShoppingTags /> */}
      <h1 className="text-4xl font-bold font-[lato] mx-7 my-[3%] mb-10">
        Recommended Products
      </h1>
      <div className="flex flex-row ml-2  ">
        <ul className="flex flex-row pb-10 overflow-hidden gap-1">
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
        </ul>
      </div>

      <Options />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-even ">
        {items && items.map((value,key) => {
          return <div>
            <ProductCard product={product}/>
          </div>
        })}
      </div>

      <h1 className="text-4xl font-bold font-[lato] mx-7 my-[3%] mb-10">
        Inspired through Browsing
      </h1>
      <div className="flex flex-row ml-2  ">
        <ul className="flex flex-row pb-10 overflow-hidden">
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-b from-[#006EF0] to-blue-400 mx-[5%] my-[2%] rounded-[40px] px-[5%] py-[5%]">
        <h1 className="text-5xl font-[montserrat] text-white font-semibold">
          Not Here to purchase ?
        </h1>
        <p className="w-[60rem] font-[lato] text-lg text-white mt-10 font-semibold">
          Explore some of the greatest career opportunities designed to help you
          achieve your full potential. Join us and embark on a journey of
          growth, learning, and unparalleled success. Stay inspired as you work
          alongside a team that values innovation and creativity. Together,
          we'll pave the way for a future filled with possibilities and
          achievements. Don't just witness the change—be the change and make a
          lasting impact with us!
        </p>
      </div>

      
    </div>
  );
};

export default DashBoard;
