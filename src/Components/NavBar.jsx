import React, { useState } from "react";
import { colors } from "../Constants";
import { SiMoneygram } from "react-icons/si";
import { ArrowRight } from "lucide-react";
import { color, motion } from "framer-motion";
import { useRef } from "react";
import { logo } from "../assets";
import { Circle as CircleProgress } from "rc-progress";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { HiShoppingBag } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useAuth } from "../auth/AuthContext";

const handleCartClick = (navigate, auth) => {
  if (auth.user === undefined) {
    alert("Login to View Cart");
    return;
  }

  navigate("/cart");
};

const navLinks = [
  {
    title: "My Orders",
    icon: <SiMoneygram size={24} />,
    link: ""
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp size={24} />,
    link: ""
  },
  {
    title: "My Purchases",
    icon: <HiShoppingBag size={24} />,
    link: ""
  }
];

const NavBar = ({ searchBar = true, className = "" }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const reference = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [search, setSearch] = useState("");
  const searchBarRef = useRef(null);

  return (
    <nav
      className={`fixed flex items-center justify-between py-5 w-full bg-[#f4fcf6] ${className} z-50`}
    >
      <img src={logo} alt="" className="w-[13%] ml-10" />
      {searchBar && (
        <div
          ref={reference}
          className={`flex flex-row w-[60%] md:w-[35%] rounded-full `}
        >
          <input
            ref={searchBarRef}
            placeholder="Search new products"
            onChange={(e) =>
              setSearch(e.target.value ? e.target.value : search)
            }
            className="w-full px-[7%] md:px-[5%] font-[source sans 3] py-3 outline-none rounded-full border-2 focus:border-[#29FFD8]"
          />
          <motion.button
            className={`rounded-full bg-[#29FFD8] p-3 m-1`}
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.2 }
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.2 }
            }}
            onClick={() => {
              if (search === "") {
                alert("Search text is invalid");
                return;
              }
              if (location.pathname === "/search") return;
              navigate("/search", {
                state: {
                  searchText: search
                }
              });
            }}
          >
            <ArrowRight size={20} strokeWidth={2.75} absoluteStrokeWidth />
          </motion.button>
        </div>
      )}

      <div className="flex flex-row justify-evenly">
        {/* <Link to={`/cart`}> */}
        <motion.button
          className="mx-10 "
          onClick={() => handleCartClick(navigate, auth)}
          whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <FaCartShopping size={28} className=" cursor-pointer w-fit" />
        </motion.button>
        {/* </Link> */}

        {auth.user !== undefined && (
          <motion.button
            className=" mx-10 "
            whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <FaUserCircle
              size={36}
              className=" cursor-pointer w-fit"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          </motion.button>
        )}

        {auth.user === undefined && (
          <div className="flex flex-row">
            <motion.button
              onClick={() => {
                navigate("/login");
              }}
              className=" mx-10 border-2 border-[#29ffd8] font-[lato] font-semibold bg-[#29ffd8] px-5 py-3 rounded-xl"
              whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              Register
            </motion.button>
          </div>
        )}

        {menuOpen && (
          <div className="absolute flex flex-col bg-[#A3FFF4]  w-[25rem] border rounded-3xl right-10 top-20 px-5">
            <div className="flex flex-row items-center justify-center my-10">
              <FaUserCircle size={76} className="bg-white rounded-full " />
              <div className="flex flex-col mx-5">
                <h1 className="font-[inter] font-semibold text-3xl">
                  {" "}
                  Test App User
                </h1>
                <h1 className="font-[inter] font-semibold text-lg">
                  {" "}
                  sample@example.com
                </h1>
              </div>
            </div>

            <motion.button
              className="font-[inter] py-3 w-full rounded-xl bg-white shadow-lg"
              whileTap={{ scale: 0.97, transition: { duration: 0.2 } }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              Edit Profile
            </motion.button>
            <motion.div className="bg-white my-5 px-5 rounded-2xl shadow-xl">
              <CircleProgress
                percent={10}
                strokeWidth={10}
                strokeColor="#0772f0"
                trailWidth={10}
                trailColor="#D3D3D3 "
                size={20}
                className="w-20 my-5"
              />
            </motion.div>

            <ul>
              {navLinks.map((value, key) => {
                return (
                  <li
                    key={key}
                    className="flex flex-row py-2 items-center mx-5 gap-5"
                  >
                    {value.icon}
                    <h1 className="font-[lato] font-semibold">{value.title}</h1>
                  </li>
                );
              })}
            </ul>
            <motion.button
              className="font-[inter] font-medium py-3 w-full rounded-xl bg-[#FF7294] shadow-xl my-5"
              whileTap={{ scale: 0.97, transition: { duration: 0.2 } }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              Log Out
            </motion.button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
