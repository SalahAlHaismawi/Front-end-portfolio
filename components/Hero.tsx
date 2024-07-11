import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Personal from '../public/personal.jpg'
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Salah AlHaismawi",
      "Full-Stack Developer",
      "Machine Learning Enthusiast"
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden w-screen">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={Personal}
        alt={'test'}
        width={200}
        height={200}

      />
      <div className="z-20 w-full">
      <h2 className="text-sm uppercase text-[#eee2dc] pb-2 tracking-[15px]">Full Stack Software Engineer</h2>
      <div className="">
      <h1 className=''>
        <span className="text-xl lg:text-6xl font-semibold px-10 text-[#66fcf1] text-justify ">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

      </div>
      <div className="mt-10">
        <Link href="#about"><button className="heroButton">About</button></Link>
       
         <Link href="#skills"><button className="heroButton">Full-Stack Skills</button></Link>
          <Link href="#machinelearningskills"><button className="heroButton">Machine-Learning Skills Skills</button></Link>

       

        
        <Link href="#projects"><button className="heroButton">Projects</button></Link>

     
      </div>
      </div>
    </div>
  );
}
