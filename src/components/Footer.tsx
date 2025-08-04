import React from "react";
import { Code2, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-white">
              Ragul Namachivayam
            </span>
          </div>

          <div className="flex items-center text-slate-400 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>

          <div className="text-slate-400 text-sm mt-4 md:mt-0">
            © {currentYear} Ragul Namachivayam. All rights reserved.
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm">
            Passionate about building scalable backend systems that power the
            future of technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
