import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Portfolio = () => {
  useEffect(() => {
    const canvas = document.getElementById("dynamicBackground");
    const ctx = canvas.getContext("2d");
    const particles = [];

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        // Draw the particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();

        // Draw connections to nearby particles
        particles.forEach((other, j) => {
          if (i !== j) {
            const dx = p.x - other.x;
            const dy = p.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
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

        // Bounce particles off the edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
    };

    const loop = () => {
      draw();
      update();
      requestAnimationFrame(loop);
    };

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    // Start animation loop
    loop();

    // Adjust canvas size on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
        <p>&copy; 2025 Sebastian. All rights reserved.</p>
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
