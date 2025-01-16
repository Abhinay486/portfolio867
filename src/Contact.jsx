import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="flex items-center flex-col gap-10 text-center h-auto w-full p-6 bg-white rounded-lg"
      >
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="5e808abd-99a8-4ea2-a80a-b61eda9fb102"
          ></input>
          <div className="w-full max-w-lg h-auto bg-[#f6f6f6] border-2 border-solid border-gray-200 shadow-lg rounded-lg p-8">
            <h1 className="text-2xl sm:text-2xl text-gray-800 pb-4">
              CONTACT ME
            </h1>

            <div className="flex flex-col space-y-4">
              <input
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />

              <input
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />

              <textarea
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Message"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-transparent hover:bg-blue-700 text-black font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="relative w-full h-[300px] overflow-hidden flex items-center justify-center mt-6">
        {/* Wave effect */}
        <div className="absolute top-0 left-0 w-full h-full wave-effect"></div>

        {/* Centered buttons inside the wave */}
        <div className="relative z-10 flex space-x-4">
          <a href="#">
            <button className="bg-transparent text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">
              Home
            </button>
          </a>
          <a href="#about">
            <button className="bg-transparent text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">
              About
            </button>
          </a>
          <a href="#skills">
            <button className="bg-transparent text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">
              Skills
            </button>
          </a>
          <a href="#projects">
            <button className="bg-transparent text-black py-2 px-4 rounded-lg shadow-md hover:bg-gray-200">
              Projects
            </button>
          </a>
          
        </div>

        <style jsx>{`
          .wave-effect::after {
            content: "";
            position: absolute;
            will-change: transform;
            top: 0;
            left: 0;
            bottom: 0;
            right: -500vw;
            background: linear-gradient(
              to right,
              rgba(25, 113, 221, 1),
              /* Light Sky Blue */ rgba(0, 114, 254, 1) /* Cornflower Blue */
            );
            --mask: radial-gradient(
                  75.15px at 50% 101.5px,
                  #000 99%,
                  #0000 101%
                )
                calc(50% - 70px) 0/140px 100%,
              radial-gradient(75.15px at 50% -66.5px, #0000 99%, #000 101%) 50%
                35px/140px 100% repeat-x;
            -webkit-mask: var(--mask);
            mask: var(--mask);
            animation: wave 300s linear infinite alternate;
          }

          @keyframes wave {
            100% {
              transform: translate3d(-400vw, 0, 0);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Contact;
