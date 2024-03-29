import React, { useEffect, useState } from "react";

// import Link
import { Link } from "react-router-dom";

// import components
// import DarkModel from "../components/DarkModel";
import DarkModel from "../components/DarkModel";
import Socials from "../constants/Socials.jsx";
import MobileNav from "../components/MobileNav";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [bg, setBg] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg
          ? "bg-[#EDF4FF] dark:bg-[#090f24] h-[4rem] lg:h-[5.5rem]"
          : "h-[5rem] lg:h-[6.5rem]"
      } flex items-center fixed w-full px-[2rem] lg:px-[5rem] z-30 transition-all duration-300`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain"
            onClick={() => {
              window.scrollTo(0, 0);
              setActive("");
            }}
          />
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav className="hidden lg:flex gap-x-12 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`/${link.id}`}
              className={`${
                active === link.title
                  ? "text-tertiary"
                  : "text-primary dark:text-white"
              } hover:text-tertiary dark:hover:text-tertiary text-[.85rem] font-medium cursor-pointer uppercase ease-in-out duration-300 transition-colors`}
              onClick={() => {
                window.scrollTo(0, 0);
                setActive(link.title);
              }}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* darkmode */}
      <DarkModel />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Navbar;
