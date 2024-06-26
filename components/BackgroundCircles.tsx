import React from 'react'
import { motion } from "framer-motion";

type Props = {}

const BackgroundCircles = (props: Props) => {
  return ( 
    <motion.div 
    initial ={{
        opacity: 0,

    }}
    animate = {{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1,0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%","20%","50%","80%","20%"]
    }}
    className='relative flex justify-center items-center'>
        <div className="absolute border border-[#1f2833] rounded-full w-[200px] h-[200px] mt-52 animate-ping"/>
        <div className="rounded-full border border-[#1f2833]  w-[300px] h-[300px] mt-52 absolute"/>
        <div className="rounded-full border border-[#1f2833]  w-[500px] h-[500px] mt-52 absolute"/>
        <div className='rounded-full border border-[#1f2833] opacity-20 h-[650 ] w-[650] absolute mt-53 animate-pulse ' />
        <div className='absolute border border-[#1f2833] rounded-full w-[800px] h-[800px] mt-52'/>
        
    </motion.div>
  )
}

export default BackgroundCircles