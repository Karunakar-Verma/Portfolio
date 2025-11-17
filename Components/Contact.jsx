import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-50 py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#245abf] tracking-tight">
          Contact Me
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          Reach out anytime — I’d love to hear from you.
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">

        {/* Left: Contact Info */}
        <div className="md:w-1/2 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Get In Touch</h2>

          <div className="space-y-4">
            <p className="text-gray-700">
              📍 <span className="font-semibold">Dehradun, Uttarakhand</span>
            </p>

            <p className="text-gray-700">
              📧 <span className="font-semibold">reachkarunakar.verma@gmail.com</span>
            </p>

            <p className="text-gray-700">
              📞 <span className="font-semibold">+91 7985140972</span>
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Send a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#245abf] text-white font-semibold py-3 rounded-lg hover:bg-[#1d4ea3] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
