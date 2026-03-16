import React from "react";
import { motion } from "motion/react";

const Marque = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.001"
      className="bg-primary-dark py-20 rounded-t-3xl w-full "
    >
      <div className="border-t border-b border-[#FAF8F5] flex whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 14 }}
          className="text-[16vw] font-body font-semibold leading-none tracking-tighter  text-[#FAF8F5] pl-[4vw] "
        >
          WE ARE VIBGYOR VENTURES
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 14 }}
          className="text-[16vw] font-body font-semibold leading-none tracking-tighter  text-[#FAF8F5] pl-[15vw]"
        >
          WE ARE VIBGYOR VENTURES
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
