import React from "react";

const Skills = () => {
  return (
    <>
      <div id="skills" className="w-full flex items-center justify-center h-14 text-[1.8rem]">
        <h1 className="font-serif">SKILLS</h1>
      </div>
      <div className="m-4 grid gap-3 sm:grid-cols-3 p-10">
        <div className="bg-gray-100 rounded-xl m-4 p-6 pt-3">
          <h2 className="text-center m-3 text-[1.7rem] font-serif">Frontend</h2>
          <div>
            <ul className="flex gap-8 flex-wrap m-4">
              <li className="flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base hover:bg-[#ff4c1e]">
                <img className="max-h-8 pr-1" src="5968267.png" alt="" />
                HTML
              </li>
              <li className="hover:bg-[#006bc0] flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
                <img className="max-h-8 pr-1" src="css.png" alt="" />
                CSS
              </li>
              <li className="hover:bg-[#f0c724] flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
              <img className="max-h-8 pr-1" src="js.png" alt="" />
                Javascript
              </li>
              <li className="hover:bg-[#00d8ff] flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
              <img className="max-h-8 pr-1" src="r.png" alt="" />
                React Js
              </li>
              <li className="hover:bg-[#05b6d4] flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
              <img className="max-h-8 w-11 pr-1" src="tw.png" alt="" />
                Tailwind
              </li>
              <li className="hover:bg-[#8ac640] flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
              <img className="max-h-8 pr-1" src="gsap.png" alt="" />
                GSAP
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl m-4 p-6 pt-3">
          <h2 className="text-center m-3 text-[1.7rem] font-serif">Backend</h2>
          <div>
            <ul className="flex gap-8 flex-wrap m-4">
              <li className="hover:bg-[#539e43] flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
              <img className="max-h-8 pr-1" src="node.png" alt="" />
                Node Js
              </li>
              <li className="hover:bg-[#13aa52] flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
              <img className="max-h-8 pr-1" src="mdb.png" alt="" />
                Mongo DB
              </li>
              <li className="hover:bg-[#000000] hover:text-white flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
              <img className="max-h-8 pr-1" src="ejs.webp" alt="" />
                Express Js
              </li>
              <li className="hover:bg-gradient-to-r hover:from-[#00618a] hover:to-[#e48e00] transition duration-300flex items-center border rounded-[8px] border-black flex flex-row px-[20px] py-[10px] text-sm md:text-base">
              <img className="max-h-8 max-w-10 pr-1" src="mysql.png" alt="" />
                MySQL
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl m-4 p-6 pt-3">
          <h2 className="text-center m-3 text-[1.7rem] font-serif">Others</h2>
          <div>
            <ul className="flex gap-8 flex-wrap m-4">
              <li className="hover:bg-[#de4c36] flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
              <img className="max-h-8 max-w-10 pr-1" src="git.png" alt="" />
                Git
              </li>
              <li className="hover:bg-[#000000] hover:text-white flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
              <img className="max-h-8 max-w-10 pr-1" src="ghub.png" alt="" />
                Git Hub
              </li>
              <li className="hover:bg-[#ff8181] flex items-center border rounded-[8px] border-black px-[20px] py-[6px] text-sm md:text-base">
              <img className="max-h-8 max-w-10 pr-1" src="figma.png" alt="" />
                Figma
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
