import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Company-logo/logo.png";
import NavlinkAnimation from "./UnderlineEffect/NavlinkAnimation";
import { motion, AnimatePresence } from "framer-motion";

const Links = [
  { Name: "Home", link: "/" },
  { Name: "About us", link: "/About" },
  {
    Name: "Services",
    link: null,
    children: [
      { Name: "Event Management", link: "/event-management" },
      { Name: "Branding & Advertising", link: "/branding&advertising" },
      { Name: "Corporate Gifting", link: "/corporate-gifting" },
    ],
  },
  {
     Name: "Contact", link: "/Contact"
  },

  { Name: "Login", link: "/login" },
  { Name: "Sign up", link: "/signUp" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="fixed z-[999] w-full px-13 font-heading flex justify-between items-center backdrop-blur-md bg-white/10">
      <div className="left-logo w-60">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="right-links flex gap-10">
        {Links.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => item.children && setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {/* top level link */}
            {item.link ? (
              <Link
                className={`text-xl capitalize ${index === 4 && "ml-32"}`}
                to={item.link}
              >
                <NavlinkAnimation>{item.Name}</NavlinkAnimation>
              </Link>
            ) : (
              <span className="text-xl capitalize cursor-pointer">
                <NavlinkAnimation>{item.Name}</NavlinkAnimation>
              </span>
            )}

            {/* invisible bridge to close gap between nav and dropdown */}
            {item.children && openDropdown === index && (
              <div className="absolute top-full left-0 w-full h-3" />
            )}

            {/* dropdown */}
            <AnimatePresence>
              {item.children && openDropdown === index && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute top-[calc(100%+12px)] left-0 bg-page shadow-xl rounded-2xl py-3 flex flex-col min-w-[240px] z-50"
                >
                  {item.children.map((child, childIndex) => (
                    <motion.div
                      key={childIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: childIndex * 0.06,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="px-6 py-3 text-lg capitalize hover:bg-gray-50"
                    >
                      <Link to={child.link} className="block w-full">
                        <NavlinkAnimation>{child.Name}</NavlinkAnimation>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;