import React from "react";
import { motion } from "motion/react";
import { GoArrowUpRight } from "react-icons/go";
import ButtonAnimation from "../UnderlineEffect/ButtonAnimation";

const ReadyToGifting = () => {
  return (
    <section className="py-30 w-full bg-[#56bdb4] flex flex-col justify-center items-center">
      <div className="text-center font-bold uppercase  ">
        <h3 className="tracking-tight  text-[10vw] leading-none">Ready</h3>
        <h3 className=" tracking-tight text-[10vw] leading-none">to start</h3>
        <h3 className=" tracking-tight text-[10vw] leading-none"> Gifting</h3>
      </div>
      {/* buttons */}
      <div className="space-y-4 text-center flex flex-col justify-center items-center">
        <div>
          <motion.button
            initial="rest"
            whileHover="hover"
            className="rounded-4xl border border-black px-10 py-4 flex items-center uppercase gap-8 mt-7 text-white bg-black text-xl cursor-pointer"
          >
            Start gifting
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 3 },
              }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="w-3 h-3 bg-white rounded-full flex items-center justify-center overflow-hidden"
            >
              <motion.div
                variants={{
                  rest: { opacity: 0, scale: 0 },
                  hover: { opacity: 1, scale: 0.5 }, // ← 0.35 because parent is scaled x3
                }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              >
                <GoArrowUpRight color="black" size={16} />
              </motion.div>
            </motion.div>
          </motion.button>
        </div>
        <div className="text-2xl uppercase">or</div>
        <div>
          <ButtonAnimation
            className=" text-black border border-black px-10 py-4 rounded-4xl font-semibold font-heading uppercase"
            fillColor="black"
            hoverTextColor="white"
          >
            hello@vibgyorventures.com
          </ButtonAnimation>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGifting;
