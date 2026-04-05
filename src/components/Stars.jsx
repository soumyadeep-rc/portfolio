import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { styles } from "../styles";
import { useTheme } from "../ThemeContext";

const Stars = () => {
  const { theme } = useTheme();

  return (
    <section className={`relative w-full h-screen bg-transparent`}>
      <div className={`absolute inset-0 max-w-7xl flex justify-center items-center text-center mx-auto px-6`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="primaryText">Soumyadeep</span>
            <div className="text-[30px] sm:text-[40px] mt-2 font-medium">
              <Typewriter
                options={{
                  strings: [
                    "ICPC West Asia Regionalist",
                    "Full-Stack Web3 Developer",
                    "Building AI-Powered Systemms",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName: "primaryText",
                  cursorClassName: "text-white",
                }}
              />
            </div>
          </h1>

          <p className="mt-4 text-white-100 leading-relaxed max-w-4xl mx-auto text-[15px] sm:text-[18px] 
          md:text-[20px] font-medium">
                      Engineering the future at Jadavpur University, Kolkata.
          </p>
          <p className="mt-4 text-white-100 leading-relaxed max-w-4xl mx-auto text-[15px] sm:text-[18px] 
          md:text-[20px] font-medium">
                      Focusing on high-performance architecture and scalable software.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#skills">
          <div className="primaryBorder w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary w-3 h-3 rounded-full mb-1"
            />
          </div>
        </a>
      </div>

      <style>
        {`
            .primaryText{ color: ${theme.primaryColor}; }
            .primaryBorder{ border-color: ${theme.primaryColor} }
          `}
      </style>
    </section>
  );
};

export default Stars;