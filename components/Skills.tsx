import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className="absolute top-24 mt-10 uppercase tracking-[20px] text-[#66fcf1] text-2xl">Skills</h3>
    </motion.div>
  )
}

export default Skills