import React from "react";
import { FaArrowDown } from "react-icons/fa";
import emote from "../src/assets/emote.png";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row justify-between p-4 h-auto md:h-screen"
      >
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 px-6 md:px-20 py-10">
          <h1 className="text-4xl font-bold">Hi There,</h1>
          <h1 className="text-3xl font-bold">
            I'm <span className="text-[#245abf]">Karunakar Verma</span>
          </h1>

          <p className="mt-3 max-w-md text-gray-700">
            A MERN stack developer blending design and functionality into
            memorable web experiences
          </p>

          <a
            href="#about"
            className="mt-5 px-6 py-3 flex items-center gap-2 bg-[#245abf] cursor-pointer text-white font-semibold rounded-lg shadow-md hover:bg-[#1d4ea3] transition"
          >
            About Me <FaArrowDown />
          </a>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex justify-center items-center w-full md:w-1/2 px-6 md:px-20 py-10">
          <img
            src={emote}
            alt="Emote"
            className="rounded-b-full w-64 md:w-96"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
