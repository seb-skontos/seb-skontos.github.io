import React from "react";

const Card = ({ title, description, githubLink }) => (
  <div className="rounded-2xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 hover:scale-105 hover:shadow-2xl transition-transform p-6">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
    >
      View on GitHub
    </a>
  </div>
);


export default Card;
