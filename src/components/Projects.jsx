import React from "react";
import Card from "./Card";

const Projects = () => (
  <section id="projects" className="bg-gray-900 py-16 px-8 md:px-20 lg:px-40">
    <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card
        title="Harmonize"
        description="A full-stack music streaming web application. Developed and 
        deployed on AWS with Nginx, Django, and Google OAuth 2.0 for secure 
        authentication."
        githubLink="https://github.com/ssko7098/Harmonize"
      />
      <Card
        title="Space Invaders Game"
        description="Developed a 2D game engine using Java to replicate Space 
        Invaders, implementing mechanics such as enemy spawning, projectile 
        firing, collision detection, and game state transitions. Applied 
        object-oriented programming (OOP) principles and design patterns 
        (Factory, Builder, State, Strategy, Singleton, Observer)."
        githubLink="https://github.com/ssko7098/Space-Invaders-v2.0.0"
      />
    </div>
  </section>
);

export default Projects;
