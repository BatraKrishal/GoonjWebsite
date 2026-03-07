import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

import { Routes, Route } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { Home } from "./routes/Home";
import { Teams } from "./routes/Teams";
import { Events } from "./routes/Events";
import { About } from "./routes/About";
import FooterSection from "./sections/FooterSection";



const App = () => {
 

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
};

export default App;
