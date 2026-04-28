import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../ThemeContext";
import { lc, cc, cf, linkedin, git, resume } from "../assets";

// CSS Tooltip wrapper component
const Tooltip = ({ children, text, position = "left" }) => {
  const positionClasses = {
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
  };

  return (
    <div className="relative group">
      {children}
      <span
        className={`absolute ${positionClasses[position]} px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50`}
      >
        {text}
      </span>
    </div>
  );
};

function SocialLinks() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show scroll-to-top button when near bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      // Show button when within 300px of the bottom
      setShowScrollTop(scrollPosition >= pageHeight - 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll to Top Button - Left of Social Links */}
      <button
        onClick={scrollToTop}
        className={`group borderPrimary border z-10 rounded-full text-white w-12 h-12 fixed bottom-5 right-20 flex items-center justify-center cursor-pointer transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
        <span className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Back to Top
        </span>
      </button>

      {/* Social Links Button - Bottom Right */}
      <button
        onClick={toggleMenu}
        className="group borderPrimary border z-10 rounded-full text-white w-12 h-12 fixed bottom-5 right-5 flex items-center justify-center cursor-pointer"
      >
        <FontAwesomeIcon icon={faLink} />
        <span className={`absolute px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
          showScrollTop ? "bottom-full mb-2" : "right-full mr-2"
        }`}>
          Social Links
        </span>
      </button>

      {isMenuOpen && (
        <div className="fixed bottom-14 right-1 p-2 z-10 rounded-xl">
          <ul className="py-2">
            <li className="px-4 py-2">
              <Tooltip text="Resume" position="left">
                <a
                  href="/Soumyadeep_Resume.pdf"
                  download="Soumyadeep_Resume.pdf"
                  target="_blank"
                >
                  <img
                    src={resume}
                    alt="Resume"
                    className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                  />
                </a>
              </Tooltip>
            </li>
            <li className="px-4 py-2">
              <Tooltip text="LinkedIn" position="left">
                <a
                  href="https://www.linkedin.com/in/soumyadeep-roy-chowdhury-101/"
                  target="_blank"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                  />
                </a>
              </Tooltip>
            </li>
            <li className="px-4 py-2">
              <Tooltip text="GitHub" position="left">
                <a href="https://github.com/soumyadeep-rc" target="_blank">
                  <img
                    src={git}
                    alt="GitHub"
                    className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                  />
                </a>
              </Tooltip>
            </li>
            <li className="px-4 py-2">
              <Tooltip text="LeetCode" position="left">
                <a href="https://leetcode.com/u/_src_101_/" target="_blank">
                  <img
                    src={lc}
                    alt="LeetCode"
                    className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                  />
                </a>
              </Tooltip>
            </li>
            <li className="px-4 py-2">
              <Tooltip text="CodeForces" position="left">
                <a
                  href="https://codeforces.com/profile/src_101"
                  target="_blank"
                >
                  <img
                    src={cf}
                    alt="CodeForces"
                    className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                  />
                </a>
              </Tooltip>
            </li>
            <li className="px-4 py-2">
              <Tooltip text="CodeChef" position="left">
                <a
                  href="https://www.codechef.com/users/src_101"
                  target="_blank"
                >
                  <img
                    src={cc}
                    alt="CodeChef"
                    className="w-[30px] h-[30px] hover:pointer rounded-full border border-white"
                  />
                </a>
              </Tooltip>
            </li>
          </ul>
        </div>
      )}
      <style>
        {`
            .borderPrimary{
              border-color: ${theme.primaryColor};
            }
          `}
      </style>
    </>
  );
}

export default SocialLinks;
