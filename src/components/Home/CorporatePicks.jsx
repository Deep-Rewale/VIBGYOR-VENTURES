import { div, section } from "motion/react-client";
import React from "react";
import Underline from "../UnderlineEffect/Underline";
import img1 from "../../assets/Home/Corporate Picks/img-1.jpg";
import img2 from "../../assets/Home/Corporate Picks/img-2.jpg";
import img3 from "../../assets/Home/Corporate Picks/img-3.avif";
import img4 from "../../assets/Home/Corporate Picks/img-4.jpg";

const CorporateGifts = [
  {
    name: "Tech & Gadgets",
    image: img1,
    amount: "₹3,999",
  },
  {
    name: "Gift Hampers",
    image: img2,
    amount: "₹2,499",
  },
  {
    name: "Wellness Gifts",
    image: img3,
    amount: "₹1,999",
  },
  {
    name: "Eco Friendly",
    image: img4,
    amount: "₹1,499",
  },
];

const CorporatePicks = () => {
  return (
    <section className="bg-page py-15 px-10 shadow-t-2xl">
      {/* title text */}
      <div>
        <h3 className="text-6xl font-semibold uppercase font-body text-main tracking-tight">
          Festive Corporate Picks
        </h3>
      </div>

      {/* boxes */}
      <div className="border-t border-black mt-8">
        <p className="font-heading  text-4xl text-main leading-none tracking-tight mt-7">
          Handpicked gifts for every{" "}
          <span className="cursor-pointer">
            <Underline>corporate occasion</Underline>
          </span>{" "}
          and{" "}
          <span className="cursor-pointer">
            <Underline>budget</Underline>
          </span>
          .
        </p>
        {/*left content  */}
        <div>
          {CorporateGifts.map((item, index) => (
            <div
              className={`flex mt-20 ${index === 1 || index === 3 ? "flex-row-reverse" : ""}`}
            >
              {/* left text */}
              <div
                className={` w-1/2 space-y-5 ${index === 1 || index === 3 ? "ml-20" : ""}`}
              >
                <h3 className="text-5xl font-semibold text-main">
                  {item.name}
                </h3>
                <p className="text-4xl text-main">
                  <Underline>{item.amount}</Underline>
                </p>
                <button className="rounded-4xl border border-black px-8 py-4 flex  items-center uppercase gap-8 mt-7  text-white bg-black text-xl  cursor-pointer">
                  Check Out{" "}
                  <span className="h-3 w-3 rounded-full bg-white"></span>
                </button>
              </div>
              {/* right image */}
              <div className="w-1/2 rounded-3xl overflow-hidden">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporatePicks;
