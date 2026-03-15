import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaTruckMoving } from "react-icons/fa";
import Underline from "../UnderlineEffect/Underline";

const ChooseContent = [
  {
    title: "Uncompromising Quality",
    para: "Every product and experience undergoes rigorous quality checks to meet premium corporate standards.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Customization at Core",
    para: "Tailor-made gifting and event solutions crafted to reflect your brand identity and values.",
    icon: <FaGift />,
  },
  {
    title: "Seamless Logistics",
    para: "TPan-India sourcing, packaging, and delivery with reliable execution and timely fulfillment.",
    icon: <FaTruckMoving />,
  },
];

const OurVision = () => {
  return (
    <section className="bg-[#56bdb4] py-20 px-10 rounded-t-3xl">
      {/* title text */}
      <div className="space-y-5">
        <h3 className="text-6xl  font-heading tracking-tight">
          Why Choose Vibgyor Venture
        </h3>
        {/* <p className='text-4xl  italic font-body tracking-tight'> “Every gift tells a story. Every event creates a memory.”</p> */}
      </div>
      {/* why we chose content */}
      <div className="space-y-7 mt-10">
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
              Meaningful gifting is not about products - it’s about creating
              moments that people remember, value, and emotionally connect with.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
              At Vibgyor Venture, our vision is to redefine corporate gifting
              and professional events by transforming them into powerful,
              meaningful brand experiences. We strive to go beyond conventional
              solutions - creating moments that communicate purpose, evoke
              emotion, and strengthen lasting relationships.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
              Our aspiration is to become India’s most trusted corporate
              partner, known for our creativity, reliability, and attention to
              detail, where every gift, celebration, and event reflects
              elegance, authenticity, and enduring emotional value.
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
              At Vibgyor Venture, our mission is to deliver thoughtfully curated
              corporate gifting and event solutions that strengthen meaningful
              relationships between organizations and their people.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
              We are committed to excellence through uncompromising quality,
              personalized customization, timely execution, and seamless
              logistics. By managing every detail with precision and care, we
              ensure that each experience not only meets expectations but
              consistently exceeds them-leaving a lasting impression of trust,
              appreciation, and brand value.
            </p>
            <p className="max-w-lg font-body text-xl mt-11">
              By combining creativity with precision, we help brands communicate
              appreciation, trust, and value — turning ordinary moments into
              meaningful milestones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
