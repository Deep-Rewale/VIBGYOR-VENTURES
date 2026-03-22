import React, { useState, useRef } from "react";
import Underline from "../UnderlineEffect/Underline";
import FounderImage1 from "../../assets/Home/Testimonials/Founderimage1.png";
import FounderImage2 from "../../assets/Home/Testimonials/Founderimage2.jpg";
import FounderImage3 from "../../assets/Home/Testimonials/Founderimage3.jpg";
import FounderImage4 from "../../assets/Home/Testimonials/Founderimage4.jpg"
import FounderImage5 from "../../assets/Home/Testimonials/Founderimage5.jpg";
import FounderImage6 from "../../assets/Home/Testimonials/Founderimage6.jpg";
import FounderImage7 from "../../assets/Home/Testimonials/Founderimage7.jpg";
import FounderImage8 from "../../assets/Home/Testimonials/Founderimage8.jpg";
import FounderImage9 from "../../assets/Home/Testimonials/Founderimage9.jpg";
import FounderImage10 from "../../assets/Home/Testimonials/Founderimage10.jpg";
import { motion, AnimatePresence } from "motion/react";

const reviews = [
  {
    CompanyName: "Marketing Manager. EPSON",
    FounderName: "Ajay Goud",
    FounderImage: FounderImage1,
    FounderReview:
      "This was one of the best organized events, smooth as silk, Foresight did a Fab job. They were in line with my expectations, my last-minute requirements were handled without glitches. I definitely recommend them.",
  },
    {
    CompanyName: " Padmashri Awardee",
    FounderName: "Kailash Kher",
    FounderImage: FounderImage2,
    FounderReview:
      "One Stop Solutions for events & media related work . I have personally experienced their work & they are simply superb ‘ Hum apke sath zindagi bhar judey Rahengey ‘",
  },
     {
    CompanyName: "National award-winning Director",
    FounderName: "Nitin Kakkar",
    FounderImage: FounderImage3,
    FounderReview:
      "Foresight Group exceeded our expectations! They showed complete professionalism and fantastic skills which ensured the project was delivered before the deadlines.",
  },

  {
    CompanyName: "Brand Manager. Tata Communications",
    FounderName: "Rohit Mehta",
    FounderImage: FounderImage4,
    FounderReview:
      "Their execution was flawless and highly professional. The team understood our brand vision and delivered an outstanding event experience that truly stood out.",
  },
  {
    CompanyName: "CEO. Urban Hive Pvt Ltd",
    FounderName: "Neha Kapoor",
    FounderImage: FounderImage5,
    FounderReview:
      "Working with them was seamless. From planning to execution, everything was handled with precision and creativity. Highly recommended for corporate events.",
  },
  {
    CompanyName: "Director. Redstone Productions",
    FounderName: "Arjun Malhotra",
    FounderImage: FounderImage6,
    FounderReview:
      "A highly creative and dependable team. They transformed our ideas into a powerful visual experience. The attention to detail was truly impressive.",
  },
  {
    CompanyName: "HR Head. Infosys",
    FounderName: "Sneha Iyer",
    FounderImage: FounderImage7,
    FounderReview:
      "They managed our corporate event with great efficiency and professionalism. The entire process was smooth, and the results exceeded expectations.",
  },
  {
    CompanyName: "Founder. PixelCraft Studio",
    FounderName: "Vikram Desai",
    FounderImage: FounderImage8,
    FounderReview:
      "Exceptional creativity and execution. Their team brings fresh ideas and ensures every project is delivered with perfection and quality.",
  },
  {
    CompanyName: "Marketing Lead. Reliance Digital",
    FounderName: "Pooja Sharma",
    FounderImage: FounderImage9,
    FounderReview:
      "They are extremely reliable and innovative. The campaign they created for us was impactful and delivered great engagement results.",
  },
  {
    CompanyName: "COO. Zenith Events",
    FounderName: "Karan Khanna",
    FounderImage: FounderImage10,
    FounderReview:
      "A fantastic team to work with. Their professionalism, quick response, and ability to handle complex requirements make them stand out.",
  },

];

const Testimonials = () => {
  const [indexOpen, setIndexOpen] = useState(null);
  const contentRef = useRef(null);
  return (
    <section className="bg-[#56bdb4] py-20 px-10 ">
      <h3 className="text-6xl font-heading tracking-tight  font-semibold uppercase">
        our Testimonials
      </h3>
      <div className="mt-1">
        <h3 className="text-3xl tracking-tight  cursor-pointer mt-2 ">
          What they say :
        </h3>
        {/* TESTMONIALS CONTENT */}
        <div className="testmonialFullContent border-t  border-gray-500   mt-10">
          {reviews.map((rev, index) => {
            return (
              <div key={index} className="border-b border-gray-500 ">
                <div className="flex py-5">
                  <div className="left-content w-1/2">
                    <h3 className="text-xl font-heading tracking-tight cursor-pointer">
                      <Underline height={1}>{rev.CompanyName}</Underline>
                    </h3>
                  </div>
                  <div className="right-content  w-1/2 ">
                    <div className="flex justify-between px-10">
                      <h3 className="text-xl font-heading tracking-tight">
                        {rev.FounderName}
                      </h3>
                      <button
                        onClick={() =>
                          setIndexOpen(indexOpen === index ? null : index)
                        }
                        className={`cursor-pointer text-xl font-heading tracking-tight ${indexOpen === index ? "text-gray-600" : "text-black"}  `}
                      >
                        <Underline height={1}>READ</Underline>
                      </button>
                    </div>
                    {/* expand when read gets clicked */}
                    <AnimatePresence>
                      {indexOpen === index && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: contentRef.current
                              ? contentRef.current.scrollHeight
                              : "auto",
                            opacity: 1,
                          }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.6, ease: [0.83, 0, 0.17, 1] },
                            opacity: { duration: 0.25 },
                          }}
                          className="overflow-hidden"
                        >
                          {/* inner content */}
                          <div
                            ref={contentRef}
                            className="expandeble-content pt-16 space-y-7 pb-7 max-w-xl "
                          >
                            <img
                              className="h-40  object-contain rounded-2xl"
                              src={rev.FounderImage}
                              alt={rev.FounderName}
                            />
                            <p className="text-xl font-body leading-normal">
                              {rev.FounderReview}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
