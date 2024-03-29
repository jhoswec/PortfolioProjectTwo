import React, { useState } from "react";

// import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

// import link
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";

// menu variants
const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-primary lg:hidden">
      {/* nav open Button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer dark:text-white"
      >
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white dark:bg-black shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-6 text-primary cursor-pointer dark:text-white"
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul className="dark:text-white h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to={"/"} onClick={() => setOpenMenu(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setOpenMenu(false)}>
              Acerca de mi
            </Link>
          </li>
          <li>
            <Link to={"/portfolio"} onClick={() => setOpenMenu(false)}>
              Portafolio
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => setOpenMenu(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
