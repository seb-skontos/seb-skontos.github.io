import React from "react";

const Card = ({ image, title, description, githubLink, technologies, objectFit = "cover" }) => (
  <div className="grid sm:grid-cols-8 gap-6 bg-gray-800 p-6 rounded-lg shadow-lg">
    {/* Thumbnail */}
    <div className="sm:col-span-2 flex-shrink-0">
      <div className="w-full h-36 md:h-40 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-${objectFit}`}
        />
      </div>
    </div>

    {/* Content */}
    <div className="sm:col-span-6 flex flex-col justify-between">
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-100 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 mb-4">{description}</p>

      {/* GitHub Link */}
      {githubLink && (
        <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline mb-4"
        >
          View on GitHub ↗
        </a>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-sm bg-gray-700 text-gray-200 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Card;
