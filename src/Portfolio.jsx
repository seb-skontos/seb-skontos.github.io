import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Portfolio = () => {

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
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center py-6">
        <p>&copy; 2025 Sebastian. All rights reserved. Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 hover:underline">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 hover:underline">Tailwind CSS</a>. </p>
      </footer>
    </div>
  );
};

export default Portfolio;
