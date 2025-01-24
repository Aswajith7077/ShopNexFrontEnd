import React from "react";
import { motion } from "framer-motion";

const options = [
  {
    title: "Latest Arrivals",
    image: ""
  },
  {
    title: "Top Brands",
    image: ""
  },
  {
    title: "Top Rated",
    image: ""
  },
  {
    title: "Budget Friendly",
    image: ""
  }
];

const Options = () => {
  return (
    <div className="flex grid grid-rows-4 md:grid-rows-2 grid-flow-col mx-[10%]">
      {options.map((value, key) => {
        return (
          <motion.button
            key={key}
            whileHover={{
							scaleY: 1.1,
              scaleX: 1.01,
              transitionDuration: 0.2
            }}
            whileTap={{
              scale: 0.9,
              transitionDuration: 0.2
            }}
            onHoverEnd={(event) => {}}
            onHoverStart={(event) => {}}
            className="bg-[#29FFD8] px-[5%] py-[8%] mx-[5%] my-[2%] rounded-[20px] lg:rounded-[40px] text-[lato] text-xl lg:text-4xl font-semibold"
          >
            {value.title}
          </motion.button>
        );
      })}
    </div>
  );
};

export default Options;
