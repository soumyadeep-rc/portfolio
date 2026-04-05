import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useScroll, useSpring } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { education } from "../constants"; 
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTheme } from "../ThemeContext";

const EducationCard = ({ education }) => {
  const { theme } = useTheme();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme.secondaryColor,
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <a
          href={education.company_link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary text-[16px] font-semibold hover:underline"
          style={{ margin: 0 }}
        >
          {education.company_name}
        </a>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const { theme } = useTheme();
  
  // 1. Create a reference to the container to track its position on screen
  const ref = useRef(null);

  // 2. Track how much of this section is visible in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"], // Starts drawing when the top hits the center of the screen
  });

  // 3. Add spring physics so the line draws smoothly rather than rigidly locking to the pixel
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="section" id="education" variants={textVariant()}>
        <p
          className={`secondaryText sm:text-[18px] text-[14px] uppercase tracking-wider text-center`}
        >
          ACADEMIC BACKGROUND
        </p>
        <h2
          className={`primaryText font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          EDUCATION
        </h2>
      </motion.div>

      {/* Attach the ref here so Framer Motion knows what to track */}
      <div className="mt-20 flex flex-col relative" ref={ref}>
        
        {/* THE ANIMATED SCROLL LINE */}
        {/* scaleY dynamically changes based on your scroll position */}
        <motion.div
          className="animated-scroll-line"
          style={{
            scaleY: scaleY,
            background: theme.primaryColor, // Uses your active theme color for the line!
          }}
        />

        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard
              key={`education-${index}`}
              education={edu}
            />
          ))}
        </VerticalTimeline>
      </div>

      <style>
        {`
            .primaryText{
              color: ${theme.primaryColor};
            }
            .secondaryText{color: ${theme.secondaryColor}}

            /* Transform the default boring white line into a dim "track" */
            .vertical-timeline::before {
              background: rgba(255, 255, 255, 0.1) !important;
            }

            /* Style our custom animated line to perfectly overlap the track */
            .animated-scroll-line {
              position: absolute;
              top: 0;
              left: 18px; /* Mobile position */
              width: 4px;
              height: 100%;
              transform-origin: top; /* Ensures it grows from the top down */
              z-index: 1; /* Keeps it behind the icons */
            }

            /* Desktop position override */
            @media only screen and (min-width: 1170px) {
              .animated-scroll-line {
                left: 50%;
                margin-left: -2px;
              }
            }
          `}
      </style>
    </>
  );
};

export default SectionWrapper(Education, "education");