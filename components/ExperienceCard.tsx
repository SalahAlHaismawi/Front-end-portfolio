import React from "react";
import { motion } from "framer-motion";
import rocksolid from '../assets/rocksolid.png'
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900] snap-center bg-[#1f2833] hover:opacity-100 opacity-40 mt-10 cursor-pointer transation-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center"
        src="https://i.ibb.co/fkp1Jmz/rocksolid.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">RockSolid Solutions</h4>
        <p className="font-bold text-2xl mt-1">RockSolid</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded full"
            src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
          />
          <img
            className="h-10 w-10 rounded full"
            src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
          />
          <img
            className="h-10 w-10 rounded full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          />
        </div>
        <p className="uppercase py-5 text-[#eee2dc]"> 2020 - 2023</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Developed Websites, Applications for clients around the world, but the majority where in the United Arab Emirates</li>
          <li>Worked on Internal systems in the pharmaceutical industry</li>
          
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
