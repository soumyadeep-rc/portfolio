import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { achievements } from "../constants";
import { useTheme } from "../ThemeContext";

const AchievementCard = ({ title, description, date }) => {
  const { theme } = useTheme();

  return (
    <div className="border border-white p-8 rounded-3xl w-[320px] sm:w-[400px] md:w-[450px] flex flex-col justify-between items-start h-full min-h-[250px] flex-shrink-0 whitespace-normal mx-4 group hover:bg-white/5 transition-colors duration-300">
      <div className="w-full text-left">
        <h3
          className="font-bold text-[22px] sm:text-[26px] mb-4"
          style={{ color: theme.primaryColor }}
        >
          {title}
        </h3>
        <p className="text-white tracking-wider text-[15px] sm:text-[16px] leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 border-t border-gray-600 w-full pt-4 text-left">
        <p className="text-gray-400 font-medium text-[14px]">{date}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  const { theme } = useTheme();

  useEffect(() => {}, [theme]);

  return (
    <>
      <motion.div className="section" id="achievements" variants={textVariant()}>
        <p className={`secondaryText sm:text-[18px] text-[14px] uppercase tracking-wider text-center`}>
          RESULT OF CONSISTENT EFFORTS
        </p>
        <h2 className={`primaryText font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
          ACHIEVEMENTS
        </h2>
      </motion.div>

      {/* Marquee Container */}
      <div className="mt-20 pb-14 overflow-hidden relative w-full flex items-center">
        {/* Gradient fades on the edges for a polished look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* The Scrolling Track */}
        <div className="marquee-track flex hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {/* First Set of Cards */}
          <div className="flex">
            {achievements.map((achievement, index) => (
              <AchievementCard key={`ach-1-${index}`} {...achievement} />
            ))}
          </div>

          {/* Second Set of Cards (Duplicated for seamless loop) */}
          <div className="flex">
            {achievements.map((achievement, index) => (
              <AchievementCard key={`ach-2-${index}`} {...achievement} />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .primaryText {
            color: ${theme.primaryColor};
          }
          .secondaryText {
            color: ${theme.secondaryColor};
          }
          
          /* Infinite Marquee Animation */
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .marquee-track {
            width: max-content;
            /* Adjust the 40s to make it scroll faster or slower */
            animation: marquee 40s linear infinite; 
          }

          /* Pause animation when hovering over the cards */
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </>
  );
};

export default SectionWrapper(Achievements, "");