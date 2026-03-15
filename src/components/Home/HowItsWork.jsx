import React from "react";
import { FaBoxes } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
import { FaTruck } from "react-icons/fa";

const content = [
  {
    Icon: <FaBoxes />,
    para: "Tell us your budget, quantity, branding needs & timelines.",
    Btn: "Share Your Requirement",
  },

  {
    Icon: <IoIosGift />,
    para: "Premium products, branding mockups & approvals.",
    Btn: "We Curate & Customize",
  },
  {
    Icon: <FaTruck />,
    para: "Pan-India delivery with seamless coordination.",
    Btn: "Deliver & Execute",
  },
];

const HowItsWork = () => {
  return (
    <section className="py-18 px-10">
      <h3 className="text-primary-dark text-6xl font-semibold uppercase font-heading">
        How its works
      </h3>
      <div className="full-box border-t border-black mt-8 grid grid-cols-4 gap-5 ">
        {content.map((item, index) => (
          <div
            key={index}
            className={`p-5 border mt-8 h-120 w-full grid place-items-center text-center  ${index === 0 ? "col-span-2 bg-primary-dark" : "col-span-1 bg-[#212121]"} relative rounded-2xl shadow-2xl `}
          >
            <div className="space-y-5">
              <div>
                <span className="flex justify-center text-4xl text-[#F4F4F4]">
                  {item.Icon}
                </span>
              </div>
              <p className="text-xl font-heading font-semibold tracking-tight text-[#F4F4F4]">
                {item.para}
              </p>
              <button className="absolute bottom-10 left-10 text-[#F4F4F4] border border-[#F4F4F4] p-3 rounded-3xl font-semibold">
                {item.Btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItsWork;
