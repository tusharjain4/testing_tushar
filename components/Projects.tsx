import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/data/portfolio.json";

interface ProjectsProps {
  data: typeof PortfolioData;
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const hasProjects = data.projects && data.projects.length > 0;

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-width">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Projects</h2>
        
        {hasProjects ? (
          <div className="grid md:grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                {project.imageUrl && (
                  <div className="relative w-full h-48 bg-gray-200">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500">
              No projects listed yet. Add items to <code className="bg-gray-100 px-2 py-1 rounded text-sm">portfolio.json</code>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;