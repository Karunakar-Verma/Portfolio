import React from 'react';
import htmlLogo from "../src/assets/htmlLogo.png"
import tailwindLogo from "../src/assets/tailwindLogo.png"
import jsLogo from "../src/assets/jsLogo.png"
import reactLogo from "../src/assets/reactLogo.png"


import nodeLogo from "../src/assets/nodeLogo.png"
import expressLogo from "../src/assets/expressLogo.png"
import mongo from "../src/assets/mongo.png"
import mysqlLogo from "../src/assets/jsLogo.png"


import githubLogo from "../src/assets/githubLogo.png"
import postmanLogo from "../src/assets/postmanLogo.png"
import vscode from "../src/assets/vscode.png"
import vite from "../src/assets/vite.png"


const getPlaceholderUrl = (name, color) => {
    const colorHex = {
        orange: 'f97316', sky: '0ea5e9', yellow: 'f59e0b', blue: '3b82f6', indigo: '6366f1',
        green: '22c55e', gray: '6b7280', lime: '84cc16', red: 'ef4444', purple: 'a855f7'
    }[color] || 'cccccc';
  
    return `https://placehold.co/40x40/${colorHex}/ffffff?text=${name.substring(0, 1)}`;
};

// --- Skill Data Array  ---
const SKILLS_DATA = [
  {
    category: "Frontend",
    description: "Building fast, beautiful, and accessible user interfaces.",
    technologies: [
      { name: "HTML", color: "orange", iconUrl: htmlLogo },
      { name: "Tailwind CSS", color: "sky", iconUrl: tailwindLogo },
      { name: "JavaScript", color: "yellow", iconUrl: jsLogo },
      { name: "ReactJS", color: "blue", iconUrl:reactLogo },
      { name: "Material UI", color: "indigo", iconUrl: getPlaceholderUrl("Material", "indigo") },
    ],
  },
  {
    category: "Backend",
    description: "Designing reliable server-side logic and managing database systems.",
    technologies: [
      { name: "NodeJS", color: "green", iconUrl: nodeLogo },
      { name: "ExpressJS", color: "gray", iconUrl: expressLogo },
      { name: "MongoDB", color: "lime", iconUrl: mongo },
      { name: "MySQL", color: "blue", iconUrl: mysqlLogo },
      { name: "REST API", color: "red", iconUrl: getPlaceholderUrl("REST", "red") },
    ],
  },
  {
    category: "Tools & Workflow",
    description: "Essential utilities for collaboration, development, and testing.",
    technologies: [
      { name: "Git", color: "red", iconUrl: githubLogo },
      { name: "Postman", color: "orange", iconUrl: postmanLogo },
      { name: "Vite", color: "purple", iconUrl: vite },
      { name: "VS Code", color: "blue", iconUrl: vscode },
    ],
  },
];

// --- Reusable Skill Card Component ---
const SkillCard = ({ name, color, iconUrl }) => {
  
  const colorMap = {
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-500' },
    sky: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-500' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-500' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-500' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-500' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-500' },
    gray: { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-500' },
    lime: { bg: 'bg-lime-50', text: 'text-lime-600', border: 'border-lime-500' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-500' },
  };

  const colors = colorMap[color] || colorMap.gray;

  return (
    <div
      className={`
        ${colors.bg} p-4 w-full sm:w-32 h-32 flex flex-col items-center justify-center rounded-xl shadow-md 
        transition-all duration-300 transform hover:scale-[1.05] hover:shadow-xl 
        border-b-4 ${colors.border} cursor-pointer
      `}
    >
      {/* <img> Tag is now used to render your logo image */}
      <img 
        src={iconUrl} 
        alt={`${name} logo`} 
        className="w-10 h-10 mb-2 object-contain"
      
        style={{ borderRadius: '50%', border: `2px solid ${colors.border.replace('border-', '#').replace('-500', '')}` }}
      />
      
      {/* Skill Name */}
      <span className="text-center font-semibold text-sm leading-tight text-gray-800">{name}</span>
    </div>
  );
};

// --- Main Skills Component ---
const Skills = () => {
  return (
    
    <div id="skills" className="min-h-screen pt-30 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Title and Description */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-[#245abf] font-extrabold  mb-4 tracking-tight">
            Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {"The tools and technologies I use to build seamless web experiences."}
          </p>
          {/* <hr className="mt-6 w-24 mx-auto border-t-4 border-indigo-500 rounded-full" /> */}
        </header>

        {/* Skills Grid Section */}
        <div className="space-y-16">
          {SKILLS_DATA.map((section) => (
            <div key={section.category} className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-100">
              
              {/* Category Heading */}
              <h2 className="text-3xl font-bold text-[#245abf] mb-3 border-b pb-2 border-indigo-100">
                {section.category}
              </h2>
              <p className="text-gray-500 mb-8 italic">{section.description}</p>
              
              {/* Technologies Display */}
              <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
                {section.technologies.map((skill) => (
                  <SkillCard 
                    key={skill.name}
                    name={skill.name} 
                    color={skill.color} 
                    iconUrl={skill.iconUrl} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Skills;