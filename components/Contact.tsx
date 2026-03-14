import React from "react";
import { PortfolioData } from "@/data/portfolio.json";

interface ContactProps {
  data: typeof PortfolioData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const { contact } = data;

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="bg-gray-900 text-white p-8 md:p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <a
                href={`mailto:${contact.email}`}
                className="text-xl font-medium hover:underline"
              >
                {contact.email}
              </a>
              
              <div className="flex flex-col gap-4 mt-8">
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="font-medium">LinkedIn</span>
                  </a>
                )}
                {contact.github && (
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="font-medium">GitHub</span>
                  </a>
                )}
                {contact.twitter && (
                  <a
                    href={contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="font-medium">Twitter / Medium</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;