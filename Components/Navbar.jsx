import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 p-4 border border-gray-200 bg-gray-100">

      {/* Logo */}
      <div className="font-poppins text-3xl font-bold text-[#245abf]">Portfolio</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-6 pt-2">
        <li className="hover:underline hover:decoration-[#245abf] text-xl"><a href="#home">Home</a></li>
        <li className="hover:underline hover:decoration-[#245abf] text-xl"><a href="#skills">Skills</a></li>
        <li className="hover:underline hover:decoration-[#245abf] text-xl"><a href="#projects">Projects</a></li>
        <li className="hover:underline hover:decoration-[#245abf] text-xl"><a href="#about">About</a></li>
        <li className="hover:underline hover:decoration-[#245abf] text-xl"><a href="#contact">Contact</a></li>
      </ul>

      {/* Desktop Resume */}
      <div className="hidden md:block font-poppins text-xl font-bold">
        <a
          href="/Karunakar_Verma_Resume.pdf"
          target="_blank"
          className="cursor-pointer text-[#245abf]"
        >
          Resume
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-2xl font-bold text-[#245abf]"
        onClick={() => setOpen(!open)}
      >
        {open ? "X" : "≡"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-gray-100 border-b py-4 flex flex-col gap-4 items-center md:hidden">
          <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
          <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
          <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
          <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
          <li>
            <a
              href="/Karunakar_Verma_Resume.pdf"
              target="_blank"
              className="text-[#245abf] font-semibold"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
