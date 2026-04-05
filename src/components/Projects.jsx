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
  const { theme, updateThemeColors } = useTheme();
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* ADDED THE CARD BACKGROUND BACK HERE */}
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <Netflix icon={icon} />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color} font-bold`}
              >
                {tag.name.toUpperCase()} {index != tags.length - 1 ? ' | ' : ''}
              </p>
            ))}
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap justify-between gap-2">
          <a
            className="themeColor border rounded-lg bg-black-500 text-white px-2 py-1 hover:bg-gray-900 hover:cursor-pointer"
            href={demo_link}
            target={target_blank ? "__blank" : "_self"}
          >
            Demo
          </a>
          <a
            className="themeColor border rounded-lg bg-black-500 text-white px-2 py-1 hover:bg-gray-900 hover:cursor-pointer"
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
  const { theme, updateThemeColors } = useTheme();
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

      <div className="flex flex-wrap gap-7">
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