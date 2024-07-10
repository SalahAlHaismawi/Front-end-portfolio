import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "../contentful";  // Ensure this path is correct and client is properly configured

type Skill = {
  name: string;
  image: string;  // URL to the image
  proficiency: string;
};


function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await client.getEntries({ content_type: 'skills' });
        const fetchedSkills = response.items.map((item) => ({
          name: item.fields.name,
          image: item.fields.image.fields.file.url,  // Adjust based on your Contentful image structure
          proficiency: item.fields.proficiency,
        }));
        setSkills(fetchedSkills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="flex relative flex-col text-center items-center md:text-left xl:flex-row max-w-full xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#66fcf1] text-xl lg:text-3xl ">Full-Stack Skills</h3>
      {/*<h3 className="absolute top-40 uppercase tracking-[4px] text-xs">Hover over a skill for current proficiency</h3>*/}
      <div className="grid grid-cols-3 gap-7 w-full place-items-center mt-5 p-4 d  ">
        {skills.map((skill, index) => (
          <div key={index} className="group relative flex cursor-pointer ">
            <img
              src={skill.image}
              alt={skill.name}
              className="rounded-full object-cover  w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">{skill.proficiency}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
