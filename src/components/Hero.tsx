import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "Backend Developer",
    "Database Administrator",
    "SSRS Developer",
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeTimer = setInterval(
      () => {
        if (!isDeleting && charIndex < currentRole.length) {
          setTypedText(currentRole.substring(0, charIndex + 1));
          charIndex++;
        } else if (isDeleting && charIndex > 0) {
          setTypedText(currentRole.substring(0, charIndex - 1));
          charIndex--;
        } else if (!isDeleting && charIndex === currentRole.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        } else if (isDeleting && charIndex === 0) {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          isDeleting = false;
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearInterval(typeTimer);
  }, [currentIndex]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Hi, I'm <span className="text-blue-500">Ragul Namachivayam</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 h-10">
              <span className="text-blue-500">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Passionate backend developer with 2+ years of experience building
            scalable, high-performance systems. Specialized in microservices
            architecture, cloud infrastructure, and API development that powers
            millions of users.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            {["Node.js", "Python", "AWS", "Javascript", "MySQL", "SSRS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800 text-blue-500 rounded-full border border-slate-600"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 hover:text-white transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 hover:text-white transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ragulnamachivayam@gmail.com"
              className="p-3 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 hover:text-white transition-all duration-200"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="pt-8">
            <button
              onClick={scrollToNext}
              className="animate-bounce p-2 text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Scroll to About section"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
