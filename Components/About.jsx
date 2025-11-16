import React, { useState, useEffect } from "react";
import utu from "../src/assets/utu.png"
import mern from "../src/assets/mern.png"
import application from "../src/assets/application.png"
const experiences = [
  {
    title: "Web Development Intern",
    company: "Cognifyz Technologies",
    date: "Aug 2025 - Sep 2025",
    description: "Worked on frontend development using React.js and Tailwind CSS.",
    image: mern,
  },
  {
    title: "Application Engineer Intern",
    company: " Advantech India",
    date: "April 2025 - May 2025",
    description: "Assisted the engineering team with technical documentation and testing data for industrial solutions.",
    image: application,
  },
  {
    title: "B Tech (CSE)",
    company: "Uttarakhand Technical University",
    date: "Jun 2021-June 2025",
    description: "Developed a full-stack MERN application for practical learning.",
    image: utu,
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experiences.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const exp = experiences[current];

  return (
    <div id="about" className="bg-gray-50 py-16">
      
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-[#245abf] tracking-tight">
          About Me
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          A brief introduction and my Journey so far
        </p>
      </div>

      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-12 px-4">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h2>
          <p
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="text-gray-700 text-lg leading-relaxed"
          >
            I’m <span className="font-semibold text-[#245abf]">Karunakar Verma</span>, a MERN stack developer currently focused on front-end development. I’m pursuing my <span className="font-semibold">B.Tech in Computer Science & Engineering at Uttarakhand Technical University (2025 pass-out)</span> while building expertise in <span className="font-semibold">React.js, Node.js, Express.js, MongoDB</span>, and modern web technologies. I’m passionate about creating responsive web applications and exploring new technologies.
          </p>
        </div>

        {/* Right Section - Auto Sliding Experience Cards */}
        <div className="lg:w-1/2 flex justify-center items-start">
          <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md transition-all duration-500">
            <img
              src={exp.image}
              alt={exp.title}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-center mb-1">{exp.title}</h3>
            <p className="text-gray-500 text-center mb-2">{exp.company}</p>
            <p className="text-gray-400 text-center mb-4 text-sm">{exp.date}</p>
            <p className="text-gray-700 text-center">{exp.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
