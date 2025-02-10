import React from "react";
import Card from "./Card";

const Projects = () => (
  <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-16 px-8 md:px-20 lg:px-40">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-left">Projects</h2>

    {/* Card Container */}
    <div className="flex flex-col gap-8">

      <Card
        image="/bbtb.png"
        title="Swift & SwiftUI Projects"
        description="Currently building a suite of iOS applications to self-learn 
        Swift and SwiftUI. My latest project is a booking app for a mobile 
        bartending service, enabling customers to seamlessly schedule and manage 
        their bookings through the app."
        githubLink="https://github.com/sebskontos/BoysBehindTheBar"
        technologies={["Swift", "SwiftUI", "XCode"]}
        objectFit="contain"
      />

      <Card
        image="/insite.png"
        title="InSite Monitoring"
        description={
          <>
            Led a group of 6 software engineering students to develop a computer vision system capable of detecting the proper use of safety equipment on construction sites. See{' '}
            <a
              href="https://www.linkedin.com/posts/consilium-solutions-aus_insitemonitoring-consiliumsolutions-projectmanagement-activity-7282961827896926208-9AEV?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              here
            </a>{' '}
            for more details.
          </>
        }
        githubLink="https://github.com/sebskontos/capstone"
        technologies={["Python", "OpenCV", "Tenserflow", "PyTorch", "YOLOv8"]}
      />

      <Card
        image="/harmonize.png"
        title="Harmonize"
        description="A full-stack music streaming web application. Developed and 
        deployed on AWS with Nginx, Django, and Google OAuth 2.0 for secure 
        authentication."
        githubLink="https://github.com/sebskontos/Harmonize"
        technologies={["Python", "Django", "CSS", "HTML", "AJAX", "AWS"]}
      />


      <Card
        image="/space_invaders.png"
        title="Space Invaders Game"
        description="Built a 2D game engine in Java to replicate Space Invaders, 
        featuring enemy spawning, projectiles, collision detection, and game 
        state transitions. Leveraged OOP principles and design patterns like 
        Factory, Builder, and State."
        githubLink="https://github.com/sebskontos/Space-Invaders-v2.0.0"
        technologies={["Java", "JavaFX", "Design Patterns"]}
        objectFit="contain"
      />
    </div>
  </section>
);

export default Projects;
