import React from "react";
import Img1 from "../../assets/About/Team/Bhavesh-Soni.jpg";
import Img2 from "../../assets/About/Team/Aditya-Mehra.jpg";
import Img3 from "../../assets/About/Team/Nisar-Shaikh.jpg";
import Img4 from "../../assets/About/Team/Devyani-Chandarana.jpg";
import Img5 from "../../assets/About/Team/roshan.png";
import Img6 from "../../assets/About/Team/Shalik-Kesharwani.jpg";
import Img7 from "../../assets/About/Team/Agnivesh-Zikar.jpg";
import { div } from "motion/react-client";
import Underline from "../UnderlineEffect/Underline";

const team = [
  {
    name: "Bhavesh Soni",
    position: "Director",
    img: Img1,
  },
  {
    name: "Aditya Mehra",
    position: "Chief Creative Officer (CCO)",
    img: Img2,
  },
  {
    name: "Nisar Shaikh",
    position: "Head – Events",
    img: Img3,
  },
  {
    name: "Devyani Chandarana",
    position: "Business Manager – Events",
    img: Img4,
  },
  {
    name: "Roshan Gupta",
    position: "Head – Digital Marketing",
    img: Img5,
  },
  {
    name: "Shalik Kesharwani",
    position: "Head – Branding & Advertising",
    img: Img6,
  },
  {
    name: "Agnivesh Zikar",
    position: "Asst. Head – Event Operations",
    img: Img7,
  },
  {
    name: "Shankar Shit",
    position: "Project Manager",
    img: "",
  },
];
const Team = () => {
  return (
    <section className="bg-page py-30 px-10 shadow-2xl rounded-t-2xl">
      {/* team title */}
      <div className="space-y-2">
        <p className="font-heading text-6xl text-main">
          Who is behind the scenes
        </p>
        <h3 className="font-body text-main font-semibold text-7xl tracking-tighter">
          Core Team
        </h3>
      </div>

      {/* Team images */}
      <div className="border-t border-gray-400 mt-8 ">
        <div className="grid grid-cols-2 gap-20 mt-15">
          {team.map((item, index) => (
            <div className="h-auto w-full space-y-5 " key={index}>
              <img
                className="h-full w-full object-cover  object-center rounded-xl"
                src={item.img}
                alt={item.name}
                loading="lazy"
              />
              <p className="text-2xl font-heading text-main tracking-tight cursor-pointer ">
                <Underline height={1}>{item.name}</Underline>,{" "}
                <Underline height={1}>{item.position}</Underline>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
