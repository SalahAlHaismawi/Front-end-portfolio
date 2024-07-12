import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from '../contentful';

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
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
    ],
  };

  const imageSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
      <div className="relative flex flex-col items-center justify-center min-h-screen h-screen py-10 overflow-hidden">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#66fcf1] text-xl lg:text-3xl">Projects</h3>
        <h3 className=' absolute top-36 text-xs text-center underline'>Swipe To Explore Projects.</h3>

        <div className='w-[90%] h-[85%] flex flex-col items-center justify-center overflow-hidden pt-16'>
          <Slider {...cardSettings} className="w-full h-full">
            {projects.map((project, index) => (
                <div key={index} className="p-2 scale-90 transition duration-300 ease-in-out hover:scale-100">
                  <div
                      className="bg-[#1F2833] p-6 flex flex-col justify-between items-center shadow-lg rounded-xl"
                      style={{ maxWidth: '800px', width: '100%', margin: '0 10px' }}>
                    <h3 className="text-2xl font-bold text-[#66fcf1] mb-4">{project.name}</h3>
                    <Slider {...imageSettings} className="w-[95%] mb-4 p-4">
                      {project.images && project.images.length > 0 ? project.images.map((image, imgIndex) => (
                          <div key={imgIndex}
                               className="flex items-center justify-center overflow-hidden">
                            <img src={image} alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                                 className="rounded-xl object-contain mx-auto"/>
                          </div>
                      )) : <p>No images available</p>}
                    </Slider>
                    <div className="flex flex-col items-center w-full">
                      <p className="mb-4 text-sm" style={{hyphens: 'auto'}} lang="en">
                        {project.description}
                      </p>
                      <div>
                        <h1 className='text-left font-bold pb-2'>Tech Stack:</h1>
                        <div className="grid grid-cols-5 gap-5">
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
