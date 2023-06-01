import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Salah AlHaismawi",
      "UI/UX Design",
      "Front-End",
      "Back-End",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden w-screen">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/77612931?s=400&u=2e83f03bb951a089f9c77804dcebf5dacd72a1c6&v=4"
      />
      <div className="z-20">
      <h2 className="text-sm uppercase text-[#eee2dc] pb-2 tracking-[15px]">Software Engineer</h2>
      <div className="h-[100px]">
      <h1>
        <span className="text-4xl lg:text-6xl font-semibold px-10 text-[#66fcf1] ">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>

      </div>
      <div className="mt-10">
        <Link href="#about"><button className="heroButton">About</button></Link>
       
        {/* <Link href="#experience"><button className="heroButton">Experience</button></Link> */}
        
        <Link href="Skills"><button className="heroButton">Skills</button></Link>

        
        <Link href="Projects"><button className="heroButton">Projects</button></Link>

     
      </div>
      </div>
    </div>
  );
}
