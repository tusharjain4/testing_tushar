import React from "react";

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="container-width flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;