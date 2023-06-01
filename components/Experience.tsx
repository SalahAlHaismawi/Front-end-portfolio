import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="h-screen overflow-hidden">

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24  uppercase tracking-[20px] text-[#66fcf1] text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#66fcf1]/80">
        <ExperienceCard />   
        
      

      </div>
    </motion.div>
    </div>
  );
};

export default Experience;
