import React from "react";


const Navbar = () => {
  return (
    <div className="flex justify-between sticky top-0 z-50 p-4 border border-gray-200 bg-gray-100">
      <div className="font-poppins text-3xl font-bold text-[#245abf]">Portfolio</div>

      <ul className="flex justify-center gap-6 pt-2 ">
        <li className="hover:underline hover:decoration-[#245abf] text-xl "><a href="#home">Home</a></li>
        <li className="hover:underline hover:decoration-[#245abf]k text-xl"><a href="#skills">Skills</a></li>
        <li className="hover:underline hover:decoration-[#245abf] text-xl"><a href="#projects">Projects</a></li>
        <li className="hover:underline hover:decoration-[#245abf] text-xl"><a href="#about">About</a></li>
        <li className="hover:underline hover:decoration-[#245abf] text-xl"><a href="#contact">Contact</a></li>
      </ul>

      <div className="font-poppins text-3xl font-bold">
        <button className="cursor-pointer text-[#245abf]">Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
