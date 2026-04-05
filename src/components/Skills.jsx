import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import TagCloud from "TagCloud";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useTheme } from "../ThemeContext";
import { skills } from "../constants";

const Skills = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const containerSelector = ".tagcloud";
    const containerElement = document.querySelector(containerSelector);

    // 1. Clear any existing content to prevent duplicates during React Strict Mode
    if (containerElement) {
      containerElement.innerHTML = "";
    }

    // --- INCREASED RADIUS SIZE HERE ---
    let radius;
    if (window.innerWidth <= 768) {
      radius = 160; // Increased from 145 for mobile
    } else {
      radius = 295; // Increased from 240 for desktop
    }

    const options = {
      radius: radius,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    // Initialize the tag cloud and store the instance
    const tagCloudInstance = TagCloud(containerSelector, skills, options);

    // 2. Cleanup function: Destroys the cloud when the component unmounts
    return () => {
      if (tagCloudInstance && typeof tagCloudInstance.destroy === 'function') {
        tagCloudInstance.destroy();
      } else if (containerElement) {
        // Fallback: Manually clear the HTML if the destroy method isn't available
        containerElement.innerHTML = "";
      }
    };
  }, []); // Empty dependency array ensures this only runs on mount

  return (
    <>
      {/* Increased min-h to 700px to accommodate the larger sphere */}
      <div className="max-w-2xl flex flex-wrap gap-7 justify-center items-center text-center mx-auto min-h-[700px]">
        <motion.div id="skills" className="section w-full" variants={textVariant()}>
          <p
            className={`secondaryText sm:text-[18px] text-[14px] uppercase tracking-wider text-center`}
          >
            PROFICIENT ABILITIES
          </p>
          <h2
            className={`primaryText font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
          >
            SKILLS
          </h2>
        </motion.div>
        
        {/* The container for the 3D sphere */}
        <span className="tagcloud font-bold text-xl cursor-pointer"></span>
      </div>
      
      <style>
        {`
            .primaryText {
              color: ${theme.primaryColor};
            }
            .secondaryText {
              color: ${theme.secondaryColor};
            }
            .tagcloud--item:hover {
              color: ${theme.primaryColor};
            }
          `}
      </style>
    </>
  );
};

export default SectionWrapper(Skills, "");