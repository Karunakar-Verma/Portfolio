import React from "react";

const projects = [
  {
    name: "Amazon Clone - E-commerce Web Application",
    tech: "React.js, Redux Toolkit, Node.js, Stripe API, Tailwind CSS",
    date: "01/2025 - 02/2025",
    description:
      "Built a full-stack e-commerce platform with product listings, shopping cart, and secure checkout. Managed global state using Redux Toolkit and integrated Stripe API for payments with protected JWT routes.",
    github: "https://github.com/Karunakar-Verma/newAmazon_Clone",
  },
   {
    name: "“SafeServe” (Restaurant Order & Menu system)",
    tech: "MySQL , Node.js, Multer, Express.js, JWT ",
    date: "11/2025 - 11/2025",
    description:
      "Built production-grade RESTful APIs for SafeServe using Node.js, Express.js, MySQL, JWT, and Multer, delivering menu management, order processing, role-based authorization, input validation, custom error handling, optimized queries, Postman test collections, and complete API documentation aligned with PRD/HLD/LLD.",
    github: "https://github.com/Karunakar-Verma/SafeServe---Restaurant-Order-and-Menu-API",
  },
  {
    name: "Courseluto - Online Learning Platform",
    tech: "MERN Stack, Tailwind CSS, JWT, Cloudinary, Razorpay",
    date: "03/2025 - 04/2025",
    description:
      "Developed a Udemy-style platform with course registration, video uploads, and enrollments. Implemented JWT authentication, Cloudinary storage, admin dashboards, and Razorpay integration.",
    github: "https://github.com/Karunakar-Verma/CourseLuto.Com",
  },
    {
    name: "Console-based AI Chatbot",
    tech: "C#, OOPS",
    date: "01/2025 - 02/2025",
    description:
      "Developed a console-based AI chatbot in C# using OOP principles (encapsulation, inheritance, polymorphism, abstraction) with separate User, Bot, and Message classes, featuring dynamic conversation handling, a learnable runtime knowledge base, and a scalable, maintainable clean-code architecture.",
    github: "https://github.com/Karunakar-Verma/LMS_OOPS_C-",
  },
  {
    name: "YouTube Clone - Video Streaming Application",
    tech: "MERN Stack, Tailwind CSS, JWT, Mongoose, REST API",
    date: "05/2025 - 06/2025",
    description:
      "Replicated YouTube features including sign-in, video uploads, like/comment system, and trending feed. Built REST APIs with Express and Mongoose, implemented secure auth, and optimized video search.",
    github: "https://github.com/Karunakar-Verma/YouTube_Clone",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#245abf] tracking-tight">
          Projects
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          A showcase of my featured work and applications
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {project.name}
              </h2>

              <p className="text-gray-500 text-sm mb-2">{project.date}</p>

              <p className="text-sm text-[#245abf] font-semibold mb-3">
                Tech: {project.tech}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* GitHub Button */}
            <a
              href={project.github}
              target="_blank"
              className="mt-6 px-4 py-2 text-center bg-[#245abf] text-white font-semibold rounded-lg hover:bg-[#1d4ea3] transition"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
