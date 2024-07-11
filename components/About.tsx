import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Setup from '../public/Setup.png';
import DeskGif from '../public/Desk.gif'; // Import the GIF

type Props = {};

export default function About({}: Props) {
  return (
    <div className='relative flex flex-col h-screen text-center md:text-left w-full mx-auto items-center justify-center gap-5'>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#66fcf1] text-xl lg:text-3xl">About</h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col md:flex-row h-screen text-center md:text-left px-5 mx-auto items-center justify-center"
      >
        <div className="w-full flex flex-col md:flex-row items-start justify-center md:space-x-10 border-4 border-[#66fcf1] p-10 rounded-xl">
          <div className="w-full md:w-1/2 flex items-center justify-center rounded-xl">
            <Image src={Setup} alt="Setup" className="rounded-xl" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-5 md:mt-0">
            <p className="text-[#eee2dc] text-justify text-lg lg:text-4xl">
              Hello! I'm Salah Fayeq Alhaismawi, a dedicated Full-Stack Developer and AI Enthusiast. With a passion for
              creating dynamic and user-friendly websites and applications, I specialize in building seamless full-stack
              solutions for both web and mobile platforms. My expertise spans across the latest technologies and
              frameworks, enabling me to craft robust and scalable applications.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
