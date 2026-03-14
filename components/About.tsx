import React from "react";
import { PortfolioData } from "@/data/portfolio.json";

interface AboutProps {
  data: typeof PortfolioData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-width">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {data.about}
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Experience
              </h3>
              <p className="text-3xl font-bold text-gray-900">
                {data.experience}+ Years
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Current Role
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {data.currentRole}
              </p>
            </div>
          </div>
        </div>
        {data.highlights && data.highlights.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Highlights</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {data.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;