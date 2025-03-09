import React, { useState } from "react";
import { motion } from "framer-motion";

// Generate Sample Divs
const getRenderedComponents = () => {
  return Array.from({ length: 5 }, (_, i) =>
    <div key={i} className="p-5">{`Sample Div ${i + 1}`}</div>
  );
};

const Banner = () => {
  const allComponents = getRenderedComponents();
  const [pointer, setPointer] = useState(0);

  // Compute circular window dynamically
  const windowElements = [
    allComponents[pointer],
    allComponents[(pointer + 1) % allComponents.length],
    allComponents[(pointer + 2) % allComponents.length]
  ];

  // Function to update pointer & trigger animation
  const updatePointer = () => {
    setPointer(prev => (prev + 1) % allComponents.length);
  };

  return (
    <div className="flex flex-row h-120 gap-5 overflow-hidden relative">
      {windowElements.map((value, index) => {
        // Set different widths for different positions
        const width = index === 0 ? "60%" : index === 1 ? "30%" : "10%";

        return (
          <motion.div
            key={index}
            layout // Enables smooth layout transitions
            className="border rounded-2xl p-5 cursor-pointer"
            animate={{ width, opacity: 1 }} // Animate width & opacity
            initial={{ opacity: 0 }} // Initial opacity
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
            onClick={updatePointer} // Click to shift
          >
            {value}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Banner;
