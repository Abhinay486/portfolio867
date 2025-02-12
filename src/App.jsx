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
     <Projects s = "00_Preview.avif" name = "Employee Management System" l = "https://ems87.netlify.app/"/> 
     {/* <Projects s = "12.png" name = "Currency Converter" l = "https://www.google.com"/> */}
     <Projects s = "ret.jpg" name = "College Website" l = "https://6689f8b33756a85716160f9e--leafy-arithmetic-58a4e9.netlify.app/"/>
    <Contact/>
     
     
     
    </>
  );
}

export default App;
