import React from "react";
import UnderLine from "../../components/UnderlineEffect/Underline";
import img1 from "../../assets/EventsM/soluitonsOffer/Corporate-Events.jpg";
import img2 from "../../assets/EventsM/soluitonsOffer/Virtual-Events.jpg";
import img3 from "../../assets/EventsM/soluitonsOffer/MICE.png";
import img4 from "../../assets/EventsM/soluitonsOffer/Celebrity-Engagements.avif";
import img5 from "../../assets/EventsM/soluitonsOffer/Weddings.avif";
import img6 from "../../assets/EventsM/soluitonsOffer/Retail-Exhibitions.jpg";

const Events = [
  {
    eventName: "Corporate Events",
    disc: "From conferences to promotional events to parties, we can do it all! We develop the creative, design, reporting, logistic and technology systems for the widest possible range of events.",
    img: img1,
  },
  {
    eventName: "Virtual Events",
    disc: "Keeping the current situation in mind, the trend now is virtual events! We offer strategic, data driven and client-centric solution to maximize your brand’s outreach. Stay Virtual, Stay Connect!",
    img: img2,
  },

  {
    eventName: "MICE",
    disc: "Meetings, Incentives, Conferences & Exhibitions. We outright perfection and execute events that are larger than life with the help of our creative team to communicate what a brand truly wants.",
    img: img3,
  },
  {
    eventName: "Celebrity Engagements",
    disc: "Consumer culture in India is driven by popularity. We work with global faces to convey messages, built relationships to engage, educate & entertain your audience for you.",
    img: img4,
  },

  {
    eventName: "Weddings",
    disc: "From upholding tradition to breaking the monotony, our team helps to make the wedding even more special than it is, right from the pre-wedding up to post the wedding!",
    img: img5,
  },
  {
    eventName: "Retail & Exhibitions",
    disc: "Foresight has solidified its reputation in stand & interior designing for event & exhibitions by using high quality products, detailed approach & timely delivery.",
    img: img6,
  },
];

const SolutionsOfferE = () => {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="0.001"
      className="bg-page py-20 px-10 rounded-t-2xl"
    >
      {/* title */}
      <div>
        <h2 className="text-5xl text-main font-heading leading-none tracking-tight max-w-[1100px] text-main py-5">
          End-to-end event solutions crafted with{" "}
          <span className="cursor-pointer">
            <UnderLine height={2}>creativity</UnderLine>
          </span>{" "}
          ,
          <span className="cursor-pointer">
            <UnderLine height={2}>precision</UnderLine>
          </span>
          , and{" "}
          <span className="cursor-pointer">
            <UnderLine height={2}>impact</UnderLine>
          </span>
          .
        </h2>
      </div>
      {/* solution we offer */}
      <div className="border-t border-gray-400 mt-15">
        <div className="mt-16">
          {Events.map((items, index) => (
            <div
              key={index}
              className={`flex  mb-15 ${index === 1 || index === 3 || index === 5 ? "flex-row-reverse" : ""}`}
            >
              {/*  text  */}
              <div
                className={`text w-1/2 space-y-7  ${index === 1 || index === 3 || index === 5 ? "ml-10" : ""}`}
              >
                <h3 className="text-5xl font-semibold text-main cursor-pointer">
                  <UnderLine height={2}>{items.eventName}</UnderLine>
                </h3>
                <p className="text-2xl text-main">{items.disc}</p>
              </div>
              {/* images */}
              <div className="w-1/2">
                <img
                  loading="lazy"
                  className="rounded-2xl"
                  src={items.img}
                  alt={items.eventName}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOfferE;
