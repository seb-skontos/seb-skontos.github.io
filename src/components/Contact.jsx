import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="bg-gray-800 py-16 text-center text-gray-100 px-8 md:px-20 lg:px-40">
    <h2 className="text-4xl font-bold text-blue-400 mb-6">Get in Touch</h2>
    <p className="text-gray-400 mb-6">
      I'm always open to discussing exciting projects and collaborations. Feel free to reach out!
    </p>
    
    {/* Contact Icons */}
    <div className="flex justify-center space-x-6 mb-6">
      <a href="mailto:skontossebastian@gmail.com" className="text-blue-400 hover:text-blue-500 text-2xl transition-transform transform hover:scale-110">
        <FaEnvelope />
      </a>
      <a href="https://github.com/ssko7098" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 text-2xl transition-transform transform hover:scale-110">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/sebastian-skontos" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 text-2xl transition-transform transform hover:scale-110">
        <FaLinkedin />
      </a>
    </div>
  </section>
);

export default Contact;
