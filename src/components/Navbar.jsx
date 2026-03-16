import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Company-logo/logo.png";
import NavlinkAnimation from "./UnderlineEffect/NavlinkAnimation";

const Links = [
  {
    Name: "Home",
    link: "/",
  },
  {
    Name: "Categories",
    link: "/categories",
  },
  {
    Name: "Feedback",
    link: "/feedback",
  },
  {
    Name: "Terms & Conditions",
    link: "/termsConditions",
  },
  {
    Name: "Help",
    link: "/help",
  },
  {
    Name: "Login",
    link: "/login",
  },
  {
    Name: "Sign up",
    link: "/signUp",
  },
];
const Navbar = () => {
  return (
    <nav className=" fixed z-[999] w-full px-13  font-heading flex justify-between items-center backdrop-blur-md bg-white/10">
      <div className="left-logo  w-60">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="right-links flex gap-10">
        {Links.map((item, index) => (
           <Link
            className={`text-xl capitalize ${index === 5 && "ml-32"}`}
            key={index}
            to={item.link}
          ><NavlinkAnimation>
            {item.Name}
          </NavlinkAnimation>
          </Link>
      
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
