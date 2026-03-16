import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaGift } from "react-icons/fa";
import { motion } from "motion/react";
import ButtonAnimation from "../UnderlineEffect/ButtonAnimation";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full min-h-screen bg-page pt-1"
    >
      {/* text-content */}
      <div className="hero-content ">
        <div className="left-text mt-52 px-20">
          <p className="text-primary font-semibold text-lg md:text-xl lg:text-2xl captilize">
            India's #1 Corporate Gifting Platform
          </p>
          {["Gifts That", "Strengthen", "Your Culture."].map((item, index) => (
            <div className="flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8.5vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-4 w-[8.5vw] h-[5.3vw] rounded-md  bg-primary flex items-center justify-center"
                >
                  <FaGift className="text-white md:text-5xl lg:text-6xl xl:text-7xl" />
                </motion.div>
              )}
              <h1
                className={`text-5xl md:text-6xl lg:text-8xl  xl:text-9xl font-bold  uppercase   tracking-tighter ${index === 2 ? "italic" : ""} ${index === 1 ? "text-primary" : "text-primary-dark"} `}
              >
                {item}
              </h1>
            </div>
          ))}
        </div>

        {/* border bottom */}
        <div className="border-t-2 border-gray-300 mt-25 flex justify-between items-center px-20">
          {[
            "Premium corporate gifting for India's leading companies.",
            "Celebrate employees, build loyalty & deliver joy - at any scale.",
          ].map((content, index) => (
            <div className="text-primary-dark text-xl font-heading">
              {" "}
              {content}{" "}
            </div>
          ))}
          <div className="button cursor-pointer flex items-center gap-2 py-4 ">
            <ButtonAnimation
              fillColor="#333333"
              className="border-2 border-gray-400 py-1 px-5 rounded-3xl font-heading text-xl uppercase "
            >
              Start gifting
            </ButtonAnimation>

            <div className=" border-gray-400  rounded-full border-2 p-2">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
