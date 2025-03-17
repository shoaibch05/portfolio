
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ExperienceEducation from "./components/EduExp";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/footer";



function App() {
  const appref = useRef(null);
   const [vantaEffect, setVantaEffect] = useState(null);
    
      useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(
            NET({
              el: appref.current,
              THREE: THREE,
              color:0x4e45d4,
              backgroundColor:0x23153c,
              points:20,
              maxDistance:28,
              spacing:20,
              minHeight:200.00,
  
            })
          );
        }
        return () => vantaEffect && vantaEffect.destroy();
      }, [vantaEffect]);
  return (
    <div ref={appref}  >
    
    <Navbar />
    <Hero />
    <About />
    <ExperienceEducation/>
    <Work />
    <Contact />
    <Footer />
  
    </div>

  
  );
}

export default App;
