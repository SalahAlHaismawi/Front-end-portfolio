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
          centerPadding: '35px',
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
      <div className="relative flex flex-col items-center justify-center min-h-screen h-screen  overflow-hidden">
        <div className="flex flex-col items-center justify-center pt-12">
          <h3 className="uppercase tracking-[20px] text-[#66fcf1] text-xl lg:text-3xl">Projects</h3>
        </div>
        <div className='w-[90%] h-[85%] flex flex-col items-center justify-center overflow-hidden pt-16'>
          <h3 className='text-xs text-center underline italic'>Swipe To Explore Projects.</h3>

          <Slider {...cardSettings} className="w-full h-full">
            {projects.map((project, index) => (
                <div key={index} className="p-2 flex-shrink-0 flex-grow-0" style={{width: '300px', height: '500px'}}>
                  <div
                      className="bg-gradient-to-r from-[#1F2833] to-[#2b4053] via-[#1b475e] p-6 flex flex-col justify-between items-center shadow-lg rounded-xl group h-full transition-transform duration-500 ease-in-out transform hover:scale-105 hover:h-auto hover:w-auto"
                      style={{margin: '0 10px'}}>
                    <h3 className="text-xl lg:3xl font-bold text-[#66fcf1] mb-4">{project.name}</h3>
                    <div className="w-full flex-grow">
                      <Slider {...imageSettings} className="w-full mb-4 p-4">
                        {project.images && project.images.length > 0 ? project.images.map((image, imgIndex) => (
                            <div key={imgIndex}
                                 className="flex items-center justify-center overflow-hidden" style={{height: '150px'}}>
                              <img src={image} alt={`Project ${index + 1} Image ${imgIndex + 1}`}
                                   className="rounded-xl object-contain mx-auto"/>
                            </div>
                        )) : <p>No images available</p>}
                      </Slider>
                    </div>
                    <div className="flex flex-col items-center w-full flex-grow-0">
                      <p className="mb-4 text-sm lg:text-lg overflow-hidden transition-all duration-500 max-h-[100px] group-hover:max-h-[300px]"
                         style={{hyphens: 'auto'}} lang="en">
                        {project.description}
                      </p>
                      <div
                          className="flex flex-col items-start w-full transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                        <h1 className='text-left font-bold pb-2 text-sm lg:text-lg'>Technical Stack:</h1>
                        <div
                            className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-items-center w-full">
                          {project.techStack && project.techStack.length > 0 ? project.techStack.map((tech, techIndex) => (
                              <img key={techIndex} src={tech} alt="Tech Stack Icon"
                                   className="h-10 w-10 rounded-full "/>
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
