import { useState } from "react";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Skills from "./Skills.jsx";
import About from "./About.jsx";
function App() {
  return (
    <>  
    <About/>
     <Skills/>
     <div className="text-4xl font-serif p-5 text-center pb-0">
        <h1>My Latest Works</h1>
     </div>
     <Projects s = "00_Preview.avif" name = "e-commerce website" /> 
     <Projects s = "12.png" name = "Currency Converter"/>
     <Projects s = "ret.jpg" name = "College Website"/>
    <Contact/>
     
     
     
    </>
  );
}

export default App;
