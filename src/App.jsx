import { useState } from "react";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import ScrollProgress from "./Components/ScrollProgress/ScrollProgress";
import Loader from "./Components/Loader/Loader";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import TechStack from "./Components/TechStack/TechStack";
import Education from "./Components/Education/Education";
import SocialLinks from "./Components/SocialLinks/SocialLinks";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-base-900 text-white overflow-x-hidden">
      <Loader onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ScrollProgress />
      <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Experience />
          <Projects />
          <TechStack />
          <Education />
          <SocialLinks />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
