import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Netflix from "./canvas/ProjectLogo";
import { useTheme } from "../ThemeContext";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  demo_link,
  target_blank,
  icon,
}) => {
  const { theme } = useTheme();
  return (
    // 1. Added w-full and h-full so the animation wrapper fills the grid cell
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full h-full">
      
      {/* 2. Removed sm:w-[360px] and added h-full flex flex-col to make cards equal height */}
      <div className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col">
        <div className="relative w-full h-[230px]">
          <Netflix icon={icon} />
        </div>

        {/* 3. Added flex-1 to push the buttons to the absolute bottom evenly */}
        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag, i) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color} font-bold`}
              >
                {tag.name.toUpperCase()} {i !== tags.length - 1 ? ' | ' : ''}
              </p>
            ))}
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        
        <div className="mt-4 flex flex-wrap justify-between gap-2">
          <a
            className="themeColor border rounded-lg bg-black-500 text-white px-3 py-1 hover:bg-gray-900 hover:cursor-pointer transition-colors"
            href={demo_link}
            target={target_blank ? "__blank" : "_self"}
          >
            Demo
          </a>
          <a
            className="themeColor border rounded-lg bg-black-500 text-white px-3 py-1 hover:bg-gray-900 hover:cursor-pointer transition-colors"
            href={source_code_link}
            target="__blank"
          >
            Source Code
          </a>
        </div>
      </div>
      <style>
        {`
            .themeColor{
              border-color: ${theme.secondaryColor}
            }
          `}
      </style>
    </motion.div>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  return (
    <>
      <motion.div className="section" id="projects" variants={textVariant()}>
        <p className={`secondaryText sm:text-[18px] text-[14px] uppercase tracking-wider text-center`}>
          PERSONAL DEVELOPMENT
        </p>
        <h2 className={`primaryText font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
          PROJECTS
        </h2>
      </motion.div>

      {/* 4. Changed flexbox to CSS Grid: 1 column on mobile, 2 on desktop! */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      
      <style>
        {`
            .primaryText{
              color: ${theme.primaryColor};
            }
            .secondaryText{color: ${theme.secondaryColor}}
          `}
      </style>
    </>
  );
};

export default SectionWrapper(Projects, "projects");