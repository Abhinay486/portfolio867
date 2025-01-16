import { useGSAP } from "@gsap/react";
import React, { useState, useRef } from "react";
import gsap from "gsap";
{
  /* <nav className="font-[poppins]  text-black flex flex-wrap justify-between items-center px-4 sm:px-8 md:px-[50px] py-4 sm:py-6 md:py-[30px] shadow-lg relative top-4 sm:m-4 md:m-5 rounded-xl transition duration-300 ease-in-out hover:shadow-xl m-5 mt-0">
          <h1 className="heading text-xl font-serif sm:text-xl md:text-[1.5rem]">Abhinay</h1>
          <div className="items text-xl gap-4 hidden md:flex sm:gap-[20px] font-bold">
            <a className="hover:text-gray-300 transition-colors duration-200" href="#about">About</a>
            <a className="hover:text-gray-300 transition-colors duration-200" href="#skills">Skills</a>
            <a className="hover:text-gray-300 transition-colors duration-200" href="#projects">Projects</a>
            <a className="hover:text-gray-300 transition-colors duration-200" href="#contact">Contact</a>
          </div>
        </nav> */
}
{
  /* Hero Section */
}

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".heading", {
      y: -20,
      duration: 0.6,
      delay: 0.6,
      opacity: 0,
    });
    tl.from(".items a", {
      y: -20,
      duration: 0.7,
      opacity: 0,
      stagger: 0.3,
    });
    gsap.from(".innerone p", {
      x: -70,
      opacity: 0,
      duration: 0.8,
    });
  });
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    if (navLinksRef.current) {
      navLinksRef.current.classList.toggle("top-[70px]");
      navLinksRef.current.classList.toggle("top-[-100%]");
    }
  }

  return (
    <>
      <div className="">
        <header className="flex px-[15px] py-[20px] ">
          <nav className="flex justify-between w-[92%] mx-auto">
            <h1 className="heading font-bold">Abhinay</h1>
            <div
              ref={navLinksRef}
              className={`nav-links absolute md:static md:min-h-fit ${
                menuOpen ? "top-[70px]" : "top-[-100%]"
              } transition-all duration-300 gap-2 bg-white min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5`}
            >
              <div className="items text-xl font-bold flex md:items-center md:flex-row flex-col md:gap-[3vw] gap-6">
                <a
                  className="hover:text-gray-500 transition-colors duration-200"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="hover:text-gray-500 transition-colors duration-200"
                  href="#skills"
                >
                  Skills
                </a>
                <a
                  className="hover:text-gray-500 transition-colors duration-200"
                  href="#projects"
                >
                  Projects
                </a>
                <a
                  className="hover:text-gray-500 transition-colors duration-200"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>
          </nav>

          <div className="text-3xl flex items-center cursor-pointer md:hidden">
            <ion-icon
              name={menuOpen ? "close" : "menu"}
              onClick={toggleMenu}
            ></ion-icon>
          </div>
        </header>

        <section className="innerone flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-indigo-700 text-white">
          <h1 className="overflow-hidden pb-2 text-5xl font-extrabold mb-4 p-3">
            Hi, I'm Abhinay
          </h1>
          <p className="text-lg mb-8 p-4 pt-0">
            A Passionate Developer Specializing in Web Development
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-800 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-200 ease-in-out hover:shadow-lg"
          >
            Hire Me
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl mb-4 text-black font-serif">About Me</h2>
            <p className="text-lg text-gray-600">
              I'm a full-stack developer with expertise in modern web
              technologies such as React, Node.js, and Tailwind CSS. I love
              applications that solve real-world problems. I'm also good in data
              structures and algorithms (DSA) and enjoy solving challenging
              problems to find efficient solutions.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
