import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Sebastian.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-start bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 px-8 md:px-20 lg:px-40">
      {/* Dynamic AI Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <canvas id="dynamicBackground" className="w-full h-full opacity-50"></canvas>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-left z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-4">
          {typedText}
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl">
          I'm a dedicated Software Engineering and Law student at the University of Sydney, focusing on creating impactful solutions with AI and Machine Learning.
        </p>
        <div className="mt-8 flex items-center space-x-4">
        <motion.button
            onClick={() => handleScroll("about")}
            className="inline-block px-6 py-3 text-sm md:text-base bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About Me
          </motion.button>
          
          <motion.button
            onClick={() => handleScroll("projects")}
            className="inline-block px-6 py-3 text-sm md:text-base bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Check Out My Work
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;