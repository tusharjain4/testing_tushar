import React from "react";
import { PortfolioData } from "@/data/portfolio.json";

interface SkillsProps {
  data: typeof PortfolioData;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const hasSkills = data.skills && data.skills.length > 0;

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Skills</h2>
        {hasSkills ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-800 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-500">
              Skills list is currently empty. Add items to <code className="bg-gray-200 px-2 py-1 rounded text-sm">portfolio.json</code>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;