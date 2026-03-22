import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaTruckMoving } from "react-icons/fa";
import Underline from "../UnderlineEffect/Underline";

const ChooseContent = [
  {
    title: "Uncompromising Quality",
    para: "We deliver premium standards across events, branding and corporate gifting with strict quality checks at every stage.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Customization at Core",
    para: "Every solution is tailored - from creative campaigns to event experiences and curated gifting that reflects your brand identity.",
    icon: <FaGift />,
  },
  {
    title: "Seamless Execution",
    para: "From planning to delivery, we ensure smooth execution with reliable timelines across pan-India operations.",
    icon: <FaTruckMoving />,
  },
];

const OurVision = () => {
  return (
    <section className="bg-[#56bdb4] py-20 px-10 rounded-t-3xl ">
      {/* title text */}
      <div className="space-y-5">
        <h3 className="text-6xl  font-heading tracking-tight">
          Why Choose Vibgyor Venture
        </h3>
        {/* <p className='text-4xl  italic font-body tracking-tight'> “Every gift tells a story. Every event creates a memory.”</p> */}
      </div>
      {/* why we chose content */}
      <div className="space-y-7 mt-10 ">
        {ChooseContent.map((choose, index) => (
          <div className="space-y-4">
            <span className="flex gap-5">
              <p className="text-3xl">{choose.icon}</p>
              <h3 className="text-3xl font-heading tracking-tight capitalize">
                <span className="cursor-pointer">
                  <Underline>{choose.title}</Underline>:
                </span>
              </h3>
            </span>
            <p className="text-2xl font-heading ">{choose.para}</p>
          </div>
        ))}
      </div>
      {/* Our Vision */}
      <div className="border-t border-black mt-20">
        <div className="flex pt-12">
          {/* left text  */}
          <div className="w-1/2 ">
            <h3 className="text-xl font-body">Our Vision :</h3>
          </div>

          {/* right text */}
          <div className="w-1/2 ">
            <p className="max-w-lg font-body text-xl">
              We believe meaningful experiences go beyond products - they create lasting emotional connections.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
              At Vibgyor Venture, our vision is to redefine corporate gifting, branding, and events into impactful brand experiences that inspire, engage, and build lasting relationships.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
             Our goal is to become a trusted partner for businesses across India, known for creativity, reliability, and delivering experiences that reflect true brand value.
            </p>
          </div>
        </div>
      </div>

      {/* our misson */}
      <div className="border-t border-black mt-20">
        <div className="flex pt-12">
          {/* left text  */}
          <div className="w-1/2 ">
            <h3 className="text-xl font-body">Our Mission :</h3>
          </div>

          {/* right text */}
          <div className="w-1/2 ">
            <p className="max-w-lg font-body text-xl">
             Our mission is to deliver thoughtful gifting, branding, and event solutions that strengthen meaningful connections between brands and people.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
              We focus on quality, customization, and seamless execution - ensuring every experience is delivered with precision, care, and consistency.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
             By blending creativity with execution, we help brands turn everyday moments into memorable experiences that build trust and long-term value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
