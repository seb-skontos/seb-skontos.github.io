import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Sebastian.";
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [particleColor, setParticleColor] = useState(theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      setParticleColor("rgba(255, 255, 255, 0.8)");
    } else {
      root.classList.remove("dark");
      setParticleColor("rgba(0, 0, 0, 0.8)");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const canvas = document.getElementById("dynamicBackground");
    const ctx = canvas.getContext("2d");
    const particles = [];
    const particleCount = 150; // Increase particle count for more connections
    const connectionDistance = 120; // Increase connection distance for more connections

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Smaller particles
        this.speedX = (Math.random() * 1 - 0.5) * 0.3; // Slower speed
        this.speedY = (Math.random() * 1 - 0.5) * 0.3; // Slower speed
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.5) this.size -= 0.01; // Slower size reduction

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x;
          const dy = particle.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particleColor.replace("0.8", `${1 - distance / connectionDistance}`);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        if (particle.size <= 0.5) {
          particles.splice(index, 1);
          particles.push(new Particle());
        }
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, [particleColor]);

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-start bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-8 md:px-20 lg:px-40">
      {/* Theme Toggle Button - Positioned Top Right */}
      <div className="absolute top-6 right-8 z-20">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 transition-transform transform hover:scale-110 shadow-lg hover:shadow-xl"
        >
          {theme === "dark" ? (
            <FaSun className="text-yellow-400 w-6 h-6 transition duration-300" />
          ) : (
            <FaMoon className="text-blue-500 w-6 h-6 transition duration-300" />
          )}
        </button>
      </div>
      
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
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          {typedText}
        </h1>
        <p className="text-gray-700 dark:text-gray-400 text-lg md:text-xl max-w-3xl">
        A dedicated Software Engineering and Law student at the University of Sydney,
        focused on building innovative and creative solutions. From AI-driven 
        applications to interactive design, I love crafting technology that 
        merges intelligence with imagination.
        </p>
        <div className="mt-8 flex items-center space-x-4">
        <motion.button
            onClick={() => handleScroll("about")}
            className="inline-block px-6 py-3 text-sm md:text-base bg-gray-700 dark:bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About Me
          </motion.button>
          
          <motion.button
            onClick={() => handleScroll("projects")}
            className="inline-block px-6 py-3 text-sm md:text-base bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
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