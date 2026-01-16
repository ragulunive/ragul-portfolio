import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Nature Explorer App",
      description:
        "A nature-focused application built to showcase environmental content with clean UI and backend-driven data handling.",
      image:
        "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Node.js", "Express.js", "MySQL", "REST API", "Git"],
      highlights: [
        "Designed RESTful APIs to manage nature-related content",
        "Implemented structured backend logic for scalable data handling",
        "Integrated MySQL database for storing and retrieving application data",
        "Focused on clean API responses and maintainable backend structure",
      ],
      github: "https://github.com/ragulunive",
      demo: "",
    },
    {
      title: "Books Management App",
      description:
        "A backend-driven books management application to handle book records, categories, and structured data operations.",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Node.js", "Express.js", "MySQL", "CRUD Operations", "Git"],
      highlights: [
        "Developed CRUD APIs for managing books and related metadata",
        "Implemented proper request validation and error handling",
        "Optimized MySQL queries for efficient data retrieval",
        "Followed MVC architecture for cleaner and scalable codebase",
      ],
      github: "https://github.com/ragulunive",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Backend-focused projects demonstrating API design, database
            handling, and clean architecture
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg border border-slate-600 overflow-hidden hover:border-blue-500 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-slate-300 text-sm flex items-start"
                      >
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-xs border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-300 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Code</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-300 hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
