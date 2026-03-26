import React from "react";
import { motion } from "motion/react";
import { MdEvent } from "react-icons/md";

const EventsHero = () => {
  return (
    <section
      data-scroll
      data-scroll-speed="-.3"
      className="bg-[#56bdb4] py-20 px-10 rounded-b-3xl"
    >
      {/* hero title */}
      <div className="about-title mt-25 ">
        <div className="flex items-center ">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8.5vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="mr-4 w-[8.5vw] h-[5.3vw] rounded-md  bg-primary-dark flex items-center justify-center"
          >
            <MdEvent className="text-gray-300 md:text-5xl lg:text-6xl xl:text-7xl" />
          </motion.div>{" "}
          <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl  font-bold  uppercase   tracking-tighter ">
            Events{" "}
          </h1>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-8xl  xl:text-9xl font-bold  uppercase   tracking-tighter ">
          {" "}
          management{" "}
        </h1>
      </div>
    </section>
  );
};

export default EventsHero;
