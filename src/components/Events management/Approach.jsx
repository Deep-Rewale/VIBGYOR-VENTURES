import React from "react";
import ButtonAnimation from "../../components/UnderlineEffect/ButtonAnimation";
import { FaRegLightbulb } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { MdOutlineStickyNote2 } from "react-icons/md";

const content = [
  {
    Icon: <FaRegLightbulb />,
    para: "The goal is to define the project at a macro level and tie it along with all desired deliverables.",
    Btn: "Project Initiation",
  },

  {
    Icon: <LuBrain />,
    para: "Keeping the event purpose in mind, team gets together to brainstorm and gather their resources.",
    Btn: "Brain Storming",
  },
  {
    Icon: <MdOutlineStickyNote2 />,
    para: "Once actionable of the event are approved its time to get on with the execution making it a success.",
    Btn: "Big Idea & Execution",
  },
];

const Approach = () => {
  return (
    <section className="py-18 px-10 overflow-hidden">
      <div data-scroll data-scroll-speed="-.7">
        <h3 className="text-primary-dark text-6xl font-semibold uppercase font-heading">
          Approach we follow
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
                <div className="absolute bottom-10 left-10">
                  <ButtonAnimation
                    className=" text-[#F4F4F4] border border-[#F4F4F4] p-3 rounded-3xl font-semibold font-heading"
                    fillColor="white"
                    hoverTextColor="black"
                  >
                    {item.Btn}
                  </ButtonAnimation>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
