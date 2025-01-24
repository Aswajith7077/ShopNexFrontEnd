import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const bannerElements = [
  {
    title: "Realtek V51",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://www.google.com",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-commerce-31af1.appspot.com/o/noiseCancellationHeadphones.png?alt=media&token=04dd5eef-220b-4a90-9d8f-3a7cc40e59c2"
  },
  {
    title: "Realtek V52",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://www.google.com",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-commerce-31af1.appspot.com/o/noiseCancellationHeadphones.png?alt=media&token=04dd5eef-220b-4a90-9d8f-3a7cc40e59c2"
  },
  {
    title: "Realtek V53",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://www.google.com",
    image:
      "https://firebasestorage.googleapis.com/v0/b/e-commerce-31af1.appspot.com/o/noiseCancellationHeadphones.png?alt=media&token=04dd5eef-220b-4a90-9d8f-3a7cc40e59c2"
  }
  // Add more banners as needed
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerElements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds interval

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  const handleButtonClick = (index) => {
    clearInterval(intervalRef.current); // Pause auto-scroll when clicked
    setCurrentIndex(index);
  };

  // Framer Motion animation variants
  const bannerVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div className="flex flex-col items-center w-full my-10">
      {/* Banner Section */}
      <div className="relative w-full overflow-hidden bg-black rounded-[40px] px-28 py-10">
        <motion.div
          key={currentIndex} // Key ensures animations trigger on index change
          initial="enter"
          animate="center"
          exit="exit"
          variants={bannerVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center gap-10"
        >
          <div className="flex-1 text-white">
            <h1 className="text-4xl font-bold mb-5">
              {bannerElements[currentIndex].title}
            </h1>
            <p className="text-sm mb-5">
              {bannerElements[currentIndex].description}
            </p>
            <a
              href={bannerElements[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 px-6 py-3 bg-[#29FFD8] text-black border-2 border-gray-700 hover:border-[#29FFD8] rounded-full"
            >
              Explore
            </a>
          </div>
          <img
            src={bannerElements[currentIndex].image}
            alt={bannerElements[currentIndex].title}
            className="w-[30rem] h-auto rounded-lg py-10"
          />
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="flex mt-5">
        {bannerElements.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`w-4 h-4 mx-2 rounded-full ${
              currentIndex === index ? "bg-[#29FFD8]" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
