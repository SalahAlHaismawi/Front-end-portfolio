/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Image from 'next/image';

import React from "react";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import website1 from '../assets/website1.png'
import website2 from '../assets/website2.png'
import website3 from '../assets/website3.png'
import css from '../assets/css.png'
import nodeicon from '../assets/node-js.png'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

type Props = {};


const projects = [
  {
    image: website2,
    alt: "Website 1",
    description: "Project 1 Description",
    languages: ["html5", "css3"],
  },
  {
    image: website1,
    alt: "Website 2",
    description: "Project 2 Description",
    languages: ["html5", "css3", "javascript"],
  },
  {
    image: website3,
    alt: "Website 3",
    description: "Project 3 Description",
    languages: ["html5", "css3", "javascript", "react"],
  },
];

const Projects = (props: Props) => {
  return (

      <div
          className="relative flex flex-col h-screen text-center md:text-left w-full  mx-auto items-center justify-center gap-5 ">

          <h3 className="absolute top-24 uppercase tracking-[20px] text-[#66fcf1] text-xl lg:text-3xl">Projects</h3>


      </div>
  );
};

export default Projects;
