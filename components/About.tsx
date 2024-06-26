import React from "react";
import { motion } from "framer-motion";
import Lottie from 'react-lottie-player'
import gif from '../assets/webgif.json'
type Props = {};

export default function About({}: Props) {
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      
    >
      
      <h3 className="absolute top-24  uppercase tracking-[20px] text-[#66fcf1] text-2xl pb-10">
        About
      </h3>

      
      <Lottie
      loop
      animationData={gif}
      play
      style={{ width: 250, height: 250 }}
      className="-mb-10 md:mb-10 mt-10 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600]"
    />
      <div className=" space-y-10 px-0 md:px-10">
        <p className="text-base text-[#eee2dc] text-left">
          I am a highly passionate software developer who seamlessly merges the
          artistic flair of a UI designer with the technical expertise of a
          software engineer. With a keen eye for aesthetics and a solid
          understanding of coding, I create captivating and functional user
          experiences that bridge the gap between creativity and technology.
        </p>
      </div>
    </motion.div>
  );
}
