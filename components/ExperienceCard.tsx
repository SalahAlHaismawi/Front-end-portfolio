import React from 'react'
import { motion } from "framer-motion";


type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
        <motion.img  
        initial = {{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center"
        src="https://avatars.githubusercontent.com/u/77612931?s=400&u=2e83f03bb951a089f9c77804dcebf5dacd72a1c6&v=4"

        /> 
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Ceo Of Papafam</h4>
            <p className='font-bold text-2xl mt-1'>PAPAFAM</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded full' src="https://avatars.githubusercontent.com/u/77612931?s=400&u=2e83f03bb951a089f9c77804dcebf5dacd72a1c6&v=4" />
            </div>
            <p> Started work... - Ended..</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard