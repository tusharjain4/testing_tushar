import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/data/portfolio.json";

interface HeroProps {
  data: typeof PortfolioData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section
      id="hero"
      className="section-padding flex items-center justify-center min-h-[80vh]"
    >
      <div className="container-width grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wide uppercase">
            {data.role}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            {data.name}
          </h1>
          <p className="text-xl text-gray-700 mb-6">{data.tagline}</p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          {data.heroImageUrl && (
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
              <Image
                src={data.heroImageUrl}
                alt={`${data.name}'s profile`}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;