import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneSlash, faSpinner } from "@fortawesome/free-solid-svg-icons";

import { styles } from "../styles";
import { navLinks, themes } from "../constants";
import { menu, close } from "../assets";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [themeToggle, setThemeToggle] = useState(false);
  const [activeTheme, setActiveTheme] = useState("Chocolate Symphony (Default)");
  const [hoveredTheme, setHoveredTheme] = useState(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [callState, setCallState] = useState('idle'); // 'idle', 'connecting', 'connected', 'error'
  const [blandClient, setBlandClient] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  const { theme, updateThemeColors } = useTheme();

  // Intersection Observer to track active section
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the top 30% of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Check if at top of page (home section)
    const handleScroll = () => {
      const firstSection = document.getElementById(sectionIds[0]);
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        // If the first section hasn't reached the trigger zone yet, clear active
        if (rect.top > window.innerHeight * 0.3) {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    
    if (!hasVisited) {
      // Start animation after 3 seconds for first-time visitors
      const timer = setTimeout(() => {
        setShouldAnimate(true);
        // Stop animation after 10 seconds
        const stopTimer = setTimeout(() => {
          setShouldAnimate(false);
        }, 10000);
        
        return () => clearTimeout(stopTimer);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const changeColors = (newTheme) => {
    updateThemeColors(newTheme.primaryColor, newTheme.secondaryColor);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <p className="text-white text-[18px] font-bold cursor-pointer transition duration-500 hover:scale-125">
              Soumyadeep Roy Chowdhury
            </p>
          </a>
          
          {/* Themes Button */}
          <img
            data-tooltip-id="theme"
            src="/theme.png"
            alt=""
            className="w-[60px] h-[45px] cursor-pointer"
            onClick={() => setThemeToggle(!themeToggle)}
          />
          <ReactTooltip id="theme" place="bottom" content="Themes" />
          
          <div
            className={`${!themeToggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {themes.map((theme) => (
                <li
                  key={theme.name}
                  className={`font-poppins font-medium cursor-pointer text-[16px]`}
                  style={{
                    color:
                      theme.name === activeTheme
                        ? theme.primaryColor
                        : theme.name === hoveredTheme
                          ? theme.primaryColor
                          : "white",
                  }}
                  onMouseEnter={() => setHoveredTheme(theme.name)}
                  onMouseLeave={() => setHoveredTheme(null)}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTheme(theme.name);
                      changeColors(theme);
                    }}
                  >
                    {theme.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-white transition duration-500 hover:scale-110 text-[18px] font-medium cursor-pointer`}
            >
              <a 
                href={`#${link.id}`}
                className="relative pb-1"
                style={{
                  color: activeSection === link.id ? theme.primaryColor : "white",
                }}
              >
                {link.title}
                <span
                  className="absolute left-0 bottom-0 h-[2px] transition-all duration-300"
                  style={{
                    width: activeSection === link.id ? "100%" : "0%",
                    backgroundColor: theme.primaryColor,
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a 
                    className="nav__link relative pb-1" 
                    href={`#${link.id}`}
                    style={{
                      color: activeSection === link.id ? theme.primaryColor : "white",
                    }}
                  >
                    {link.title}
                    <span
                      className="absolute left-0 bottom-0 h-[2px] transition-all duration-300"
                      style={{
                        width: activeSection === link.id ? "100%" : "0%",
                        backgroundColor: theme.primaryColor,
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
