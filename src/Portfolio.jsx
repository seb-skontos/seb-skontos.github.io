import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Portfolio = () => {
  useEffect(() => {
    const canvas = document.getElementById("dynamicBackground");
    const ctx = canvas.getContext("2d");
    let particles = [];
    
    // Define adaptive settings based on screen width
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 50 : 100;  // Fewer particles on mobile
    const CONNECTION_DISTANCE = isMobile ? 70 : 100;  // Shorter links on mobile
    const SPEED_MULTIPLIER = 0.5;

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED_MULTIPLIER,
      vy: (Math.random() - 0.5) * SPEED_MULTIPLIER,
      size: Math.random() * 2 + 1,
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();

        // Reduce the number of connections on smaller screens
        particles.forEach((other, j) => {
          if (i !== j) {
            const dx = p.x - other.x;
            const dy = p.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONNECTION_DISTANCE) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / CONNECTION_DISTANCE})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });
    };

    const update = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
    };

    const loop = () => {
      draw();
      update();
      requestAnimationFrame(loop);
    };

    const initializeParticles = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle());
      }
      loop();
    };

    // Set up the canvas size
    const resizeCanvas = () => {
      const oldParticles = particles.map(p => ({ ...p })); // Preserve particle positions
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = oldParticles.filter(p => p.x < canvas.width && p.y < canvas.height); // Remove out-of-bound particles
      while (particles.length < PARTICLE_COUNT) {
        particles.push(createParticle()); // Add new particles if needed
      }
    };

    // Initial setup
    resizeCanvas();
    initializeParticles();
    loop();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>&copy; 2025 Sebastian. All rights reserved. Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Tailwind CSS</a>. </p>
      </footer>
      {/* Background Canvas */}
      <canvas
        id="dynamicBackground"
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      ></canvas>
    </div>
  );
};

export default Portfolio;
