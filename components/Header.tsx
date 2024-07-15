import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/*social icon */}
        <SocialIcon
          url="https://github.com/SalahAlHaismawi"
          fgColor="#66fcf1"
          bgColor="transparent"
        />

        {/* <SocialIcon
          url="https://facebook.com/jaketrent"
          fgColor="#66fcf1"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="#66fcf1"
          bgColor="transparent"
        /> */}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text=gray-300 cursor-pointer"
      >
        
        <SocialIcon
          className="cursor-point"
            url="mailto:salah322s1@gmail.com"
          network="email"
          fgColor="#66fcf1"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#66fcf1]">
          {" "}
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
