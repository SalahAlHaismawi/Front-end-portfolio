import React from "react";
import { motion } from "framer-motion";
// import Lottie from 'react-lottie-player'
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

      
    {/*  <Lottie*/}
    {/*  loop*/}
    {/*  animationData={gif}*/}
    {/*  play*/}
    {/*  style={{ width: 250, height: 250 }}*/}
    {/*  className="-mb-10 md:mb-10 mt-10 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600]"*/}
    {/*/>*/}
      <div className=" space-y-10 px-0 md:px-10">
        <p className="text-base text-[#eee2dc] text-center">
          Hello! I'm Salah Fayeq Alhaismawi, a dedicated Full-Stack Developer and AI Enthusiast. With a passion for creating dynamic and user-friendly websites and applications, I specialize in building seamless full-stack solutions for both web and mobile platforms. My expertise spans across the latest technologies and frameworks, enabling me to craft robust and scalable applications.
            Driven by my enthusiasm for artificial intelligence, I am committed to integrating AI into practical and accessible software solutions. Whether it's developing sophisticated web applications or enhancing mobile user experiences, my goal is to leverage the power of AI to solve real-world problems and make technology more intuitive and impactful for users.
        </p>
      </div>
    </motion.div>
  );
}
