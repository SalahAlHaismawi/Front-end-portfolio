import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Setup from '../public/Setup.png';
import DeskGif from '../public/Desk.gif'; // Import the GIF

type Props = {};

export default function About({}: Props) {
  return (
      <div className="relative flex flex-col h-screen text-center md:text-left w-full mx-auto items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center pt-12">
          <h3 className="uppercase tracking-[20px] text-[#66fcf1] text-xl lg:text-3xl">About</h3>
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col md:flex-row h-full text-center md:text-left px-5 mx-auto items-center justify-center"
        >
          <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-10 pt-10 md:pt-20">
            <div className="w-full md:w-1/2 flex items-center justify-center rounded-xl">
              <Image src={Setup} alt="Setup" className="rounded-xl"/>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:items-start mt-5 md:mt-0">
              <p className="text-[#eee2dc] text-center md:text-left text-lg lg:text-2xl">
                <span className="font-bold underline">Hello!</span> I'm <span className="font-bold">Salah Fayeq Alhaismawi</span>,
                a <span className="font-bold">Full-Stack Developer</span> and <span className="font-bold">AI Enthusiast</span>.
                I create dynamic and user-friendly web and mobile applications using the latest technologies and
                frameworks.
              </p>
              <p className="text-[#eee2dc] text-center md:text-left text-lg lg:text-2xl mt-2">
                You’ll often find me <span className="italic">cooking up new projects</span> in my setup, where
                creativity and productivity meet. I love experimenting with AI and developing innovative
                solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
  );
}
