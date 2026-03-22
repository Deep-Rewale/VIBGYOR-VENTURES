import { div, section } from "motion/react-client";
import React from "react";
import Underline from "../UnderlineEffect/Underline";
import { CgPerformance } from "react-icons/cg";
import { SiStorybook } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";


const OUREdge = [
  {
    name: "Uniting",
    icon: <FaUnity />,
    para: "We bring together your event with purpose and our extensive experience makes it memorable.",
  },
  {
    name: "Storytelling",
    icon: <SiStorybook />,
    para: "Each brand has a journey to tell, we believe in creating appealing & striking visuals to back it up.",
  },
  {
    name: "Performing",
    icon: <CgPerformance />,
    para: "Our focus is to attain utmost return on investment and pin down the potential audience for you.",
  },
];

const High = [
  {
    num : "1000+",
    sub : "Projects Completed"
  },
{
    num : "15+",
    sub : "Years' Experience​"
  },
  {
    num : "60+",
    sub : "Clients Served​"
  },
   {
    num : "30+",
    sub : "Team Members​"
  }
]


const CorporatePicks = () => {
  return (
    <section className="bg-page py-20 px-10 shadow-t-3xl rounded-t-3xl">
      {/* title text */}
      <div>
        <h3 className="text-6xl font-semibold uppercase font-body text-main tracking-tight">
          OUR Edge
        </h3>
      </div>

      {/* boxes */}
     <div className="border-t border-black mt-5">
      <div className="flex   max-w-6xl mx-auto ">
      {OUREdge.map((item,index)=> (
        <div key={index} className="p-13 flex flex-col items-center space-y-3">
         <p className="text-5xl text-primary ">{item.icon}</p>
         <h3 className="text-2xl font-bold uppercase font-heading text-main">{item.name}</h3>
         <p  className="text-center text-lg">{item.para}</p>
        </div>
      ))}
      </div>
      
      {/*  OUR HIGHLIGHTS */}

      <div className="border-t border-black mt-5">
         <h3 className="text-6xl font-semibold uppercase font-body text-main tracking-tight mt-10">
          OUR HIGHLIGHTS
        </h3>
        <div className="grid grid-cols-4 mx-auto max-w-7xl text-center  mt-14">
         {High.map((content,i)=>(
          <div className="space-y-3" key={i}>
           <h3 className="text-7xl text-main font-semibold">{content.num}</h3> 
           <p className="text-2xl font-heading cursor-pointer"><Underline>{content.sub}</Underline></p> 
          </div>
         ))} 
        </div>
      </div >
     </div>

    </section>
  );
};

export default CorporatePicks;
