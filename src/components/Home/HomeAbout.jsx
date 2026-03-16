import React from "react";
import { motion } from "framer-motion";
import Underline from "../../components/UnderlineEffect/Underline";
import Helping from "../../assets/Home/AboutUs/helping.jpg";
import { GoArrowUpRight } from "react-icons/go";
const HomeAbout = () => {
  return (
    <section className="w-full rounded-t-3xl bg bg-[#56bdb4] py-20 px-10">
      <h1 className="text-7xl text-black font-heading leading-none tracking-tight max-w-[1500px]">
        Curated corporate gifting and premium event solutions that help brands
        express{" "}
        <span className="cursor-pointer">
          {" "}
          <Underline> appreciation</Underline>
        </span>
        and{" "}
        <span className="cursor-pointer">
          <Underline>create</Underline>
        </span>{" "}
        lasting{" "}
        <span className="cursor-pointer">
          <Underline>impressions</Underline>
        </span>
      </h1>
      {/*  */}
      <div className="border-t w-full border-gray-800 mt-20 ">
        {/* about us content */}
        <div className="about-us pt-12 flex ">
          {/* left text */}
          <div className="w-1/2 ">
            <h2 className="text-xl font-body">About Vibgyor Venture:</h2>
          </div>
          {/* right textf */}
          <div className="w-1/2 ">
            <p className="max-w-lg font-body text-xl">
              With over a decade of industry expertise, Vibgyor Venture bridges
              the gap between brands and people through thoughtfully curated
              corporate gifting solutions and meticulously planned corporate
              events.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
              Specialize in transforming business gestures into meaningful
              experiences-helping organizations express appreciation, strengthen
              relationships, and leave a lasting impression.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
              Every gift we curate and every event we execute reflects our
              commitment to quality, creativity, and seamless execution.From
              premium executive gifts to large-scale conferences, we deliver
              end-to-end solutions that reflect quality, precision, and brand
              excellence.
            </p>
          </div>
        </div>
        {/* how can we help */}
        <div className="border-t w-full border-gray-800 mt-20">
          <div className="pt-6 flex">
            {/* left content */}
            <div className="w-1/2">
              <h3 className="text-6xl font-heading">How we can help:</h3>
              {/* button */}
              <motion.button
                initial="rest"
                whileHover="hover"
                className="rounded-4xl border border-black px-8 py-4 flex items-center uppercase gap-8 mt-7 text-white bg-black text-xl cursor-pointer"
              >
                Read more
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
            {/* right content */}
            <div className="w-1/2">
              <img className="rounded-2xl" src={Helping} alt="helping image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
