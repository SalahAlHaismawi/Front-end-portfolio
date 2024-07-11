/// <reference path="./react-slick.d.ts" />
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from '../contentful'; // Ensure this path is correct and client is properly configured

type Project = {
  name: string;
  description: string;
  images: string[];
  techStack: string[];
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.getEntries({ content_type: 'projects' });
        const fetchedProjects = response.items.map((item: any) => ({
          name: item.fields.name,
          description: item.fields.description,
          images: item.fields.images ? item.fields.images.map((image: any) => image.fields.file.url) : [],
          techStack: item.fields.techStack ? item.fields.techStack.map((tech: any) => tech.fields.file.url) : [],
        }));
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const cardSettings = {
    dots: true, // Enable pagination for card slider
    arrows: false, // Disable arrows for the card slider
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px', // Set to 0px to prevent overflow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  };

  const imageSettings = {
    dots: false,
    arrows: true, // Enable arrows for the image slider
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen h-screen py-10 overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#66fcf1] text-xl lg:text-3xl">Projects</h3>
      <div className='w-[90%] h-[85%] flex flex-col items-center justify-center overflow-hidden'>
        <Slider {...cardSettings} className="w-full h-full">
          {projects.map((project, index) => (
            <div key={index} className="w-full h-full pt-10">
              <div className="bg-[#1F2833] h-full rounded-xl p-6 flex flex-col justify-between items-center shadow-lg">
                <h3 className="text-2xl font-bold text-[#66fcf1] mb-4">{project.name}</h3>
                <Slider {...imageSettings} className="w-full mb-4">
                  {project.images && project.images.length > 0 ? project.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="">
                      <img src={image} alt={`Project ${index + 1} Image ${imgIndex + 1}`} className="rounded-xl object-cover w-full h-full"/>
                    </div>
                  )) : <p>No images available</p>}
                </Slider>
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    <p className="text-md text-left">{project.description}</p>
                  </div>
                  <div className='w-full'>
                    <h1 className='text-left font-bold text-sm pb-2'>Tech Stack:</h1>
                    <div className="grid grid-cols-5 gap-5 justify-evenly w-full">
                      {project.techStack && project.techStack.length > 0 ? project.techStack.map((tech, techIndex) => (
                        <img key={techIndex} src={tech} alt="Tech Stack Icon" className="h-10 w-10 rounded-full"/>
                      )) : <p>No tech stack available</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
