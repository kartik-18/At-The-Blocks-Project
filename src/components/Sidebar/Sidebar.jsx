import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../imgs/logo.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { SidebarData } from "../../Data/Data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);

  return (
    <>
      {/* bars */}
      <div
          className="hidden md:flex md:fixed md:top-[2rem] md:left-[60%] md:bg-[#ffe0e0] md:p-[10px] md:rounded-[10px] md:z-10"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="flex flex-col relative pt-12 ease-in duration-300 md:fixed md:z-10 md:bg-[#ffe0e0] md:w-[55%] md:pr-[1rem] md:h-[100%]"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="xl:hidden md:flex flex h-[5rem] font-bold text-[22px] gap-4 items-center justify-center">
          <img className="w-[3rem] h-[3rem]" src={logo} alt="logo" />
          <span>
            Sh<span className="text-[#FF919D]">o</span>ps
          </span>
        </div>

        {/* meenu */}
        <div className="mt-4 flex flex-col gap-[2rem]">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={
                  selected === index
                    ? "ml-0 flex items-center gap-[1rem] h-[2.5rem] relative ease-in duration-300 rounded-xl text-[14px] hover:cursor-pointer active"
                    : "flex items-center gap-[1rem] h-[2.5rem] ml-[2rem] relative ease-in duration-300 rounded-xl text-[14px] hover:cursor-pointer"
                }
                key={index}
                onClick={() => setSelected(index)}
              >
                {/* className={selected === index ? "ml-0 flex items-center gap-[1rem] h-[2.5rem] relative ease-in duration-300 rounded-xl text-[14px] hover:cursor-pointer  bg-[#f799a354] before:content-none before:w-[8px] before:h-[100%] before:bg-[#FF919D] before:mr-[8px]" 
            
            : 
            
            "flex items-center gap-[1rem] h-[2.5rem] ml-[2rem] relative ease-in duration-300 rounded-xl text-[14px] hover:cursor-pointer"}


            key={index}
            onClick={() => setSelected(index)}
          > */}
                <item.icon />
                <span className="xl:hidden md:block">{item.heading}</span>
              </div>
            );
          })}
          {/* signoutIcon */}
          {/* menuitem */}
          <div className=" flex items-center gap-[1rem] h-[2.5rem] ml-[2rem] relative ease-in duration-300 rounded-xl text-[14px] hover:cursor-pointer">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
