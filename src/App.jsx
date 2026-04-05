import { ThemeProvider } from "./ThemeContext";
import {
  Stars, 
  Contact,
  Education,
  Navbar,
  Skills,
  Projects,
  Achievements,
  Footer,
} from "./components";
import SocialLinks from "./components/SocialLinks";
import { StarsCanvas } from "./components/canvas";

const App = () => {
  return (
    <ThemeProvider>
      
      {/* 1. FIXED BACKGROUND: Changed to bg-black to match Navbar and fix star contrast */}
      <div className="fixed inset-0 z-[-1] bg-black pointer-events-none">
        <StarsCanvas />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative z-10 bg-transparent">
        
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <SocialLinks />
          <Stars /> 
        </div>
        
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
        
      </div>
      
    </ThemeProvider>
  );
};

export default App;