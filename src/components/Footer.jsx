import React from "react";
import Logo from "../assets/Company-logo/logo.png";
import Underline from "./UnderlineEffect/Underline";

const Footer = ({heading1, heading2, heading3}) => {
  return (
    <section className="bg-page h-screen py-20 rounded-t-3xl px-10 relative">
      <div className="flex">
        {/* Left content */}
        <div className="w-1/2 ">
          <h3 className="text-[6vw] leading-none  uppercase font-bold text-main">
            {heading1}
          </h3>
          <h3 className="text-[6vw] leading-none uppercase font-bold text-primary">
            {heading2}
          </h3>
          <div className="w-60 absolute bottom-0 left-10">
            <img src={Logo} alt="" />
          </div>
        </div>
        {/* right content */}
        <div>
          <h3 className="text-[6vw] leading-none  uppercase font-bold text-main italic">
            {heading3}
          </h3>
          <div className="space-y-2 text-main mt-20">
            <p className="text-xl font-heading cursor-pointer">QL :</p>
            <p className="text-xl font-heading cursor-pointer">
              <span>
                <Underline height={2}>Home</Underline>
              </span>
            </p>
            <p className="text-xl font-heading cursor-pointer">
              <span>
                <Underline height={2}>Categories</Underline>
              </span>
            </p>
            <p className="text-xl font-heading cursor-pointer">
              <span>
                <Underline height={2}>Feedback</Underline>
              </span>
            </p>
            <p className="text-xl font-heading cursor-pointer">
              <span>
                <Underline height={2}>Terms & Conditions</Underline>
              </span>
            </p>
            <p className="text-xl font-heading cursor-pointer">
              <span>
                <Underline height={2}>Help</Underline>
              </span>
            </p>
          </div>
          {/* contact and  socials*/}
          <div className=" text-main mt-20 flex gap-50">
            <div className="space-y-2">
              <h3 className="text-xl font-heading cursor-pointer">C :</h3>
              <p className="text-xl font-heading cursor-pointer">
                <Underline height={2}>+91 9XXXXXXXXX</Underline>
              </p>
              <p className="text-xl font-heading cursor-pointer">
                <Underline height={2}>India</Underline>
              </p>
            </div>
            {/* right socials */}
            <div className="space-y-2 text-main">
              <h3 className="text-xl font-heading cursor-pointer">S :</h3>
              <p className="text-xl font-heading cursor-pointer">
                <a href="">
                  <Underline height={2}>Instagram</Underline>
                </a>
              </p>
              <p className="text-xl font-heading cursor-pointer">
                <a href="">
                  <Underline height={2}>Facebook</Underline>
                </a>
              </p>
              <p className="text-xl font-heading cursor-pointer">
                <a href="">
                  <Underline height={2}>Linkedin</Underline>
                </a>
              </p>
              <p className="text-xl font-heading cursor-pointer">
                <a href="">
                  <Underline height={2}>Twitter</Underline>
                </a>
              </p>
            </div>
          </div>
          <div className="text-main space-y-2 mt-10">
            <p className="text-xl font-heading cursor-pointer">E :</p>
            <p className="text-xl font-heading cursor-pointer">
              <Underline height={2}>hello@vibgyorventures.com</Underline>
            </p>
          </div>

          <div className="mt-13 text-gray-400 text-xl font-heading cursor-pointer">
            {" "}
            <p>
              &copy; Vibgyor Ventures {new Date().getFullYear()}{" "}
              <Underline height={2}>Legal Terms</Underline>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
